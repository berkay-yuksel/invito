"use client";

import AddUser from "./AddUser";
import { useSession } from "next-auth/react";
function Main({ users }) {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
  
    return (
      <div>
        helloo <b>{session.user.username} </b>you've succesffuly logged in and
        seeing protected content! 1
        <br />
        <AddUser
          twitterprofile={session ? session.user.name : "@notfound"}
          users={users}
        />
        <hr />
      </div>
    );
  }

  return <div>you need to sign in to see this page -</div>;
}

export default Main;


