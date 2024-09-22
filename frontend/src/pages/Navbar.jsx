import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <Link to={"/"}>Dashboard</Link>
            <Link to={"/employees"}>Employees</Link>
        </div>
     );
}
 
export default Navbar;