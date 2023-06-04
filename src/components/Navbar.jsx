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
                        <Link className={styles.navLinks}  to={"/length"}>Length</Link>
                        <Link className={styles.navLinks}  to={"/mass"}>Mass</Link>
                        <Link className={styles.navLinks}  to={"/time"}>Time</Link>
                        <Link className={styles.navLinks}  to={"/currency"}>Currency</Link>
                        <Link className={styles.navLinks}  to={"/data"}>Data</Link> 
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;