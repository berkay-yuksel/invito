import  { useState ,useEffect } from 'react';
import { db } from '@vercel/postgres';
async function Form({username}) {
    const { rows } = await db`SELECT * from Users where account=${username}`;

    const [user, setUser] = useState({
        account:"",
        firstinvite:"",
        secondinvite:"",
        address:"",
        eligible: false
      });

      useEffect(() => {
     if(rows[0]==username) {
        setUser({ ...user, account:  username, eligible: true  })
     }
      }, [username]);
 

  return (
    <div>dis {user ? user.account : username } is {user ? (user.eligible ? "eligible": "not eligible"): username } </div>
  )
}

export default Form

