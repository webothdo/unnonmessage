import { relations, sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const profile = sqliteTable("profile", {
  id: text("id").primaryKey(),
  username: text("username").notNull(),
  userId: text("user_id").notNull().unique(),
});

export const message = sqliteTable("message", {
  id: text("id").primaryKey(),
  text: text("text").notNull(),
  profileId: text("profile_id").references(() => profile.id, {
    onDelete: "cascade",
  }),
  createdAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const profileRelations = relations(profile, ({ many }) => ({
  messages: many(message),
}));

export const messageRelations = relations(message, ({ one }) => ({
  profile: one(profile, {
    fields: [message.profileId],
    references: [profile.id],
  }),
}));
