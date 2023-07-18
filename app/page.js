import Main from '../components/Main'
import { revalidateTag } from "next/cache";


export default async function Home() {

/* http://localhost:3000/api/get-users 
https://invito-teal.vercel.app/api/get-users
*/

  const res = await fetch("https://invito-teal.vercel.app/api/get-users",{
    cache: 'no-cache',
    next: {
      tags:["users"]
    }
  
  })
  const users = await res.json();
  revalidateTag('users')
  
  
  

  return (
    <div>
     <Main users={users.users.rows} />
   
    
  
    </div>
    
  );
}