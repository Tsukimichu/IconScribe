import Button from './components/button.jsx';
import CardOne from './components/Card-one.jsx';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="landing-container">
      <CardOne />
      <Link to="/dashboard">
        <Button label="Get Started" />
      </Link>
    </div>
  );
}

export default App;
