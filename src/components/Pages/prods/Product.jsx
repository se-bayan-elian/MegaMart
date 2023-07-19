import { Rating } from "@mui/material";
import { useState } from "react";
import { Button, Card, Placeholder } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../css/Product.css";
import { useNavigate } from "react-router-dom/dist";
const Product = (props) => {
  const navigate = useNavigate();
  return (
    <div className="product d-flex justify-content">
      {props.loading ? (
        <Card style={{ width: "18rem" }} className="loaded-card">
          <div className="card-img">
            <Card.Img variant="top" src={props.product.thumbnail} />
          </div>
          <Card.Body>
            <Card.Title>{props.product.title}</Card.Title>
            <Card.Text>{props.product.description}</Card.Text>
            <div className="rating-info d-flex align-items-center gap-2 mb-3">
              <Rating
                name="half-rating-read"
                defaultValue={props.product.rating}
                precision={0.1}
                readOnly
                className=""
              />
              <span>{props.product.rating}</span>
            </div>
            <Link
              onClick={(e) => {
                e.preventDefault();
                 navigate("/products/" + props.product.id)}}
               className="btn btn-primary"
            >
              More Details
            </Link>
          </Card.Body>
        </Card>
      ) : (
        <Card style={{ width: "18rem" }}>
          <Placeholder as="div" animation="wave" className="img-placeholder">
            <Placeholder xs={12} />
          </Placeholder>
          <Card.Body>
            <Placeholder as={Card.Title} animation="wave">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="wave">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="primary" xs={6} />
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Product;
