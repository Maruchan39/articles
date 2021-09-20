import React from 'react'
import {Link} from "react-router-dom";
import { FaHome } from 'react-icons/fa';

export const Navbar = () => {
    return (
       <nav>
<Link to="/" id="home-icon">
    <FaHome size={45} color={"red"} />
</Link>
       </nav>
    )
}

export default Navbar;
