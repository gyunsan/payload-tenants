import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "pricing_tiers_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"tooltip" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pricing_tiers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"price" numeric,
  	"discount_percentage" numeric,
  	"is_featured" boolean,
  	"is_most_popular" boolean,
  	"button_text" varchar,
  	"button_color" varchar,
  	"button_variant" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pricing_addons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"description" varchar,
  	"price" numeric,
  	"time_in_weeks" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "pricing" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"tenant_id" integer NOT NULL,
  	"site_url" varchar NOT NULL,
  	"site_name" varchar NOT NULL,
  	"site_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "pricing_id" integer;
  DO $$ BEGIN
   ALTER TABLE "pricing_tiers_features" ADD CONSTRAINT "pricing_tiers_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pricing_tiers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pricing_tiers" ADD CONSTRAINT "pricing_tiers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pricing"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pricing_addons" ADD CONSTRAINT "pricing_addons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pricing"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pricing" ADD CONSTRAINT "pricing_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pricing_tiers_features_order_idx" ON "pricing_tiers_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pricing_tiers_features_parent_id_idx" ON "pricing_tiers_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pricing_tiers_order_idx" ON "pricing_tiers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pricing_tiers_parent_id_idx" ON "pricing_tiers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pricing_addons_order_idx" ON "pricing_addons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pricing_addons_parent_id_idx" ON "pricing_addons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pricing_tenant_idx" ON "pricing" USING btree ("tenant_id");
  CREATE INDEX IF NOT EXISTS "pricing_updated_at_idx" ON "pricing" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "pricing_created_at_idx" ON "pricing" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pricing_fk" FOREIGN KEY ("pricing_id") REFERENCES "public"."pricing"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_pricing_id_idx" ON "payload_locked_documents_rels" USING btree ("pricing_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pricing_tiers_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pricing_tiers" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pricing_addons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pricing" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pricing_tiers_features" CASCADE;
  DROP TABLE "pricing_tiers" CASCADE;
  DROP TABLE "pricing_addons" CASCADE;
  DROP TABLE "pricing" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_pricing_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_pricing_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "pricing_id";`)
}
