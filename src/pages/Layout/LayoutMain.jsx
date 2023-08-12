import NavbarMain from '../../components/Navbar/NavbarMain'
import Footer from '../../components/Footer/Footer'
import './layoutMain.css'
import 'react-multi-carousel/lib/styles.css'
import { Outlet } from 'react-router-dom'




const LayoutMain = () => {
    return (
        <div>
            <header>
                <NavbarMain />           
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer />
            </footer>

        </div>
    )
}

export default LayoutMain