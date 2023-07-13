"use client";
import { useSession } from "next-auth/react"
function Header() {
  const {data:session,status } = useSession()

if(status==="authenticated"){
  return(
    <div>helloo <b>{session.user.name}  </b>you've succesffuly logged in and seeing protected content! </div>
  );
}

  return (
    <div><h1>Login to get started</h1>
    
    </div>
  )
}

export default Header