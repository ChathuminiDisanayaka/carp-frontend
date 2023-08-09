import {Typography} from '@mui/material'
import Product from "./component/Product";
import Header from "./component/Header";
// import {Route, Router} from "@mui/icons-material";
import {Router,Route,Switch} from "react-router-dom";
import Footer from "./component/Footer";
import ProductView from "./component/ProductView";
import ProductAdd from "./component/ProductAdd";
import Landing from "./component/Landing";

function App() {
  return (
      // <Router>
      //     <div>
      //         <Header />
      //         <Switch>
      //             <Route exact path="/" component={Product} />
      //             <Route path="/view" component={ProductView} />
      //             <Route path="/add" component={ProductAdd} />
      //         </Switch>
      //         <Footer />
      //     </div>
      // </Router>

      // <div>
      //     <Header/>
      //     <Landing/>
      //     <Footer/>
      //     <Product/>
      //     <ProductView/>
      //     <ProductAdd/>
      // </div>
      <Router>
          {/*<Header />*/}
          <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/product" component={Product} />
              <Route exact path="/product/view" component={ProductView} />
              <Route exact path="/product/add" component={ProductAdd} />
          </Switch>
          {/*<Footer />*/}
      </Router>

  );
}

export default App;
