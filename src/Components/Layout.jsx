import Header from './Header';
import Footer from './Footer';
import AppRoutes from '../routes/AppRoutes';

const Layout = () => {
    return (
        <div className='container'>
            <Header />

            <div className="main">
                <AppRoutes />
            </div>

            <Footer />
        </div>

    )
}

export default Layout
