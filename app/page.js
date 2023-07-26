import Main from "../components/Main";

import { getUsersList } from "../actions/serverActions";

export default async function Home() {

  return (
    <div>
      <Main users={getUsersList()} />
    </div>
  );
}
