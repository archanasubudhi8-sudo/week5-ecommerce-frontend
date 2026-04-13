import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Shopping Cart</h2>

      {cartItems.map((item) => (
        <div className="card" key={item.id}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <p>Qty: {item.quantity}</p>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>
    </div>
  );
}

export default CartPage;