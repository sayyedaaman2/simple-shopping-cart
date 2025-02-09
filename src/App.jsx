import ProductList from "./components/ProductList"
import Cart from "./components/Cart"

function App() {

  return (
    <div className="h-screen  grid grid-cols-[minmax(1rem,3rem)_1fr_minmax(1rem,3rem)]">
      <main className="col-start-2 col-end-3 w-full grid   lg:grid-cols-[1fr_minmax(20rem,25rem)] gap-2 items-start">
        <h1 className="text-4xl my-12 col-start-1 col-end-3 ">E-Commerce</h1>
        <ProductList  className={'col-start-1 col-end-3 lg:col-start-1 lg:col-end-2'}/>
        <Cart className={'col-start-1 col-end-3 lg:col-start-2 lg:col-end-3'}/>
      </main>
    </div>
  )
}

export default App
