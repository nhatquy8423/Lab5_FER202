import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
const UserLayout = () => (
  <>
    <Header />
    <Container className="my-4" style={{ minHeight: "70vh" }}>
      <Outlet />
    </Container>
    <Footer />
  </>
);
export default UserLayout;
