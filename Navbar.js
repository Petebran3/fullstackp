import {Link, useMatch, useResolvedPath} from "react-router-dom"
import "./navbar.css"
export default function Navbar(){

  
    return <nav className="nav">
        <Link to="/" className="site-title">Main
        </Link>
        <ul>
            
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/main">Restaurant</CustomLink>
                </ul>
    </nav>
}
 function CustomLink({to, children,...props}) {
   const resolvePath = useResolvedPath(to)
   const isActive = useMatch({path: resolvePath.pathname, end: true})
     return (
        <li className={isActive ? "active" : ""}>
        <Link to={to}{...props}>{children}
        </Link>
        </li>
     )
 }