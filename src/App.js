import { Col } from 'react-bootstrap';
import { Switch } from 'react-router';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Col xs="3" sm="3" md="2" lg="2">
          <Sidebar />
        </Col>
      </Switch>
    </div>
  );
}

export default App;
