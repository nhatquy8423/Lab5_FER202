import React from "react";
import { ListGroup } from "react-bootstrap";

const AdminUsers = () => (
  <div>
    <h2>Manage Users</h2>
    <ListGroup className="mt-3">
      <ListGroup.Item>Alice</ListGroup.Item>
      <ListGroup.Item>Bob</ListGroup.Item>
    </ListGroup>
  </div>
);

export default AdminUsers;
