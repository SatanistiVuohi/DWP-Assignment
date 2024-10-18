import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import ProductSelection from './OrderForm';

function Header() {
  return (
    <header style={headerStyle.header}>
      <img src={logo} alt="logo" style={headerStyle.image} />
      <h1>Welcome to product page!</h1>
    </header>
  );
}

const headerStyle = {
  header: {
    display: 'flex',
    alignItems: 'center'
  },
  image: {
    width: '75px',
    height: '75px'
  }
}

function Structure() {

  const navigate = useNavigate();

  const goToTrivia = () => {
    navigate('/trivia');
  };

  return (
    <div>
      <Header />
      <ProductSelection />
      <br />
      <br />
      <br />
      <button onClick={goToTrivia}>Open data!</button>
    </div>
  )
}

export default Structure;