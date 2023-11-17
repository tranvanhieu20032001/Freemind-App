import React, { useEffect, useState } from "react";
import "./darkmode.css";
import {ReactComponent as Moon} from "./Moon.svg"
import {ReactComponent as Sun} from "./Sun.svg"

const DarkMode = () => {
    const [darkmode, setDarkMode] = useState(() => localStorage.mode === "dark");
  const toggleDarkMode = (e) => {
    setDarkMode(!darkmode);
  };
  useEffect(() => {
    const html = window.document.documentElement;
    const off = darkmode ? "light" : "dark";
    const on = darkmode ? "dark" : "light";
    if(darkmode){
      document.getElementById("darkmode-toggle").checked = true
    }else{
      document.getElementById("darkmode-toggle").checked = false
    }
    html.classList.remove(off);
    html.classList.add(on);
    localStorage.setItem("mode", on);
  }, [darkmode]);
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleDarkMode}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;