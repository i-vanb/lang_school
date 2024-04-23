import {boolean, integer, pgTable, serial, text, timestamp, varchar} from 'drizzle-orm/pg-core';

export const users = pgTable('users',{
  id: text('cuid').primaryKey(),// varchar('id', {length: 256}).primaryKey(),
  email: text('email').notNull(),
  name: text('name').notNull(),
  password: text('password').notNull(),
  image: text('image'),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
  role: varchar('role', {length: 8}),
  is_verified: boolean('is_verified')
})

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

