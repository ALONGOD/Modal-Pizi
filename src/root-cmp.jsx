import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import '../src/assets/style/main.css'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { HomePage } from './pages/HomePage'

export function App() {
    return (
        <Router>
            <section className="main-layout app">
                {/* <AppHeader /> */}
                <main>
                    <Routes>
                        <Route element={<HomePage />} path="/" />
                    </Routes>
                </main>
                {/* <AppFooter /> */}
            </section>
        </Router>
    )
}
