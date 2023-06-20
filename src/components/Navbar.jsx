import {Link} from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import '../styles/Navbar.css'
import {useAuthContext} from '../hooks/useAuthContext'
import {GiHamburgerMenu} from 'react-icons/gi'
import {useState} from 'react'

const Navbar = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext()
    const [active, setActive] = useState(false)

    const handleButtonClick = () => {
        logout()
    }

    return (
        <header>
            <div className='navbar__container'>
                <Link to='/'>
                    <h1>Blog</h1>
                </Link>
                <GiHamburgerMenu size={25} onClick={() => setActive(!active)} className='navbar__burger'></GiHamburgerMenu>
                <div className={`navbar__panel ${active ? 'navbar__active' : ''}`}>
                    <Link to='/'>
                        <p>Blogs</p>
                    </Link>
                    <Link to='/about'>
                        <p>About</p>
                    </Link>
                    <Link to='/blogs/create'>
                        <p>Add blog</p>
                    </Link>
                    {!user ? (
                        <div className='navbar__buttons'>
                            <Link to='/login'>
                                <button className='navbar__button-login'>Login</button>
                            </Link>
                            <Link to='/signup'>
                                <button className='navbar__button-signup'>Signup</button>
                            </Link>
                        </div>
                    ) : <button className='navbar__button-login' onClick={handleButtonClick}>Log out</button>}
                </div>
            </div>
        </header>
    )
}

export default Navbar
