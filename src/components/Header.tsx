import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav id='navbar'>
        <Link to="/">Home</Link> |{" "}
        <Link to="todo">Todo list</Link>
      </nav>
    </header>
  );
}
