import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'
import Logo from '../../assets/images/colabora_logo_nav.png'
import { useContext } from 'react';
import LoginContext from '../../context/LoginContext';

export default function Navbar() {
    const context = useContext(LoginContext);
    let location = useLocation();

    return (
        <>
            <nav className='navbar-container'>
                {context.isLogged
                    ?
                    
                    <>
                    <Link to='/colabora'>
                        <img src={Logo} alt="" />
                    </Link>
                    <div className='navbar-buttons'>
                                <Link onClick={()=>{
                                        context.Logout();
                                }} className='primary-button' to='/'>
                                    Sair
                                </Link>
                    </div> 
                    </>
                    : 
                    <>
                        <Link to=''>
                            <img src={Logo} alt="" />
                        </Link>

                        {
                            location.pathname === "/" ?
                            <div className='navbar-buttons'>
                                <Link className='primary-button' to='Login'>
                                    Login
                                </Link> 
                                <Link  className='secondary-button' to='Cadastro'>
                                    Cadastro
                                </Link> 
                            </div>         
                            : ''
                        }
                                   
                    </>
                }

            </nav>
        </>
    );
}