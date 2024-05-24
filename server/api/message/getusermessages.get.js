import { eq } from "drizzle-orm";

import { message, profile } from "~/server/database/schema";

import { db } from "../../utils/drizzle";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  if (!query.id) {
    return createError({ statusCode: 400, Message: "Missing id" });
  }

  try {
    const data = await db.query.message.findMany({
      where: eq(message.profileId, query.id),
    });
    return data;
  } catch (error) {
    return error;
  }
});
