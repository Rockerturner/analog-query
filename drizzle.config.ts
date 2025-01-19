import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './analog-query/src/server/drizzle/migrations',
  schema: './analog-query/src/server/drizzle/schema/notes.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

