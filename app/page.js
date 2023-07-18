
import Header from '../components/Header'
import AddUser from '../components/AddUser'
import { sql } from "@vercel/postgres";

export default async function Home() {

  const { rows } = await sql`SELECT
	*
FROM
	users
`;



  const res = await fetch("https://invito-teal.vercel.app/api/post-users",{
    cache: 'no-cache',
    next: {
      tags:["users"]
    }
  
  })
  
  const users = await res.json()
  return (
    <div>
     <Header users={users} rows={rows}/>
   
    
    

 


    </div>
    
  );
}