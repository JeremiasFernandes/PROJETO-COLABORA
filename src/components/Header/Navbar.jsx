import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'
import Logo from '../../assets/images/colabora_logo_nav.png'
import { useContext } from 'react';
import LoginContext from '../../context/LoginContext';
import Modal_CadastroContext from '../ModalCadastro/ModalCadastroContext';
import ModalLoginContext from '../ModalLogin/ModalLogin_Context';

export default function Navbar() {
    const context = useContext(LoginContext);
    let location = useLocation();
    const modal_cadastro_context = useContext(Modal_CadastroContext)
    const modal_login_context = useContext(ModalLoginContext)

    return (
        <>
            <nav className='navbar-container'>
                {context.isLogged === '1'
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
                                <button onClick={()=>{
                                modal_login_context.setIsOpen(true);
                                }} className='primary-button'  to='Login'>
                                    Login
                                </button> 
                                <button onClick={()=>{
                                modal_cadastro_context.setIsOpen(true);
                                }} className='secondary-button'>
                                    Cadastro
                                </button> 
                            </div>         
                            : ''
                        }
                                   
                    </>
                }

            </nav>
        </>
    );
}