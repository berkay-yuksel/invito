"use client";
import  { useState ,useEffect } from 'react';

function Form({username}) {

    const [user, setUser] = useState({
        account:"",
        firstinvite:"",
        secondinvite:"",
        address:"",
        eligible: false
      });

      useEffect(() => {
        setUser({ ...user, account:  username  })
      }, [username]);
 

  return (
    <div>dis {user.account}</div>
  )
}

export default Form