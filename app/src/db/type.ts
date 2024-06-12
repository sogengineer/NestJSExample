import { ColumnType, Generated, Insertable, Selectable, Updateable } from 'kysely';

/** データベース全体 */
export interface Database {
  /** ユーザーテーブル */
  user: UserTable;
  /** 投稿テーブル */
  post: PostTable;
};

/** ユーザーテーブル */
export interface UserTable {
  /** ユーザーID */
  id: Generated<number>;
  /** ユーザー氏名 */
  name: string;
  /** 性別 */
  gender: 'man' | 'woman' | 'other';
  /** 自己紹介 */
  introduction: string | null;
};
export type User = Selectable<UserTable>;
export type NewUser = Insertable<UserTable>;
export type UserUpdate = Updateable<UserTable>;

/** 投稿テーブル */
export interface PostTable {
  /** 投稿ID */
  id: Generated<number>;
  /** タイトル */
  title: string;
  /** 内容 */
  content: string;
  /** 作成日時 */
  created_at: ColumnType<Date, never, never>;
  /** 作成者ID */
  created_by: number;
  /** 更新日時 */
  updated_at: ColumnType<Date, never, Date>;
  /** 更新者ID */
  updated_by: number;
};
export type Post = Selectable<PostTable>;
export type NewPost = Insertable<PostTable>;
export type PostUpdate = Updateable<PostTable>;
