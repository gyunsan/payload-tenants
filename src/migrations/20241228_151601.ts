import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "dictionary_part_of_speech" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_dictionary_part_of_speech",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  ALTER TABLE "dictionary" ADD COLUMN "published" boolean DEFAULT false;
  ALTER TABLE "dictionary" ADD COLUMN "tenant_id" integer NOT NULL;
  DO $$ BEGIN
   ALTER TABLE "dictionary_part_of_speech" ADD CONSTRAINT "dictionary_part_of_speech_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."dictionary"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "dictionary_part_of_speech_order_idx" ON "dictionary_part_of_speech" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "dictionary_part_of_speech_parent_idx" ON "dictionary_part_of_speech" USING btree ("parent_id");
  DO $$ BEGIN
   ALTER TABLE "dictionary" ADD CONSTRAINT "dictionary_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "dictionary_tenant_idx" ON "dictionary" USING btree ("tenant_id");
  ALTER TABLE "dictionary" DROP COLUMN IF EXISTS "part_of_speech";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "dictionary_part_of_speech" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "dictionary_part_of_speech" CASCADE;
  ALTER TABLE "dictionary" DROP CONSTRAINT "dictionary_tenant_id_tenants_id_fk";
  
  DROP INDEX IF EXISTS "dictionary_tenant_idx";
  ALTER TABLE "dictionary" ADD COLUMN "part_of_speech" "enum_dictionary_part_of_speech" NOT NULL;
  ALTER TABLE "dictionary" DROP COLUMN IF EXISTS "published";
  ALTER TABLE "dictionary" DROP COLUMN IF EXISTS "tenant_id";`)
}
