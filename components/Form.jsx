import {useState,useEffect} from 'react'
import {Checker} from ("../app/page")
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
        setUser({ ...user, account: username, eligible: true  })
   
      }, [username]);
    }
    
  return (

    <div><b>{user.account==="" ? username : user.account }</b> is <b>{user.eligible ? "eligible": "not eligible"}</b>
     
    </div>
 
    )
}

export default Form