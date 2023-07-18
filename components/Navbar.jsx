"use client";
import {signIn,signOut,useSession} from 'next-auth/react'
import Image from 'next/image'
import Link from "next/link"

function Navbar() {
const {data:session}=useSession();
if (session) {
 
  return (
    <>
    <Link href="/">FOMOS</Link>
        <br />    <br />
    <br />
    <Image
      src={session.user.image.replace("_normal.jpg",".jpg")}
    
      alt="Picture of the user"
    /> <b>{session.user.name}  </b> <br />    <br />    <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  )
}
return (
  <>
  <Link href="/">FOMOS</Link>
  <br />
  <br />
  <br />
    Not signed in <br />
    <button onClick={() => signIn()}>Sign in</button>

  </>
)

}

export default Navbar