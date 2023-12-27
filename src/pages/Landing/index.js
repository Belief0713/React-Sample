import {Link} from 'react-router-dom';

import logo from '../../logo.svg';
import '../../App.css';

function Landing() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/test1">To Test1</Link>
        <Link to="/test2">To Test2</Link>
        <Link to="/test3">To Test3</Link>
        <Link to="/test3demo">To Test3demo</Link>
        <Link to="/test4">To Test4</Link>
      </header>
    </div>
  );
}

export default Landing;
