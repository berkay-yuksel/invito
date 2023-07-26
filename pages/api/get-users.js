import { db } from "@vercel/postgres";

export default async function GET(request, response) {
  const client = await db.connect();

  const users = await client.sql`SELECT * FROM Users;`;
  let usersList=users.rows;
  return response.status(200).json({ usersList });
}

