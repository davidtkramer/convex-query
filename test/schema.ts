import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

const schema = defineSchema({
  users: defineTable({
    clerkId: v.string(),
    username: v.string(),
  }).index('byClerkId', ['clerkId']),
  tags: defineTable({
    code: v.string(),
    ownerId: v.id('users'),
  }).index('byOwnerId', ['ownerId']),
  taps: defineTable({
    tagId: v.id('tags'),
    userId: v.id('users'),
  })
    .index('byUserId', ['userId'])
    .index('byUserIdAndTagId', ['userId', 'tagId']),
});

export default schema;
