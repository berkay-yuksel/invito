"use client";
import {signIn,signOut,useSession} from 'next-auth/react'
import Image from 'next/image'

function PorfileIcon() {
const {data:session}=useSession();
if (session) {
  console.log(session.user)
  return (
    <>
        <br />    <br />
    <br />
    <Image
      src={session.user.image.replace("_normal.jpg",".jpg")}
      layout="fill"
      alt="Picture of the user"
    /> <b>{session.user.name}  </b> <br />    <br />    <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  )
}
return (
  <>
  <br />
  <br />
  <br />
    Not signed in <br />
    <button onClick={() => signIn()}>Sign in</button>
  </>
)

  return (
    <div>
<button onClick={()=>signIn("github")}>Sıgn In</button>
<button onClick={()=>signIn("twitter")}>Sıgn In twitter</button>
    </div>
  )
}

export default PorfileIcon