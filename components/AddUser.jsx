'use client'

import { addUserToDatabase, getAllUsers } from "../actions/serverActions";
import { useTransition ,useState, useEffect } from "react"


const AddUser = ({rows,users}) => {

  
  const [isPending,startTransition]= useTransition();
  
  const [user, setUser] = useState({
    account:"",
    firstinvite:"",
    secondinvite:"",
    address:""
  });


const [valid,setValid]= useState()


useEffect(() => {
  
  if(rows[0].account==user.account){
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
  startTransition(()=>getAllUsers())
 }else{
  alert("nah dud! dis already invited")
 }

}



  return (
    <div>
<input
        type="text"
        placeholder="Add user name"
        value={user.account}
        name="account"
        onChange={handleChange}
    />
    {valid===true? " ✓ ":"✖"  }
  
    <br/>  <br/>
  <input
        type="text"
        placeholder="Add price"
        value={user.firstinvite}
        name="firstinvite"
        onChange={handleChange}
    />
           {valid===true? " ✓ ":"✖"  }
    <br/>
    <br/>

    <input
        type="text"
        placeholder="Add price"
        value={user.secondinvite}
        name="secondinvite"
        onChange={handleChange}
    />
           {valid===true? " ✓ ":"✖"  }
    <br/>
    <br/>

    <input
        type="text"
        placeholder="Add price"
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
  
    
  )
  
}

export default AddUser