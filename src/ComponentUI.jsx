// ComponentUI.jsx
import React from 'react';
import logo from './assets/logo.png'; // You can adjust the path if necessary.

export function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>Welcome to product page!</h1>
    </header>
  );
}
export default Header;