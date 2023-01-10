import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-http-102d4-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json'
      );
      if (!request.ok) {
        throw new Error('Could not fetch data');
      }
      const cartData = await response.json();
      return data;
    };
    try {
      const data = await fetchData();
      dispatch(
        cartActions.replaceCart({
          item: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'Error',
          title: 'Error!',
          message: 'Fetch Unsuccessfully!',
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data',
      })
    );

    const sendRequest = async () => {
      const request = await fetch(
        'https://react-http-102d4-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!request.ok) {
        throw new Error('Sending');
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'Success',
          title: 'Success!',
          message: 'Sending cart data Successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'Error',
          title: 'Error!',
          message: 'Sending cart data Unsuccessfully!',
        })
      );
    }
    // const responseData = await request.json();
  };
};
