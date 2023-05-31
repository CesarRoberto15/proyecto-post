import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const Formulario = () => {
    let globalUrl="https://api-datapinder.onrender.com/auth"
    const [cajaName, setCajaName] = useState('')
    const [cajaLastName, setCajaLastName] = useState('')
    const [cajaEmail, setCajaEmail] = useState('')
    const [cajaPassword, setCajaPassword] = useState('')
    const [cajaRePassword, setCajaRePassword] = useState('')
    
    /*cajaName=React.createRef();
    cajaLastName=React.createRef();
    cajaEmail=React.createRef();
    cajaPassword=React.createRef();
    cajaRepassword=React.createRef();*/

    const newUser = (e) => {
        e.preventDefault();
        var nam = cajaName;
        var ln = cajaLastName;
        var em = cajaEmail;
        var pas = cajaPassword;
        var rp = cajaRePassword;
        var data = {
            first_name: nam,
            last_name: ln,
            email: em,
            password: pas,
            re_password: rp
        } 

        var url = globalUrl + '/users/'
        try {
            axios.post(url, data)
        } catch (err) {
            console.log(err)
        }
        console.log(data)
    }

    return (
    <div>
        <h2>Formulario</h2>
        <form onSubmit={newUser}>
            <div>
                <label>Nombre</label>
                <input type="text" onChange={(e) => setCajaName(e.target.value)} />
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" onChange={(e) => setCajaLastName(e.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" onChange={(e) => setCajaEmail(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="text" onChange={(e) => setCajaPassword(e.target.value)} />
            </div>
            <div>
                <label>Repetir Password </label>
                <input type="text" onChange={(e) => setCajaRePassword(e.target.value)} />
            </div>
            <button className="boton" type='submit'>Enviar</button>
        </form>
    </div>
    );
}

export default Formulario;