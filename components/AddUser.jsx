'use client'

import { addUserToDatabase  } from "../actions/serverActions";
import { useTransition ,useState, useEffect } from "react"


 const AddUser = ({users,twitterprofile}) => {

  
  const [isPending,startTransition]= useTransition();
  
  const [user, setUser] = useState({
    account:"",
    firstinvite:"",
    secondinvite:"",
    address:"",

  });

  
 


const [validFirstInvite,setValidFirstInvite]= useState(false)
const [validSecondInvite,setValidSecondInvite]= useState(false)
const [validAddress,setValidAddress]= useState(false)

const handleValid=(e)=>{
if(users){

  switch(e.target.name) {

    case "firstinvite":
      
        setValidFirstInvite(!users.some(person => person.firstinvite === e.target.value || person.secondinvite === e.target.value || person.account === e.target.value));
     
    
      break;
      case "secondinvite":
      
        setValidSecondInvite(!users.some(person => person.firstinvite === e.target.value || person.secondinvite === e.target.value || person.account === e.target.value));
        
        break;
        case "address":
          setValidAddress(!users.some(person => person.address === e.target.value))
        break;
    default:
    
  }
}
}



const handleChange=(e)=>{
 
  setUser({...user, [e.target.name]: e.target.value}
    )
    handleValid(e,e.target.name)
}

const handleSubmit=()=>{
    if( validFirstInvite && validSecondInvite && validAddress && user.firstinvite!=user.secondinvite ){
      setUser({...user, account: "@twitterprofile"});
    startTransition(()=>addUserToDatabase(user)); 
 
 }else{
  alert("nah dud! something wrong! probably u just invited the same person")
 }

}


  return (
    <div>

  {
  users.some(person => person.account === twitterprofile)
  ? `congrats${user.firstinvite}! , \n you've successfully invited ${user.secondinvite}! and ${user.account}! and get you spot with the ${user.address}!` : 
  
    <form>

<br/>
<br/>
      <label>username:</label><br/>
<input
        type="text"
        placeholder="@yourowntwitter"
        value="@twitterprofile"
        name="account"
         
    />
    { " ✓ your account has permission to invite others" }
  
    <br/>  <br/>
    <label>first-invite:</label><br/>
  <input
  pattern="^@(?=.*\w)[\w]{1,15}$"
  title="The input should start with @ and must be a valid twitter account"
        type="text"
        placeholder="@twitter"
        value={user.firstinvite}
        name="firstinvite"
        onChange={handleChange}
        
    />
           {validFirstInvite===true? " ✓ ":"✖ this account already invited"  }
    <br/>
    <br/>
    <label>second-invite:</label><br/>
    <input
        type="text"
        placeholder="@twitter"
        value={user.secondinvite}
        name="secondinvite"
        onChange={handleChange}
        pattern="^@(?=.*\w)[\w]{1,15}$"
        title="The input should start with @ and must be a valid twitter account"
    />
           {validSecondInvite===true? " ✓ ":"✖ this account already invited"  }
    <br/>
    <br/>
    <label>wallet-address:</label><br/>
    <input
        type="text"
        placeholder="Wallet Address"
        value={user.address}
        name="address"
        onChange={handleChange}
        pattern="[1-9A-HJ-NP-Za-km-z]{32,44}"
        title="Please enter a valed SOLANA wallet address"
    />
           {validAddress===true? " ✓ ":"✖ this walllet already sumbitted"  }
    <br/>
    <br/>

<button
    onClick={()=>handleSubmit()}
    >{isPending ? "Adding": "SubmitUser"}</button>
      <br/>
    <br/>
  <hr/>
  {users.map((item) => (
        <li key={item.id}>{item.id}-{item.account}-{item.firstinvite}-2-{item.secondinvite}-3-{item.address} </li> 
      ))}


    </form>
    }

    </div>
  
    
  )
  
}

export default AddUser