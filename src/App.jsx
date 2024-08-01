import data from './data.json';
import data2 from './data2.json';
import ProductList from './components/ProductList/ProductsList';
import ProductList2 from './components/ProductList2/ProductsList2';

const App = () => {
  return (
    <>
      <ProductList products={data} />
      <ProductList2 products={data2} />
    </>
  );
};

export default App;
