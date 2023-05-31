import React, { useState } from 'react';
import axios from 'axios';

const NuevaContraseña = () => {
    let globalUrl = "https://api-datapinder.onrender.com/auth/users/reset_password_confirm/";
    const [cajaNew, setCajaNew] = useState()
    const [cajaNewAgain, setCajaNewAgain] = useState()

    const ingresarNuevaContraseña = (e) => {
        e.preventDefault();
        var nueva = cajaNew;
        var nuevaOtra = cajaNewAgain;

        var data = {
            uid : "MQ",
            token : "bp2yoe-a88aae88f4fbdde1c4963c2c3b76c3a6",
            new_password : nueva,
            re_new_password : nuevaOtra
        }
        try {
            var re = axios.post(globalUrl, data);
            console.log(re);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h2>Nueva Contraseña</h2>
            <form onSubmit={ingresarNuevaContraseña}>
                <div>
                    <label>Nueva Contraseña</label>
                    <input type="text" onChange={(e) => setCajaNew(e.target.value)} />
                </div>
                <div>
                    <label>Repetir Nueva Contrseña</label>
                    <input type="text" onChange={(e) => setCajaNewAgain(e.target.value)} />
                </div>
                <button className="boton" type='submit'>Enviar</button>
            </form>
        </div>
    )

}
export default NuevaContraseña;