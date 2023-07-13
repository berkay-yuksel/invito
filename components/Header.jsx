"use client";

import Form from "./Form";

import { useSession } from "next-auth/react"
function Header({rows}) {
  const {data:session,status } = useSession()



if(status==="authenticated"){
  
  
  return(
    <div>helloo <b>{session.user.name}  </b>you've succesffuly logged in and seeing protected content! 
     <br/>
     <br/>
     
     <Form rows={rows} username={session.user.name} />
  <p></p>
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