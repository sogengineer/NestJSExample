import db from "./core/db";

export default async function get() {
  const res = await db
    .selectFrom('post as p')
    .leftJoin('user as u1', 'p.created_by', 'u1.id')
    .leftJoin('user as u2', 'p.updated_by', 'u2.id')
    .selectAll('p')
    .select(['u1.name as created_by_name', 'u2.name as updated_by_name'])
    .where('p.id', '=', 1)
   .executeTakeFirst();
  console.log(res);
  await db.destroy();
}
