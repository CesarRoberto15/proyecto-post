import React, { useState } from 'react';
import axios from 'axios';

const CorreoRecuperar = () => {
    let globalUrl = "https://api-datapinder.onrender.com/auth/users/reset_password/";
    const [cajaCorreo, setCajaCorreo] = useState()

    const recuperar = (e) => {

        const config = {
            headers : {
                'Content-type' : 'application/json'
            }
        }

        e.preventDefault();
        var correo = cajaCorreo;

        var data = {
            email : correo
        }
        try {
            var re = axios.post(globalUrl, data, config);
            console.log(data);
            console.log(re);
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div>
            <h2>Correo de Recuperacion</h2>
            <form onSubmit={recuperar}>
                <div>
                    <label>Correo</label>
                    <input type="text" onChange={(e) => setCajaCorreo(e.target.value)} />
                </div>
                <button className="boton" type='submit'>Enviar</button>
            </form>
        </div>
    )

}

export default CorreoRecuperar;