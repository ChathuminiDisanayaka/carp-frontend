
import Product from "./component/Product";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ProductView from "./component/ProductView";
import ProductAdd from "./component/ProductAdd";
import Landing from "./component/Landing";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div>
              <Header />
              <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/products" component={Product} />
                  <Route path="/view" component={ProductView} />
                  <Route path="/add" component={ProductAdd} />
              </Switch>
              <Footer />
          </div>
      </BrowserRouter>

  );
}

export default App;
