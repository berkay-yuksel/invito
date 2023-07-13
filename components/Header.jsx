"use client";

import Form from "./Form";

import { useSession } from "next-auth/react"
function Header() {
  const {data:session,status } = useSession()



if(status==="authenticated"){
  
  
  return(
    <div>helloo <b>{session.user.name}  </b>you've succesffuly logged in and seeing protected content! 
    
    <Form username={username} />
    </div>
  );
}




  
  return (
  
    <div>
      youneed to sign in to see this page 
    </div>
  )
}

export default Header