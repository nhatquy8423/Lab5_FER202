import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { Button } from "react-bootstrap";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <h2>Product not found!</h2>;

  return (
    <div className="p-4 border rounded shadow-sm text-start">
      <h2>{product.name}</h2>
      <p className="fw-bold">Price: ${product.price}</p>
      <p>{product.desc}</p>
      <Button as={Link} to="/product" variant="secondary">
        Back to Products
      </Button>
    </div>
  );
};

export default ProductDetail;
