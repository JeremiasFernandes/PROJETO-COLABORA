import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './ModalLogin.css'
import { useContext } from 'react';
import LoginContext from '../../context/LoginContext';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import * as React from 'react';
import Modal_LoginContext from './ModalLogin_Context';
import Modal_CadastroContext from '../ModalCadastro/ModalCadastroContext';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export function ModalLogin() {

    const Login_Context = useContext(LoginContext);
    const modal_login_context = useContext(Modal_LoginContext);
    const modal_cadastro_context = useContext(Modal_CadastroContext);

    const schema = yup.object({
        username: yup.string().required('Por favor forneça seu usuário'),
        password: yup.string().required('Por favor forneça sua senha')
    }).required();

    const { register, handleSubmit, formState:{ errors }} = useForm({resolver: yupResolver(schema)});

    const onSubmit = data => {
        Login_Context.Login(data);
    };

    const handleClose = () => {
        modal_login_context.setIsOpen(false);
      };
      
      if (Login_Context.isLogged === '1'){
        modal_login_context.setIsOpen(false);
      };

return (<div>
    <Dialog
      open={modal_login_context.isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Login"}</DialogTitle>
      <DialogContent>
     
                     

        <form onSubmit={handleSubmit(onSubmit)} className='login-form'>

            <label htmlFor="Username" className='login-form_label form-label'>Usuário</label>
            <input {...register("username",{ required: true})} type="text" id="Username" className='login-form_input' />
            <p className='login-form-error-message '>{errors.username?.message}</p>

            <label htmlFor="Password" className='login-form_label form-label'>Senha</label>
            <input {...register("password",{ required: true})} type="password" id="Password" className='login-form_input' />
            <p className='login-form-error-message '>{errors.password?.message}</p>

            <button type="submit" className='form-button login-button'>Login</button>

            <p style={{textAlign: 'center',marginRight: '10px'}}>
                Não possui uma conta? <Link onClick={()=>{
                  modal_login_context.setIsOpen(false);
                  modal_cadastro_context.setIsOpen(true);
                }} to='/' className='link'>Cadastre-se</Link> 
            </p>

        </form>
                            

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  </div>
);
}