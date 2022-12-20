import Product from "./components/Product";
import useProducts from "./components/hooks/products";
import Loader from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import Modal from "./components/Modal";
import CreateProduct from "./components/CreateProduct";

function App() {
  const { products, loading, error } = useProducts();
  return (
    <>
      <div className="conteiner mx-auto max-w-2xl pt-5"></div>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      <Modal title="create new product">
        <CreateProduct></CreateProduct>
      </Modal>
    </>
  );
}
export default App;
