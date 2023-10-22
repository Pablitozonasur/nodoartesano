import "./App.css";
import NavBar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import Footer from "./components/footer/footer";
import { useReducer } from "react";
import ProductItem from "./components/ProductItem";
import CartItem from "./components/CartItem";
import { reducerCart, productsInitialState } from "./reducers/shoppingCartReducer";
import TYPES from "./reducers/actionTypes.jsx";

function App() {
  const [state, dispatch] = useReducer(reducerCart, productsInitialState);

  const addToCart = (id) => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: id
    })
  }

  const deleteFromCart = (id) => {
    dispatch({
      type: TYPES.DELETE_PRODUCT_FROM_CART,
      payload: id
    })
  }

  const clearCart = () => {
    dispatch({
      type: TYPES.DELETE_ALL_FROM_CART,
    }) 
  }

  const calculateTotal = () => {
    dispatch({
      type: TYPES.CALCULATE_TOTAL_PRICE,
    })
  }

  return (
    <BrowserRouter>
      <NavBar />
      <h2 className="title_products">Productos en stock</h2>
      <div className="container_grid_products">
        {
          state.products.map((product) => {
            return <ProductItem key={product.id} data={product} addToCart={addToCart} />
          })
        }
      </div>
      <hr />
      <h2 className="title_cart">Carrito de compras</h2>
      <div className="container_buttons">
        <button className="btn btn_totalPrice" onClick={() => calculateTotal()}>Precio total</button>
        {
          state.totalPrice > 0 && <p className="totalPrice_shoppingCart">Precio total: ${state.totalPrice}</p>
        }
        <button className="btn btn_clearCart" onClick={() => clearCart()}>Vaciar carrito</button>
      </div>
      {
        state.cart.length === 0 && <p className="text_NoProductsInCart">No hay productos en el carrito</p>
      }
      <div className="container_grid_shopping_cart">
        {
          state.cart.map((productCart) => {
            return <CartItem key={productCart.id + (Math.random() * 50)} data={productCart} deleteFromCart={deleteFromCart} />
          })
        }
      </div>
      <Routes>
        <Route path="/" element={"/"} />
        <Route path="/category/:categoryId" element={"/"} />
        <Route path="products/:productId" element={"/"} />
        <Route path="/category/:category/products/:productId" element={"/"} />
        <Route path="*/products/:productId" element={"/"} />
        <Route path="/cart" element={"/"} />
        <Route path="/nosotros" element={"/"} />
        <Route path="*" element={"/"} />
      </Routes>
      <Register/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
