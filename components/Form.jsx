import {useState,useEffect} from 'react'

function Form({rows,username}) {
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
  return (
    <div>{user.account} is {user.eligible ? "eligible": "not eligible"}</div>
  )
}

export default Form