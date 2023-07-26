"use client";

import AddUser from "./AddUser";
import { useSession } from "next-auth/react";
function Main({ users}) {
  const { data: session, status ,token ,data,user } = useSession();

  if (status === "authenticated") {
   console.log(token);
   console.log(session);
   console.log(data);
   console.log(user);
   
    
   

    return (
      <div>
        helloo <b>{session.user.name} </b>you've succesffuly logged in and
        seeing protected content!
        <br />
        <AddUser
          twitterprofile={session ? session.user.name : "@notfound"}
          users={users}
        />
        <hr />
      </div>
    );
  }


  return <div>you need to sign in to see this page -,




  </div>;
}

export default Main;

/*



*/
