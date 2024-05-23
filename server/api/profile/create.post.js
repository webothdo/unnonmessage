import { v4 as uuidv4 } from "uuid";

import { profile } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.username) {
    return createError({ statusCode: 400, statusMessage: "Missing username" });
  }

  try {
    await db.insert(profile).values({
      id: uuidv4(),
      username: body.username,
      userId: body.id,
    });
    return "created";
  } catch (error) {
    return createError({ statusCode: 500, statusMessage: error });
  }
});
