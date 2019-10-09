import React, {Component} from 'react';
import { Link } from "react-scroll";

class Navbar extends Component {
    render() {
        return (
            <nav className="nav" id="navbar">
                <div className="nav-content">
                    <ul className="nav-items">
                           <Link 
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                           ><li className="nav-item">Start</li></Link> 
                            <Link
                            activeClass="active"
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            ><li className="nav-item">O co chodzi?</li></Link>
                            <Link
                             activeClass="active"
                             to="section3"
                             spy={true}
                             smooth={true}
                             offset={-70}
                             duration= {500}
                            ><li className="nav-item">O nas</li></Link>
                            <Link
                             activeClass="active"
                             to="section4"
                             spy={true}
                             smooth={true}
                             offset={-70}
                             duration= {500}
                            ><li className="nav-item">Fundacja i organizacje</li></Link>
                            <Link
                             activeClass="active"
                             to="section5"
                             spy={true}
                             smooth={true}
                             offset={-70}
                             duration= {500}
                            ><li className="nav-item">Kontakt</li></Link>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;