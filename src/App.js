import { Col } from 'react-bootstrap';
import { Route, Switch } from 'react-router';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home';
import About from './components/about/about';
import Projects from './components/projects/projects';

function App() {
  return (
    <div className="App">
      <Col xs="12" sm="5" md="4" lg="4" xl="2">
        <Sidebar />
      </Col>
      <Col xs="12" sm="7" md="8" lg="8" xl="10">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/projects"><Projects /></Route>
        </Switch>
      </Col>
    </div>
  );
}

export default App;
