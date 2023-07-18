import { db } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const client = await db.connect();

  const users = await client.sql`SELECT * FROM Users;`;
  return response.status(200).json({ users: users.rows });
}
