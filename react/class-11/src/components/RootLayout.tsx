import { Link, Outlet } from "react-router-dom"

const RootLayout: React.FC = () => {
    return(
        <div>
            <header>
            <nav>
                <Link
                    to='/'
                >
                    Home
                </Link>
                <Link
                    to='/register'
                >
                    Login
                </Link>
            </nav>
        </header>

        <main>
            <Outlet />
        </main>
        </div>
        
    )
}

export default RootLayout