import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from "./components/Navbar";
import { ArticlePage } from './pages/ArticlePage';
import { DetailsPage } from './pages/DetailsPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="wrapper">
        <Switch>
          <Route component={HomePage} path="/home" exact />
          <Route component={DetailsPage} path="/details" exact />
          <Route component={ArticlePage} path="/article" exact />
          <Redirect to="/home" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
