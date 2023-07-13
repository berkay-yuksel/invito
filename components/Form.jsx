import  { useState ,useEffect } from 'react';
import { db } from '@vercel/postgres';
async function Form({username}) {
    const { rows } = await db`SELECT * from Users WHERE account=${username}`;

    console.log(rows ? rows : "there is no rows");
    console.log(username ? username : "there is no username");

  return (
  //  <div>dis {user ? user.account : username } is {user ? (user.eligible ? "eligible": "not eligible"): username } </div>

  <div>
  {rows.map((row) => (
    <div key={row.id}>
      {row.id} - {row.account}
    </div>
  ))}
</div>


  )
}

export default Form

/*


    const [user, setUser] = useState({
        account:"",
        firstinvite:"",
        secondinvite:"",
        address:"",
        eligible: false
      });

      if(rows[0].account==username) {
      useEffect(() => {
        setUser({ ...user, account:  username, eligible: true  })
   
      }, [username]);
    }




*/