import { Col } from 'react-bootstrap';
import { Route, Switch } from 'react-router';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <Col xs="5" sm="4" md="3" lg="2">
        <Sidebar />
      </Col>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/projects"><Projects /></Route>
        <Route exact path="/contact"><Contact /></Route>
      </Switch>
    </div>
  );
}

export default App;
