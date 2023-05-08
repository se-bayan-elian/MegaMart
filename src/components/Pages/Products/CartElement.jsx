import { useEffect, useReducer, useRef } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  calculateElementPrice,
  editTotal,
  elementPrice,
  removeFromCart,
} from "../../../rtk/slices/CartSlice";

const CartElement = (props) => {
  const dispatch = useDispatch();
  const deleteCart = (id) => {
    dispatch(removeFromCart({id}));
  };
  return (
    <div className="cart-element">
      <div className="cart-header">
        <div className="info">
          <img src={props.el.images[0]} alt="" />
          <h1>{props.el.title}</h1>
        </div>
        <button
          onClick={() => {
            deleteCart(props.el.id);
          }}
        >
          <RiDeleteBinLine></RiDeleteBinLine>
        </button>
      </div>
      <div className="cart-body">
        <h6>Quantity</h6>
        <div className="d-flex justify-content-between algin-items-center">
          <div className="quantity">
            <button
              className="decrement"
              onClick={() => {
                dispatch(editTotal(-props.el.price));
                dispatch(
                  calculateElementPrice({
                    id: props.el.id,
                    quantity: props.quantity - 1,
                  })
                );
                if (props.quantity === 1) {
                  deleteCart(props.el.id);
                }
              }}
            >
              <span>-</span>
            </button>
            <span className="number">{props.quantity}</span>
            <button
              className="increment"
              onClick={() => {
                dispatch(editTotal(props.el.price));
                dispatch(
                  calculateElementPrice({
                    id: props.el.id,
                    quantity: props.quantity + 1,
                  })
                );
              }}
            >
              <span>+</span>
            </button>
          </div>
          <span>{props.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CartElement;
