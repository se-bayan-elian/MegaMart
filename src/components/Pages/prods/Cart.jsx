import { Button, Spinner } from "react-bootstrap";
import { HiXMark } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import "../../../css/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import CartElement from "./CartElement";
import { ClipLoader, HashLoader } from "react-spinners";
import Swal from "sweetalert2";
import { clearCart } from "../../../rtk/slices/CartSlice";
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
  const [btnloading, setBtnLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (productsInCart.products.length !== 0) {
      setLoading(false);
      setEmpty(false);
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
          productsInCart.products.map((el) => (
            <CartElement
              el={el.product}
              quantity={el.quantity}
              price={el.price}
            />
          ))
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
            {!btnloading ? (
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  if (productsInCart.totalPrice > 0) {
                    setBtnLoading(true);
                    setTimeout(() => {
                      // stop button loading
                      setBtnLoading(false);

                      // fire a modal dialog
                      const swalWithBootstrapButtons = Swal.mixin({
                        customClass: {
                          confirmButton: "btn btn-success",
                          cancelButton: "btn btn-danger",
                        },
                        buttonsStyling: true,
                      });

                      swalWithBootstrapButtons
                        .fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonText: "Yes",
                          cancelButtonText: "No",
                          reverseButtons: true,
                        })
                        .then((result) => {
                          if (result.isConfirmed) {
                            // clear cart state
                            dispatch(clearCart());
                            swalWithBootstrapButtons.fire(
                              "Payment Done",
                              "Your products will delivered soon ",
                              "success"
                            );
                          } else if (
                            /* Read more about handling dismissals below */
                            result.dismiss === Swal.DismissReason.cancel
                          ) {
                            swalWithBootstrapButtons.fire(
                              "Cancelled",
                              "The payment is Canceled",
                              "error"
                            );
                          }
                        });
                    }, 2500);
                  } else {
                    Swal.fire({
                      position: "center",
                      icon: "error",
                      title: "The Cart is Empty yet !",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }
                }}
              >
                Checkout
              </Button>
            ) : (
              <Button variant="primary" disabled size="lg">
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />{" "}
                Payment doing ...
              </Button>
            )}
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Cart;
