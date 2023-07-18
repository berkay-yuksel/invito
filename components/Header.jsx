"use client";


import AddUser from "./AddUser";
import { useSession } from "next-auth/react"
function Header({rows,users}) {
  const {data:session,status } = useSession()



if(status==="authenticated"){
  return(
    <div>helloo <b>{session.user.name}  </b>you've succesffuly logged in and seeing protected content! 
  
  <br/>
     <AddUser users={users} rows={rows} />
     <hr/>
          <br/>
      {rows.map((user)=>(
<div key={user.id}>
<p>{user.account}</p>
<p>{user.firstinvite}</p>
<p>{user.secondinvite}</p>
<p>{user.address}</p>
<hr/>
</div>
    ))}
    </div>
  );
}

  return (
  
    <div>
    you need to sign in to see this page

  

    </div>
  )
}

export default Header