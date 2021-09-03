import './App.css';
import Header from './components/Header';
import StudentWindow from './components/StudentWindow';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import TeacherWindow from './components/TeacherWindow';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <Header />
            <Menu />
            <br />
            <div className="row">
              <Route path="/" component={Home} exact />
              <Route path="/students" component={StudentWindow} exact />
              <Route path="/teachers" component={TeacherWindow} exact />
            </div>
            <br />
          </div>
          <div className="col-1"></div>
        </div>
      </Router>
    </div>
  );
}

export default App;
