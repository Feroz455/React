import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart-slice';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, price, description } = props;
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

// const newTotalQuantity = cart.totalQuantity + 1;
//     // cart.totalQuantity = cart.totalQuantity + 1;
//     const updateItems = cart.items.slice();
//     const existingItem = updateItems.find((item) => item.id === id);
//     if (existingItem) {
//       const updateItem = { ...existingItem };
//       updateItem.quantity++;
//       updateItem.price = updateItem.price + price;
//       const existingItemIndex = updateItems.findIndex((item) => item.id === id);
//       updateItems[existingItemIndex] = updateItem;
//     } else {
//       updateItems.push({
//         id,
//         price,
//         quantity: 1,
//         totalPrice: price,
//         name: title,
//       });
//     }
//     const newCart = {
//       totalQuantity: newTotalQuantity,
//       items: updateItems,
//     };
