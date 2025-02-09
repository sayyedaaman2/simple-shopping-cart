import ProductList from "./components/ProductList"
import Cart from "./components/Cart"
import { fetchProducts } from "./api";

function App() {
  return (
      <main className=" grid   lg:grid-cols-[1fr_minmax(20rem,25rem)] gap-2 items-start">
        <h1 className="text-4xl my-12 col-start-1 col-end-3 ">E-Commerce</h1>
        <ProductList className={'col-start-1 col-end-3 lg:col-start-1 lg:col-end-2'} />
        <Cart className={'col-start-1 col-end-3 lg:col-start-2 lg:col-end-3'} />
      </main>
  )
}

export default App
