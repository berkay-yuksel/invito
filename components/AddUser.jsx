'use client'

import { addUserToDatabase, getAllUsers } from "../actions/serverActions";
import { useTransition ,useState, useEffect } from "react"


const AddUser = ({users}) => {

  
  const [isPending,startTransition]= useTransition();
  
  const [user, setUser] = useState({
    account:"",
    firstinvite:"",
    secondinvite:"",
    address:"",
  });


const [valid,setValid]= useState()
const [done,setDone]= useState(false)

useEffect(() => {
  
  if(users[0].account==user.account){
    setValid(false)
   }else{
    setValid(true)
   }

}, [user])



const handleChange=(e)=>{
  setUser({...user, [e.target.name]: e.target.value}
    )
}

const handleSubmit=()=>{
    if(valid===true){
  startTransition(()=>addUserToDatabase(user));
  setDone(true)
 }else{
  alert("nah dud! dis already invited")
 }

}


  return (
    <div>

  {done ? `congrats${user.firstinvite}! \n you've successfully invted ${user.secondinvite}! and ${user.account}! and get you spot with the ${user.address}!` : 
  
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