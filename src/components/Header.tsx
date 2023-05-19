import Navbar from './Navbar';
import logo from '../images/APAL-logo.png'
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
    return (
        <div>
            <header className="header-container">
                <div className="title-area">
                    <div>
                        <Link to="/" className="logo">
                            <img src={logo} className="logo" alt="logo" />
                        </Link>
                    </div>
                    <div className="logo-title">
                        <h1>
                            Asian-Pacific Association
                        </h1>
                        <h4>
                            Longmont, Colorado
                        </h4>
                    </div>
                </div>
                <div className="nav-area">
                    <Navbar />
                </div>
            </header>
        </div>
    );
};

export default Header;