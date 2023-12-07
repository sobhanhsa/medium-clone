import Image from "next/image";
import styles from "./navbar.module.css"
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "@/context/ThemeContext";

const Navbar = () => {


    

    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt="facebook logo" width={24} height={24}/>
                <Image src="/instagram.png" alt="instagram logo" width={24} height={24}/>
                <Image src="/tiktok.png" alt="tiktok logo" width={24} height={24}/>
                <Image src="/youtube.png" alt="youtube logo" width={24} height={24}/>
            </div>
            <div className={styles.logo}>PilleBlog</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link href={"/"}>Homepage</Link>
                <Link href={"/contact"}>Homepage</Link>
                <Link href={"/about"}>About</Link>
                <AuthLinks />
            </div>
        </div>
    );
}
 
export default Navbar;