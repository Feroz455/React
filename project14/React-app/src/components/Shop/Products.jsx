import { useDispatch, useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    quantity: 1,
    title: 'My First Book',
    description: 'The First book i ever wrote',
  },
  {
    id: 'p2',
    price: 8,
    quantity: 1,
    title: 'My 2nd Book',
    description: 'The 2nd book i ever wrote',
  },
  {
    id: 'p3',
    price: 6,
    quantity: 1,
    title: 'My 3rd Book',
    description: 'The 3rd book i ever wrote',
  },
];
const Products = (props) => {
  const dispatch = useDispatch();
  // const temp = useSelector((state) => f);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
