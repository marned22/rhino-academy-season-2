import { Outlet } from "react-router-dom"
import { Navigation } from "../../core/components/Navigation/Navigation"

export const RootLayout: React.FC = () => {
    return (
        <div className="app">
            <header>
                <nav>
                    <Navigation />
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>Sociel Feed App</p>
            </footer>
        </div>
    )
}