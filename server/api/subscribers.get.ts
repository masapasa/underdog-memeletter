import { JsonDB } from "../utils/json_db";

export default defineEventHandler(async (event) => {
  try {
    const db = new JsonDB("/Users/yusuf/coding/hacker_weekend/underdog-memeletter/db.json");

    const subscribers: string[] = db.readOne("subscribers");

    return {
      statusCode: 200,
      subscribers,
    };
  } catch (error) {
    return {
      statusCode: 500,
      message: `${error}`,
    };
  }
});
