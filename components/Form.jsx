import { sql } from "@vercel/postgres";

import  { useState ,useEffect } from 'react';

async function Form({username}) {
    const { rows } = await sql`SELECT * from Users where =${username}`;
    const [user, setUser] = useState({
        account:"",
        firstinvite:"",
        secondinvite:"",
        address:"",
        eligible: false
      });

     if(rows[0].account===username){
        useEffect(() => {
            setUser({ ...user, account:  `@${username}`, eligible: true })
          }, []);
     }
 

  return (
    <div>
    <h1>
    dis {user.account}  is {user.eligible ? "eligible" : "not eligible"}</h1>
    </div>
  )
}

export default Form