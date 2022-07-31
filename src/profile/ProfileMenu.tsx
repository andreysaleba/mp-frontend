import { useAuth0 } from "@auth0/auth0-react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logout from "../auth/Logout";
import "./ProfileMenu.scss";

function ProfileMenu() {
  const { user, isAuthenticated, isLoading } = useAuth0<{ email: string, name: string, picture: string }>();

  if (isLoading) {
    return (
      <div/>
    );
  }

  if (isAuthenticated && user) {
    return (
      <Navbar.Collapse id="profile-menu-navbar">
        <img className="profile-avatar" src={user.picture} alt={user.name}/>
        <Nav>
          <NavDropdown title={user.name}>
            <NavDropdown.Item href="#">My listings</NavDropdown.Item>
            <NavDropdown.Item href="#"><Logout/></NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    );
  }

  return <div/>;
}

export default ProfileMenu;