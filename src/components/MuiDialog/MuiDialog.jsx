import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import * as React from 'react';
import { useContext, Fragment } from 'react';
import marcadoresContext from '../../context/marcadoresContext';
import RegistrationForm from './CadastroMarcadores';
import { Grid, Paper,Typography } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import ControlledSelect from '../Select/selecControlled';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import Select from '@material-ui/core/Select/Select';
import { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import { useForm } from "react-hook-form";
import './MuiDialog.css'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "react-datepicker/dist/react-datepicker.css";
import api from '../../services/api'
import LoginContext from '../../context/LoginContext';
import sliderContext from '../../context/sliderContext';





const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const marcadores_context = useContext(marcadoresContext)
  const login_context = useContext(LoginContext)
  const slider_context = useContext(sliderContext)

  var select = document.getElementById('select_tipo');
  const [datapciked, setDatapicked]  = useState(null)
  const { register, handleSubmit, formState:{ errors }} = useForm();

  const [localValue, setLocalValue] = useState(null);  // we want to keep value locally
  const [value, setValue] = useState(null)

  const handleChange = (e) => {
   setLocalValue(e.target.value)
};


// const schema = yup.object({
//     username: yup.string().required('Por favor forneça seu usuário'),

//     password: yup.string().required('Por favor forneça sua senha').min(6,'A senha deve possuir ao menos 6 caracteres').max(10,'A senha deve possuir no máximo 10 caracteres'),

//     passwordConfirm: yup.string().required('Por favor confirme sua senha').oneOf([yup.ref('password'), null], 'As senhas não coincidem'),

// }).required();

// const { register, HandleSubmit, formState:{ errors }} = useForm({resolver: yupResolver(schema)});
let navigate = useNavigate();
const onSubmit = data => {
 
  const Marcador = {
    latitude: parseFloat(marcadores_context.Lat),
    longitude: parseFloat(marcadores_context.Long),
    ano: String(datapciked),
    dono_id: parseInt(login_context.userId),
    Tipo: String(select.options[select.selectedIndex].value),
    Nome: String(data.NomeOcupacao),
    Org: String(data.Organizacao),
    NumFamilias: String(data.NumeroFamilias),
  }


  api.post(`/cadastro/marcador`,Marcador)
        .then((response)=>{
            slider_context.GetMarcadores()
            marcadores_context.setOpen(false)
            alert("Ocupação cadastrada com sucesso!");   
            navigate("/", { replace: true });

          })
        .catch((error)=>{
            alert(error.response.data.detail);
        })
  
};

  const handleClickOpen = () => {
    marcadores_context.setOpen(true);
  };

  const handleClose = () => {
    marcadores_context.setOpen(false);
  };

 


  return (
    <div>
      <Dialog
        open={marcadores_context.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Adicionar Ocupação"}</DialogTitle>
        <DialogContent>
       
                       


                        <form onSubmit={handleSubmit(onSubmit)} className='marcadores-form'>
                            
                        <label htmlFor="SignUp" className='SignUp-form_label form-label'>Nome da ocupação</label>
                        <input {...register("NomeOcupacao",{ required: true})} type="text" id="NomeOcupacao"className='marcadores-form_input'/>
                

                
                        <label className='SignUp-form_label form-label'>Tipo da ocupação</label>
                          <select
                            id="select_tipo"
                            form='marcadores-form'
                            >
                                <option value={"Terreno"}>Terreno</option>
                                <option value={"Antigos Casarões"}>Antigos Casarões</option>
                                <option value={"Conjunto de casas"}>Conjunto de casas</option>
                                <option value={"Favela"}>Favela</option>
                                <option value={"Prédio Verticalizado"}>Prédio Verticalizado</option>
                                <option value={"Instalção fabril/galpão"}>Instalção fabril/galpão</option>
                                <option value={"Edifício Institucional/Equipamento público"}>Edifício Institucional/Equipamento público</option>
                                <option value={"Outro"}>Outro</option>
                          </select>
        
                        <label htmlFor="SignUp" className='SignUp-form_label form-label'>Movimento ou Organização atuante</label>
                        <input {...register("Organizacao",{ required: false})} type="text" id="Organizacao"className='marcadores-form_input'/>

                        <label htmlFor="SignUp" className='SignUp-form_label form-label'>Numero de Famílias</label>
                        <input {...register("NumeroFamilias",{ required: false})} type="text" id="NumeroFamilias"className='marcadores-form_input'/>
                      
                        <label htmlFor="SignUp" className='SignUp-form_label form-label'>Data da ocupação</label>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <Stack spacing={4} sx={{width: '28rem'}}>
                          <DatePicker
                            label="   "
                            views={['year', 'month']}
                            value={datapciked}
                            maxDate= {new Date()}
                            onChange={(newValue) => {
                              setDatapicked(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                          </Stack>
                        </LocalizationProvider>
                      
                   
                        <button type="submit" className='form-button marcadores-button'>Cadastrar</button>
                        
                        
                        </form>
          
                  

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
  
        </DialogActions>
      </Dialog>
    </div>
  );
}
