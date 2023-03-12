import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav id='navbar'>
        <Link to="/">Home</Link> |{" "}
        <Link to="todo">Todo list</Link> |{" "}
        <Link to="tiktok">Tiktok</Link>
      </nav>
    </header>
  );
}
