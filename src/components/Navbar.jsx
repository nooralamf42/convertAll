import { Link } from "react-router-dom"
import styles from "../css/Navbar.module.css"
import { useState } from "react"

const Navbar = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <nav className={styles.flex}>
            <Link className={styles.logo} to={"/"} >ConvertALL</Link>
            <div>
                <Link className={styles.navLink}  to={"/length"}>Length</Link>
                <Link className={styles.navLink}  to={"/mass"}>Mass</Link>
                <Link className={styles.navLink}  to={"/time"}>Time</Link>
                <Link className={styles.navLink}  to={"/currency"}>Currency</Link>
                <Link className={styles.navLink}  to={"/data"}>Data</Link>
            </div>
            <div className={styles.navLinkDropdown}>
                <p className={styles.navMenu} onClick={()=>{
                    isActive == false? setIsActive(true): setIsActive(false)
                }}>Menu</p>
                <div className={styles.navRelative} style={isActive==true?{"display":"block"}:{"display":"none"}}>
                    <div className={styles.navLinksBox}>
                        <Link className={styles.navLinks}  to={"/length"}  onClick={()=>{setIsActive("false")}}>Length</Link>
                        <Link className={styles.navLinks}  to={"/mass"} onClick={()=>{setIsActive("false") >Mass</Link>
                        <Link className={styles.navLinks}  to={"/time"} onClick={()=>{setIsActive("false") >Time</Link>
                        <Link className={styles.navLinks}  to={"/currency"} onClick={()=>{setIsActive("false") >Currency</Link>
                        <Link className={styles.navLinks}  to={"/data"} onClick={()=>{setIsActive("false") >Data</Link> 
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
