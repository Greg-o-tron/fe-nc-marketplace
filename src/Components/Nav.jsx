import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/profile/:username/basket'>Basket</Link>
        </nav>
    );
};

export default Nav;