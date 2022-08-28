// import { Link } from 'react-router-dom';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import './SignUpForm.css'
// import { useNavigate } from "react-router-dom";
// import api from '../../services/api'
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import Menu from '@mui/material/Menu';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import * as React from 'react';
// import { MenuItem } from '@mui/material';
// import ControlledSelect from '../Select/selecControlled';
// import { useEffect, useState } from 'react';
// import ControlledSelect_cidades from '../Select/selectControlled_Cidades';
// export function SignUpForm() {

//     const schema = yup.object({
//         username: yup.string().required('Por favor forneça seu usuário'),

//         password: yup.string().required('Por favor forneça sua senha').min(6,'A senha deve possuir ao menos 6 caracteres').max(10,'A senha deve possuir no máximo 10 caracteres'),
    
//         passwordConfirm: yup.string().required('Por favor confirme sua senha').oneOf([yup.ref('password'), null], 'As senhas não coincidem'),

//     }).required();

//     const { register, handleSubmit, formState:{ errors }} = useForm({resolver: yupResolver(schema)});

//     let navigate = useNavigate();

//     const onSubmit = data => {
//         console.log(data.DataNasc)
//         const user = {
//             Username: data.username,
//             Nome: data.Nome,
//             Password: data.password,
//             Email: data.Email,
//             Cidade: Cidade,
//             Estado: Estado,
//             DataNascimento: data.DataNasc
//         }


//         api.post(`/cadastro/`,user)
//         .then((response)=>{
//             navigate("/", { replace: true });
//             console.log(response);   
//         })
//         .catch((error)=>{
//             alert(error.response.data.detail);
//         })

//     };


//   const [Estado, setEstado] = useState(''); // selected option
//   const [Cidades, setCidades] = useState([])
//   const [Cidade, setCidade] = useState('')
//   const handleChange = (value) => {
//     setEstado(value);

//     api.get(`/cidades/${value}`)
//     .then((response)=>{

//         setCidades(response.data);
//         setCidade(response.data[0].label)
//         })
//     .catch((error)=>{
//         alert('Erro com api');
//     })
//     };
 
//     const handleChange1 = (value) => {
//         setCidade(value)
//         };


//     return(
//         <>
//             <form onSubmit={handleSubmit(onSubmit)} className='SignUp-form'>
                


//                 <label htmlFor="SignUp" className='SignUp-form_label form-label'>Usuário</label>
//                 <input {...register("username",{ required: true})} type="text" id="SignUp"className='SignUp-form_input'/>
//                 <p className='login-form-error-message '>{errors.username?.message}</p>

//                 <label htmlFor="SignUp" className='SignUp-form_label form-label'>Nome</label>
//                 <input {...register("Nome",{ required: true})} type="text" id="Nome"className='SignUp-form_input'/>
//                 <p className='login-form-error-message '>{errors.username?.message}</p>

                

//                 <label htmlFor="Password" className='SignUp-form_label form-label'>Senha</label>
//                 <input {...register("password",{ required: true, minLenght: 6})} type="password" minLength={6} maxLength={10} id="Password" className='SignUp-form_input' />
//                 <p className='login-form-error-message '>{errors.password?.message}</p>


//                 <label htmlFor="PasswordConfirm" className='SignUp-form_label form-label'>Confirmar Senha</label>
//                 <input {...register("passwordConfirm",{ required: true})} type="password" min='6' max='10' id="PasswordConfirm" className='SignUp-form_input' />
//                 <p className='login-form-error-message '>{errors.passwordConfirm?.message}</p>

//                 <label htmlFor="SignUp" className='SignUp-form_label form-label'>Email</label>
//                 <input {...register("Email",{ required: true})} type="text" id="Email"className='SignUp-form_input'/>
//                 <p className='login-form-error-message '>{errors.username?.message}</p>
               
                    
//                 <div className='Select_container'>
//                 <label className='SignUp-form_label form-label'>Estado</label>
//                 <ControlledSelect value={Estado} onChange={handleChange} />
//                 </div>
                
//                 <div className='Select_container'>
//                 <label className='SignUp-form_label form-label'>Cidades</label>
//                 <ControlledSelect_cidades options={Cidades} value={Cidade} onChange={handleChange1}/>
//                 </div>
       

//                 <label htmlFor="SignUp" className='SignUp-form_label form-label'>Data de Nascimento</label>
//                 <input {...register("DataNasc",{ required: true})} type="date" id="DataNasc"className='SignUp-form_input'/>
//                 <p className='login-form-error-message '>{errors.username?.message}</p>

//                 <button type="submit" className='form-button SignUp-button'>Cadastrar</button>

//                 <p style={{textAlign: 'center',marginRight: '10px'}}>
//                     Já possui uma conta? <Link to='/Login' className='link'>Entrar</Link> 
//                 </p>
//             </form>
//         </>
//     );
// }