import { sql } from "@vercel/postgres";

export default async function POST(request, response) {
  try {
    const account = request.body.account;
    const firstinvite = request.body.firstinvite;
    const secondinvite = request.body.secondinvite;
    const address = request.body.address;
    if (!account || !firstinvite || !secondinvite || !address)
      throw new Error("something missin");
    await sql`INSERT INTO Users (account, firstinvite,secondinvite,address) VALUES (${account}, ${firstinvite},${secondinvite},${address});`;
  } catch (error) {
    return response.status(500).json({ error, message: error.message });
  }
}
