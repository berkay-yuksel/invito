import Main from "../components/Main";

import { getUsersList } from "../actions/serverActions";

export default async function Home() {



let users=await getUsersList();

  return (
    <div>

<Main users={users.usersList} />
    </div>
  );
}
