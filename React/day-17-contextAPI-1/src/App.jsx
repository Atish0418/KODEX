import { useState } from "react"
import Dashboard1 from "./components/Dashboard1/Dashboard1"
import Dashboard2 from "./components/Dashboard2/Dashboard2"
import Cart from './components/Dashboard1/Cart'


const App = () => {

  const [toggle, setToggle] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [getClickedProduct, setGetClickedProduct] = useState(null)

  return (
    <div >
      <div className="m-4">
        <button
          onClick={() => setToggle((prev) => !prev)}
          className="border rounded px-2 mb-4 cursor-pointer"
        >
          Go to {toggle ? "Home" : "Users"}
        </button>
        <button onClick={() => setShowCart(true)} className="ml-4 border rounded px-2 cursor-pointer">Show Cart</button>

        {
          toggle ? (
            <div>
              <Dashboard2  getClickedProduct = {getClickedProduct} />
            </div>
          )
            : (
              <div>
                <Dashboard1 setGetClickedProduct = {setGetClickedProduct}  setCartItems = {setCartItems} />
              </div>
            )
        }
      </div>

      {
        showCart && <div className="absolute top-0 p-6 bg-red-600 h-screen w-full text-white font-semibold">
          <Cart cartItems = {cartItems} setShowCart = {setShowCart} />
        </div>
      }

    </div>
  )
}

export default App