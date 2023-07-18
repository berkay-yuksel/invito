'use client'

import { addUserToDatabase } from "../actions/serverActions";
import { useTransition ,useState, useEffect } from "react"


const AddUser = ({users,twitterprofile}) => {

  
  const [isPending,startTransition]= useTransition();
  
  const [user, setUser] = useState({
    account:"",
    firstinvite:"",
    secondinvite:"",
    address:"",

  });


const [valid,setValid]= useState(true)


/*
useEffect(() => {
  
  if(user){
    setValid(false)
   }else{
    setValid(true)
   }

}, [user])
*/



const handleChange=(e)=>{
  setUser({...user, [e.target.name]: e.target.value}
    )
}

const handleSubmit=()=>{
    if(valid===true){
      
  startTransition(()=>addUserToDatabase(user));
 
 }else{
  alert("nah dud! dis already invited")
 }

}


  return (
    <div>

  {
  users.some(person => person.account === twitterprofile)
  ? `congrats${user.firstinvite}! , \n you've successfully invited ${user.secondinvite}! and ${user.account}! and get you spot with the ${user.address}!` : 
  
    <div>
<input
        type="text"
        placeholder="@yourowntwitter"
        value={user.account}
        name="account"
        onChange={handleChange}
    />
    {valid===true? " ✓ ":"✖"  }
  
    <br/>  <br/>
  <input
        type="text"
        placeholder="@twitter"
        value={user.firstinvite}
        name="firstinvite"
        onChange={handleChange}
    />
           {valid===true? " ✓ ":"✖"  }
    <br/>
    <br/>

    <input
        type="text"
        placeholder="@twitter"
        value={user.secondinvite}
        name="secondinvite"
        onChange={handleChange}
    />
           {valid===true? " ✓ ":"✖"  }
    <br/>
    <br/>

    <input
        type="text"
        placeholder="Wallet Address"
        value={user.address}
        name="address"
        onChange={handleChange}
    />
           {valid===true? " ✓ ":"✖"  }
    <br/>
    <br/>

<button
    onClick={()=>handleSubmit()}
    >{isPending ? "Adding": "SubmitUser"}</button>
  <hr/>



    </div>
    }

    </div>
  
    
  )
  
}

export default AddUser