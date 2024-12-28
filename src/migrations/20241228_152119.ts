import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_dictionary_part_of_speech" ADD VALUE 'verb/noun' BEFORE 'adjective';
  DROP TABLE "dictionary_part_of_speech" CASCADE;
  ALTER TABLE "dictionary" ADD COLUMN "part_of_speech" "enum_dictionary_part_of_speech" NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "dictionary_part_of_speech" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_dictionary_part_of_speech",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "dictionary_part_of_speech" ADD CONSTRAINT "dictionary_part_of_speech_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."dictionary"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "dictionary_part_of_speech_order_idx" ON "dictionary_part_of_speech" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "dictionary_part_of_speech_parent_idx" ON "dictionary_part_of_speech" USING btree ("parent_id");
  ALTER TABLE "dictionary" DROP COLUMN IF EXISTS "part_of_speech";
  ALTER TABLE "public"."dictionary_part_of_speech" ALTER COLUMN "value" SET DATA TYPE text;
  DROP TYPE "public"."enum_dictionary_part_of_speech";
  CREATE TYPE "public"."enum_dictionary_part_of_speech" AS ENUM('noun', 'verb', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection');
  ALTER TABLE "public"."dictionary_part_of_speech" ALTER COLUMN "value" SET DATA TYPE "public"."enum_dictionary_part_of_speech" USING "value"::"public"."enum_dictionary_part_of_speech";`)
}
