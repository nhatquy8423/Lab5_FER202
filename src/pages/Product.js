import React from "react";
import { products } from "../data/products";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = () => (
  <div>
    <h2>Products</h2>
    <Row>
      {products.map((p) => (
        <Col key={p.id} sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{p.name}</Card.Title>
              <Card.Text>Price: ${p.price}</Card.Text>
              <Button as={Link} to={`/product/${p.id}`} variant="primary">
                View Detail
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default Product;
