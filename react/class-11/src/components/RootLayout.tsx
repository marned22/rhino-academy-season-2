import { Link, Outlet } from "react-router-dom"
import styles from "../styles/RootLayout.module.scss" // import the SCSS module
import { useContext } from "react"
import { OffContext, ThemeContext } from "./Context"

const RootLayout: React.FC = () => {
    const { setBgColor } = useContext(ThemeContext)
    const { off, setOff } = useContext(OffContext)

    function randomColor(){
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6,"0")
        setBgColor(color)
    }

    function resetColor() {
        setBgColor('#fff')
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
                <button
                    className={styles.resetBtn}
                    onClick={resetColor}
                >
                    Reset
                </button>
                <button
                    className={styles.offBtn}
                    onClick={() => setOff(prev => !prev)}
                >
                    {off ? "On" : "Off"}
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