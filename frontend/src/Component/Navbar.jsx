import { Link } from "react-router-dom";
const Navbar = ()=>{
   

    return(<>
        <div className="Navbar">
            <Link className="NavLink"to='/'><h1>LearnHub</h1></Link>
            <Link className="NavLink"to='/form'><p><b>Admin</b></p></Link>
        </div>
    </>)

}

export default Navbar;