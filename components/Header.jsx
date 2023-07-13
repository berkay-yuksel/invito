"use client";
import  { useState ,useEffect } from 'react';

import { useSession } from "next-auth/react"
function Header() {
  const {data:session,status } = useSession()

  const [user, setUser] = useState({
    account:"",
    firstinvite:"",
    secondinvite:"",
    address:"",
    eligible: false
  });

if(status==="authenticated"){
  useEffect(() => {
    setUser({ ...user, account:  "none"  })
  }, []);
  console.log(user ? user :"user can't be found")
  
  return(
    <div>helloo <b>{session.user.name}  </b>you've succesffuly logged in and seeing protected content! 
    
    
    </div>
  );
}



  return (
  
    <div>
      youneed to sign in to see this page {user.account}
    </div>
  )
}

export default Header