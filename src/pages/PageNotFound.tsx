import { Link } from 'react-router-dom';
import '../App.css';

function PageNotFound() {
  return (
    <div className="App-header">
      <Link to="/"/>
      <p>Page not found!</p>
    </div>
  );
}

export default PageNotFound;
