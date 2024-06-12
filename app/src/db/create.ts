import db from "./core/db";

export default async function create() {
  await db.insertInto('user').values({ 'name': 'ユーザー1', gender: 'man' }).execute();
  await db.insertInto('user').values({ 'name': 'ユーザー2', gender: 'woman', introduction: 'じこしょーかい' }).execute();
  await db.insertInto('post').values({ title: 'タイトル', content: '内容'.repeat(30), created_by: 1, updated_by: 1 }).execute();
  await db.destroy();
}