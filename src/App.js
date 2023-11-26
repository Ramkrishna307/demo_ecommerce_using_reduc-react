import Header from "./Component/Header";
import { Routes, Route, Switch } from "react-router-dom";
import ProductListing from "./Component/ProductListing";
import ProdectDetail from "./Component/ProdectDetail";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProdectDetail />} />
          {/* <Route path="/product/:productId" component={ProductDetails} /> */}
          <Route path="*" element={<div>Page not Found</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
