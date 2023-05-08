import { Rating } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../css/productDetails.css";
import { Button, Placeholder } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../rtk/slices/CartSlice";
import Cart, { cartRef } from "./Cart";

const ProductDetails = (props) => {
  const [product, setProduct] = useState({
    images: [],
  });
  const [isLoaded, setisLoaded] = useState(false);
  let params = useParams();
  const [mainImage, setMainImage] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${params.productId}`)
      .then((res) => {
      setProduct(res.data)
      setMainImage(res.data.images[0]);
      setTimeout(() => setisLoaded(true), 1000);
      }

      )
      
  }, []);

  return (
   <>
    <div className="product-details">
      <div className="container">
        <div className="inner">
          <div className="imgs">
            <div className="main-img">
              {!isLoaded ? (
                <Placeholder as="img" bg="secondary"></Placeholder>
              ) : (
                <img src={mainImage} alt="" />
              )}
              
            </div>
            <div className="another-imgs">
              {!isLoaded ? (
                <>
                  <Placeholder as="button" animation="glow">
                    <Placeholder as="img" bg="secondary"></Placeholder>
                  </Placeholder>
                  <Placeholder as="button" animation="glow">
                    <Placeholder as="img" bg="secondary"></Placeholder>
                  </Placeholder>
                  <Placeholder as="button" animation="glow">
                    <Placeholder as="img" bg="secondary"></Placeholder>
                  </Placeholder>
                </>
              ) : (
                <>
                  {product.images.map((el, index) => {
                    if (index > 0 && index < 4)
                      return (
                        <button
                          onClick={() => {
                            setMainImage(el );
                            // console.log(product.images);
                            product.images[index] = product.images[0];
                            product.images[0] = el;
                          }}
                        >
                          <img src={el} alt="" />
                        </button>
                      );
                  })}
                </>
              )}
            </div>
          </div>
          <div className="content">
            {!isLoaded ? (
              <>
                <Placeholder as="h1" animation="glow">
                  <Placeholder xs={6} bg="secondary" />
                </Placeholder>
                <Placeholder as="p" animation="glow">
                  <Placeholder xs={8} bg="secondary" />
                  <Placeholder xs={8} bg="secondary" />
                  <Placeholder xs={8} bg="secondary" />
                </Placeholder>
                <Placeholder as="p" animation="glow">
                  <Placeholder xs={3} bg="secondary" />
                </Placeholder>
                <Placeholder as="p" animation="glow">
                  <Placeholder xs={5} bg="secondary" />
                </Placeholder>
                <Placeholder as="p" animation="glow">
                  <Placeholder xs={4} bg="secondary" />
                </Placeholder>
                <Placeholder
                  as="button"
                  bg="primary"
                  className="px-5 py-2"
                ></Placeholder>
              </>
            ) : (
              <>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p className="price">
                  Price : <span>{product.price}</span> $
                </p>
                <p className="discount">
                  discount percentage :{" "}
                  <span>{product.discountPercentage}</span> %
                </p>
                <div className="rating-info">
                  <Rating
                    name="half-rating-read"
                    defaultValue={product.rating}
                    precision={0.1}
                    readOnly
                    className="rating"
                  />
                  <span>{product.rating}</span>
                </div>
                <p className="brand mb-5">
                  brand : <span>{product.brand}</span>
                </p>
                <Button
                  variant="outline-primary"
                  className="px-4"
                  onClick={() => {
                    dispatch(addToCart(product));
                  cartRef.current.classList.add("show");
                  cartRef.current.classList.remove("hidden");
                  }}
                >
                  Add to Cart
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>

   </>
  );
};

export default ProductDetails;
