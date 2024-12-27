import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_dictionary_part_of_speech" AS ENUM('noun', 'verb', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection');
  CREATE TABLE IF NOT EXISTS "dictionary" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"word" varchar NOT NULL,
  	"part_of_speech" "enum_dictionary_part_of_speech" NOT NULL,
  	"definition" varchar NOT NULL,
  	"example" varchar,
  	"pronunciation" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "dictionary_id" integer;
  CREATE UNIQUE INDEX IF NOT EXISTS "dictionary_word_idx" ON "dictionary" USING btree ("word");
  CREATE INDEX IF NOT EXISTS "dictionary_updated_at_idx" ON "dictionary" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "dictionary_created_at_idx" ON "dictionary" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_dictionary_fk" FOREIGN KEY ("dictionary_id") REFERENCES "public"."dictionary"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_dictionary_id_idx" ON "payload_locked_documents_rels" USING btree ("dictionary_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "dictionary" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "dictionary" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_dictionary_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_dictionary_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "dictionary_id";
  DROP TYPE "public"."enum_dictionary_part_of_speech";`)
}
