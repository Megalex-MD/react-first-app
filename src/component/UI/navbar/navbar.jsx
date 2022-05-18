import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/context";
import MyButton from "../button/MyButton";
import classes from "./navbar.module.css"

const Navbar = () => {
  const { setIsAuth } = useContext(AuthContext)

  const logOut = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__items}>
        <Link to='about'>About</Link>
        <Link to='posts'>Posts</Link>
      </div>
      <MyButton onClick={logOut}>Log out</MyButton>
    </nav>
  )
}

export default Navbar