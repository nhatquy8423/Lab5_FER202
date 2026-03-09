import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";

const AdminLayout = () => (
  <Container fluid className="p-0">
    <Row className="g-0">
      <Col md={3} lg={2} className="bg-light vh-100 border-end p-3">
        <h4 className="mb-4">Admin</h4>
        <Nav className="flex-column">
          <Nav.Link
            as={NavLink}
            to="/admin"
            end
            className={({ isActive }) =>
              `mb-2 p-2 rounded ${isActive ? "bg-primary text-white" : "text-dark"}`
            }
          >
            Dashboard
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/admin/users"
            className={({ isActive }) =>
              `mb-2 p-2 rounded ${isActive ? "bg-primary text-white" : "text-dark"}`
            }
          >
            Manage Users
          </Nav.Link>
          <hr />
          <Nav.Link as={Link} to="/" className="text-dark">
            Back to Site
          </Nav.Link>
        </Nav>
      </Col>

      <Col md={9} lg={10} className="p-4">
        <Outlet />
      </Col>
    </Row>
  </Container>
);

export default AdminLayout;
