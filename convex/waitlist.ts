import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const join = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()), // Optional, good for B2B
  },
  handler: async (ctx, args) => {
    // Basic de-duplication: check if email already exists
    const existing = await ctx.db
      .query("waitlist")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();

    if (existing) {
      return { success: false, message: "Email already on the waitlist." };
    }

    const id = await ctx.db.insert("waitlist", {
      name: args.name,
      email: args.email,
      phone: args.phone,
      status: "pending",
      joinedAt: Date.now(),
    });

    return { success: true, id };
  },
});
