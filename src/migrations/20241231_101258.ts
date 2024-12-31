import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en', 'bg');
  ALTER TYPE "public"."enum_dictionary_part_of_speech" ADD VALUE 'съществително';
  ALTER TYPE "public"."enum_dictionary_part_of_speech" ADD VALUE 'глагол';
  ALTER TYPE "public"."enum_dictionary_part_of_speech" ADD VALUE 'глагол/съществително';
  ALTER TYPE "public"."enum_dictionary_part_of_speech" ADD VALUE 'прилагателно';
  ALTER TYPE "public"."enum_dictionary_part_of_speech" ADD VALUE 'наречие';
  ALTER TYPE "public"."enum_dictionary_part_of_speech" ADD VALUE 'местоимение';
  ALTER TYPE "public"."enum_dictionary_part_of_speech" ADD VALUE 'предлог';
  ALTER TYPE "public"."enum_dictionary_part_of_speech" ADD VALUE 'съюз';
  ALTER TYPE "public"."enum_dictionary_part_of_speech" ADD VALUE 'междуметие';
  CREATE TABLE IF NOT EXISTS "dictionary_locales" (
  	"word" varchar NOT NULL,
  	"part_of_speech" "enum_dictionary_part_of_speech" NOT NULL,
  	"definition" varchar NOT NULL,
  	"example" varchar,
  	"published" boolean DEFAULT false,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  DROP INDEX IF EXISTS "dictionary_word_idx";
  DO $$ BEGIN
   ALTER TABLE "dictionary_locales" ADD CONSTRAINT "dictionary_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dictionary"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE UNIQUE INDEX IF NOT EXISTS "dictionary_word_idx" ON "dictionary_locales" USING btree ("word","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "dictionary_locales_locale_parent_id_unique" ON "dictionary_locales" USING btree ("_locale","_parent_id");
  ALTER TABLE "dictionary" DROP COLUMN IF EXISTS "word";
  ALTER TABLE "dictionary" DROP COLUMN IF EXISTS "part_of_speech";
  ALTER TABLE "dictionary" DROP COLUMN IF EXISTS "definition";
  ALTER TABLE "dictionary" DROP COLUMN IF EXISTS "example";
  ALTER TABLE "dictionary" DROP COLUMN IF EXISTS "published";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "dictionary_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "dictionary_locales" CASCADE;
  ALTER TABLE "dictionary" ADD COLUMN "word" varchar NOT NULL;
  ALTER TABLE "dictionary" ADD COLUMN "part_of_speech" "enum_dictionary_part_of_speech" NOT NULL;
  ALTER TABLE "dictionary" ADD COLUMN "definition" varchar NOT NULL;
  ALTER TABLE "dictionary" ADD COLUMN "example" varchar;
  ALTER TABLE "dictionary" ADD COLUMN "published" boolean DEFAULT false;
  CREATE UNIQUE INDEX IF NOT EXISTS "dictionary_word_idx" ON "dictionary" USING btree ("word");
  ALTER TABLE "public"."dictionary" ALTER COLUMN "part_of_speech" SET DATA TYPE text;
  DROP TYPE "public"."enum_dictionary_part_of_speech";
  CREATE TYPE "public"."enum_dictionary_part_of_speech" AS ENUM('noun', 'verb', 'verb/noun', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection');
  ALTER TABLE "public"."dictionary" ALTER COLUMN "part_of_speech" SET DATA TYPE "public"."enum_dictionary_part_of_speech" USING "part_of_speech"::"public"."enum_dictionary_part_of_speech";
  DROP TYPE "public"."_locales";`)
}
