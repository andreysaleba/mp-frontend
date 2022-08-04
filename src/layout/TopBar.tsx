import ProfileMenu from "../profile/ProfileMenu";
import { Col, Navbar } from "react-bootstrap";
import Login from "../auth/Login";

function TopBar() {
  return (
    <Navbar variant="dark" bg="dark">
      <Col xs={9} sm={9} md={9} lg={9} xl={9} xxl={9}/>
      <Col>
        <ProfileMenu/>
        <Login/>
      </Col>
    </Navbar>
  );
}

export default TopBar;