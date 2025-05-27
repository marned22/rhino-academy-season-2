import { Link, Outlet } from "react-router-dom"
import styles from "../style/RootLayout.module.scss" // import the SCSS module
import { useContext } from "react"
import { ThemeContext } from "./Context"

const RootLayout: React.FC = () => {
    const { setBgColor } = useContext(ThemeContext)

    function randomColor(){
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6,"0")
        setBgColor(color)
    }
    return(
        <div>
            <header>
            <nav className={styles.nav}>
                <Link
                    to='/'
                >
                    Home
                </Link>
                <Link
                    to='/login'
                >
                    Login
                </Link>
                <Link
                    to='/browserinfo'
                >
                    Browser Info
                </Link>
                <button
                    className={styles.randomColorBtn}
                    onClick={randomColor}
                >
                    Random Color!
                </button>
            </nav>
        </header>

        <main>
            <Outlet />
        </main>
        </div>
        
    )
}

export default RootLayout