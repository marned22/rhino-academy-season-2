import { Outlet } from "react-router-dom"
import { Navigation } from "../../core/components/Navigation/Navigation"

export const RootLayout: React.FC = () => {
    return (
        <div>
            <header>
                <nav>
                    <Navigation />
                </nav>
            </header>
            
            <main>
                <Outlet />
            </main>
        </div>
    )
}