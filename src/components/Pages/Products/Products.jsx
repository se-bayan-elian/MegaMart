import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../rtk/slices/productsSlice";
import { useParams } from "react-router-dom";
import Product from "./product";
import "../../../css/Products.css";
import { Col } from "react-bootstrap";
import { MdErrorOutline } from "react-icons/md";
import Tabs from "./Tabs";
const Products = (props) => {
  let products = useSelector((state) => state.products);
  const [list, setList] = useState([1,2,3,4,5]);
  const [isLoaded, setIsLoaded] = useState(false);
  let params = useParams();

  useEffect(() => {
    if(products.length !== 0){
      setList(products.filter((el) => el.category === params.Category));
      setTimeout(() => setIsLoaded(true),500);
    }
  }, [products,params]);
  
  useEffect(()=>{
    setIsLoaded(false)
  },[params])
  return (
    <>
      <section className="products-sec ">
        <div className="container w-70">
          <Tabs></Tabs>
          <div className="row ">
            { list.length === 0 &&
             <div className="msg">
              <MdErrorOutline className="error-icon"></MdErrorOutline>
               <h1>The Stock is finished , coming soon ^...^ </h1>
             </div> 
            }
            {list.map((el) => (
              <Col lg={4} md={6} xs={12} xxl ={3}className="product-container ">
                <Product loading={isLoaded} product={el} key={el.id}></Product>
              </Col>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
