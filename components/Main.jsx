"use client";

import AddUser from "./AddUser";
import { useSession } from "next-auth/react";
function Main({ users}) {
  const [session, loading] = useSession();

  if (session) {
    const { user: { name, username } } = session;
    return (
      <div>
        helloo <b>{username} </b>you've succesffuly logged in and
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
