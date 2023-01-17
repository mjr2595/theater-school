import { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import TheaterLogo from "../app/assets/img/logo.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand className="ms-5" href="/">
                    <img src={TheaterLogo} alt="Act/React logo" className="float-start" />
                    <h1 className="mt-1">Act/React</h1>
                </NavbarBrand>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/classes">
                                Classes
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contact">
                                Contact
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/merch">
                                Merch
                            </NavLink>
                        </NavItem>
                        <Dropdown nav inNavbar isOpen={dropdownOpen} toggle={toggle} direction={"down"}>
                            <DropdownToggle nav caret>
                                Profile
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem>My Courses</DropdownItem>
                                <DropdownItem>My Events</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Log out</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
