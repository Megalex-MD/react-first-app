import React from "react";
import classes from "./loader.module.css"

const Loader = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.lds__spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
export default Loader