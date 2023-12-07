"use client"

import Image from "next/image";
import styles from "./themeToggle.module.css"
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "@/context/ThemeContext";

const ThemeToggle = () => {

    const {theme,toggle : themeToggle} = useContext(ThemeContext) as ThemeContextType


    return (<div className={styles.container} onClick={themeToggle}>
        <Image width={14} height={14} src="/moon.png" alt="moon image" />
        <div className={styles.ball} style={theme === "dark" 
        ? {left:"1px",backgroundColor:"black"}
        : {left:"unset",right:"1px",backgroundColor:"white"}}></div>
        <Image width={14} height={14} src="/sun.png" alt="sun image"   />
    </div>);
}
 
export default ThemeToggle;