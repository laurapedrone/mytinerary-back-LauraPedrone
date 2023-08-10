import HeroMain from '../../components/HeroMain/HeroMain'
import NavbarMain from '../../components/Navbar/NavbarMain'
import Footer from '../../components/Footer/Footer'
import './layoutMain.css'

import 'react-multi-carousel/lib/styles.css'

const LayoutMain = ({children}) => {
    return (
        <div>
            <header>
                <NavbarMain />
                <HeroMain />
            </header>
            <main>
                {children}
            </main>
            <footer className='background-footer'>
                <Footer />
            </footer>

        </div>
    )
}

export default LayoutMain