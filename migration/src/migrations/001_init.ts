import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('user')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('name', 'varchar(100)', (col) => col.notNull())
    .addColumn('gender', 'varchar(20)', (col) => col.notNull())
    .addColumn('introduction', 'text')
    .execute();
  await db.schema
    .createTable('post')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('title', 'varchar(100)', (col) => col.notNull())
    .addColumn('content', 'text', (col) => col.notNull())
    .addColumn('created_at', 'timestamptz', (col) => col.defaultTo(sql`now()`).notNull())
    .addColumn('created_by', 'integer', (col) => col.references('user.id').onDelete('cascade').notNull())
    .addColumn('updated_at', 'timestamptz', (col) => col.defaultTo(sql`now()`).notNull())
    .addColumn('updated_by', 'integer', (col) => col.references('user.id').onDelete('cascade').notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('post').execute();
  await db.schema.dropTable('user').execute();
}
