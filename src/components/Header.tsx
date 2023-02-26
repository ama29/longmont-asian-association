import Navbar from './Navbar';
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="nav-area">
                <h1>
                    <Link to="/" className="logo">
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                    Asian Pacific Association of Longmont
                </h1>
            </div>
            <Navbar />
        </header>
    );
};

export default Header;