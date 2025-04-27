import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} style={{ width: '50px' }} />
            <p>{item.name} - ${item.price} x {item.quantity}</p>
            <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
            <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
            <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
          </div>
        ))
      )}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <button onClick={() => alert('Coming Soon!')}>Checkout</button>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default CartPage;
