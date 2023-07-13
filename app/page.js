
import Header from '../components/Header'

import { sql } from "@vercel/postgres";

export default async function Home() {
  const { rows } = await sql`SELECT
	*
FROM
	users
WHERE
	account= 'briansvaultself';`;

  return (
    <div>
      <Header rows={rows}/>
    
    </div>
    </div>
  );
}