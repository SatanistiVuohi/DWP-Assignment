import logo from './assets/logo.png';

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

export default Header;