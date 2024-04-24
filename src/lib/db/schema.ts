import {boolean, index, integer, pgTable, primaryKey, serial, text, timestamp, varchar} from 'drizzle-orm/pg-core';
import {AdapterAccount} from "@auth/core/adapters";
import {randomUUID} from "crypto";

export const users = pgTable('user',{
  id: text("id").primaryKey().$defaultFn(() => randomUUID()),
  email: text('email').notNull(),
  name: text('name').notNull(),
  password: text('password'),
  image: text('image'),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
  role: varchar('role', {length: 8}),
  emailVerified: timestamp("emailVerified", { mode: "date" })
})

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    userIdIdx: index().on(account.userId),
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
)

export const scores = pgTable('scores',{
  id: serial('id').primaryKey(),
  user_id: varchar('user_id', {length: 256}).notNull(),
  score: integer('score').notNull(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow()
})

export const currencies = pgTable('currencies',{
  id: serial('id').primaryKey(),
  name: varchar('name', {length: 3}).notNull(),
  symbol: varchar('symbol', {length: 1}).notNull()
})

export const courses = pgTable('courses',{
  id: serial('id').primaryKey(),
  title: text('name').notNull(),
  tags: text('tags'),
  description: text('description'),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
  price: integer('price').notNull(),
  currency: integer('currency').references(()=>currencies.id).notNull(),
})

export const courses_users = pgTable('courses_users',{
  id: serial('id').primaryKey(),
  course_id: integer('course_id').references(()=>courses.id).notNull(),
  user_id: varchar('user_id', {length: 256}).notNull(),
  created_at: timestamp('created_at').notNull().defaultNow()
});

export const purchases = pgTable('purchases',{
  id: serial('id').primaryKey(),
  transaction_id: varchar('transaction_id', {length: 256}).notNull(),
  user_id: varchar('user_id', {length: 256}).notNull(),
  course_id: integer('course_id').references(()=>courses.id).notNull(),
  price: integer('price').notNull(),
  score: integer('score'),
  currency: integer('currency').references(()=>currencies.id).notNull(),
  created_at: timestamp('created_at').notNull().defaultNow()
})

