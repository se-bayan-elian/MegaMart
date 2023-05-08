import { Button } from "react-bootstrap";
import { HiXMark } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import "../../../css/Cart.css";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import CartElement from "./CartElement";
import { ClipLoader, HashLoader } from "react-spinners";
export let cartRef;
const Cart = (props) => {
  let productsInCart = useSelector((state) => state.cart);
  cartRef = useRef();
  function hideCart() {
    cartRef.current.classList.add("hidden");
    cartRef.current.classList.remove("show");
  }
  const [loading, setLoading] = useState(true);
  const [empty, setEmpty] = useState(false);
  useEffect(() => {
    if (productsInCart.products.length !== 0) {
      setLoading(false);
      setEmpty(false)
    }
    setTimeout(() => {
      productsInCart.products.length == 0 && setEmpty(true);
    }, 2500);
  }, [productsInCart.products.length]);
  return (
    <aside className="cart" ref={cartRef}>
      <header className="carts-header">
        <h1>Cart summary</h1>
        <button onClick={hideCart}>
          <HiXMark></HiXMark>
        </button>
      </header>
      <section className="body">
        {empty ? (
          <div className="empty-cart">
            <div className="inner">
              <MdOutlineRemoveShoppingCart></MdOutlineRemoveShoppingCart>
              <p>No element added yet ... !</p>
            </div>
          </div>
        ) : loading ? (
          <div className="loader">
            <HashLoader
              color="#008ECC"
              loading={loading}
              size={60}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          productsInCart.products.map((el) => <CartElement el={el.product} quantity ={el.quantity} price = {el.price} />)
        )}
      </section>
      <section className="do-pay">
        <div className="container">
          <p>Shipping and taxes will be calculated at checkout.</p>
          <div className="price">
            <span>Total</span>
            <span>{productsInCart.totalPrice} $</span>
          </div>

          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              Checkout
            </Button>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Cart;
