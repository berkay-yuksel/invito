import Link from "next/link"
import ProfileIcon from './PorfileIcon'

function Navbar() {
  return (
    <nav>
<Link href="/">FOMOS</Link>
<ProfileIcon/>
<hr/>
    </nav>
  )
}

export default Navbar