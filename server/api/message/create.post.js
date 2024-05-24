import { eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";

import { profile, message } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.id) {
    return createError({
      statusCode: 400,
      statusMessage: "The link is invalid",
    });
  }

  if (!body.message) {
    return createError({
      statusCode: 400,
      statusMessage: "You need to write a message",
    });
  }

  if (body.message.length > 250) {
    return createError({
      statusCode: 400,
      statusMessage: "The message can't be more than 250 characters",
    });
  }

  const profileExist = db.query.profile.findFirst({
    where: eq(profile.id, body.id),
  });

  if (!profileExist) {
    return createError({
      statusCode: 400,
      statusMessage: "The link is invalid",
    });
  }

  try {
    await db.insert(message).values({
      id: uuidv4(),
      text: body.message,
      profileId: body.id,
    });
    return "Message sent";
  } catch (error) {
    return createError({ statusCode: 500, statusMessage: error });
  }
});
