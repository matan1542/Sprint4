import { HashRouter as Router, Route } from "react-router-dom";

import "./style/style.scss";

import { routes } from "./routes.js";
import { Header } from "./cmps/Header.jsx";
// import { Footer } from "./cmps/Footer.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

export function App() {
  return (
    <div className="App flex column">
      <Provider store={store}>
        <Router>
          <Header />

          <main>
            {routes.map((route) => (
              <Route
                key={route.path}
                exact
                component={route.component}
                path={route.path}
              />
            ))}
          </main>

          {/* <Footer /> */}
        </Router>
      </Provider>
    </div>
  );
}
