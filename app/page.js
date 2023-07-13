
import Header from '../components/Header'

import { sql } from "@vercel/postgres";

export default async function Checker(drop) {
  const { rows } = await sql`SELECT
	*
FROM
	users
WHERE
	account= 'briansvaultself';`;


  return (
    <div>
      <Header drop={drop} rows={rows}/>

    </div>
  );
}