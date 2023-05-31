import React, { useState } from 'react';
import axios from 'axios';

const ActivarUser = () => {
    let globalUrl = "https://api-datapinder.onrender.com/auth/jwt/create/"
    const [cajaEmailLogin, setCajaEmailLogin] = useState('')
    const [cajaPasswordLogin, setCajaPasswordLogin] = useState('')

    const activationUser = (e) => {

        const config = {
            headers : {
                'Content-type' : 'application/json'
            }
        }

        e.preventDefault();
        var email = cajaEmailLogin;
        var password = cajaPasswordLogin;

        var data = {
            email : email,
            password : password
        }
        try {
            var re = axios.post(globalUrl, data, config);
            console.log(re)
        } catch (err) {
            console.log(err)
        }
        
        //console.log(data)
    }

    return (
        <div>
            <h2>Iniciar Sesion</h2>
            <form onSubmit={activationUser}>
                <div>
                    <label>Email</label>
                    <input type="text" onChange={(e) => setCajaEmailLogin(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" onChange={(e) => setCajaPasswordLogin(e.target.value)} />
                </div>
                <button className="boton" type='submit'>Login</button>
            </form>
        </div>
    );

}
export default ActivarUser;