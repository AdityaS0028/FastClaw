import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  waitlist: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()), // Optional for B2B
    status: v.string(), // e.g. "pending", "invited"
    joinedAt: v.number(),
  }),
});
