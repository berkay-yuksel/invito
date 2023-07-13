import { db } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const client = await db.connect();
 
  try {
  /*
  const names = ['Fiona', 'Lucy','','',''];
    await client.sql`INSERT INTO Users (id, account,firstinvite,secondinvite,address) VALUES (${names[0]},${names[1]},${names[1]},${names[2]},${names[3]});`;

  */
  } catch (error) {
    return response.status(500).json({ error });
  }

 
  const users = await client.sql`SELECT * FROM Users;`;
  return response.status(200).json({ users: users.rows });
}