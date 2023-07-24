"use client";


import AddUser from "./AddUser";
import { useSession } from "next-auth/react"
function Main({users}) {
  const {data:session,status } = useSession()



if(status==="authenticated"){
  return(
    <div>helloo <b>{session.user.name}  </b>you've succesffuly logged in and seeing protected content! 
  
  <br/>
     <AddUser twitterprofile={session?session.user.name : "@notfound"} users={users}  />
     <hr/>
          <br/>



    </div>
  );
}

  return (
  
    <div>
    you need to sign in to see this page
-



  

    </div>
  )
}

export default Main

/*

      {users.map((user)=>(
<div key={user.id}>
<p>{user.account}</p>
<p>{user.firstinvite}</p>
<p>{user.secondinvite}</p>
<p>{user.address}</p>
<hr/>
</div>
    ))}
*/