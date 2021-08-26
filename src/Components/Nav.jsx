import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <h1>^ NC Marketplace</h1>
            <div>
                <Link className="nav-links" to='/'>Home</Link>
                <Link className="nav-links" to='/profile'>Profile</Link>
                <Link className="nav-links" to='/profile/:username/basket'>Basket</Link>
            </div>
        </nav>
    );
};

export default Nav;