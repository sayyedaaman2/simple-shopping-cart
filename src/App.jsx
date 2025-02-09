import ProductList from "./components/ProductList"
import Cart from "./components/Cart"

function App() {
  return (
      <main className=" grid lg:grid-cols-[1fr_minmax(20rem,25rem)] gap-2 items-start relative">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl my-8 lg:my-12 col-start-1 col-end-3 ">E-Commerce</h1>
        <ProductList className={'col-start-1 col-end-3  lg:col-start-1 lg:col-end-2'} />
        <Cart className={'col-start-1 col-end-3  lg:col-start-2 lg:col-end-3 lg:sticky lg:top-0'}/>
      </main>
  )
}

export default App
