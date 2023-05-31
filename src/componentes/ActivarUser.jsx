import React, { useState } from 'react';
import axios from 'axios';

const ActivarUser = () => {
    let globalUrl = "https://api-datapinder.onrender.com/auth/users/activation/"
    const [cajaUid, setUserUid] = useState('')
    const [cajaToken, setCajaToken] = useState('')

    const activationUser = (e) => {

        const config = {
            headers : {
                'Content-type' : 'application/json'
            }
        }

        e.preventDefault();
        var uid = cajaUid;
        var token = cajaToken;

        var data = {
            uid : uid,
            token : token
        }
        try {
            var re = axios.post(globalUrl, data, config);
            
        } catch (err) {
            console.log(err)
        }
        console.log(re)
        //console.log(data)
    }

    return (
        <div>
            <h2>Activacion</h2>
            <form onSubmit={activationUser}>
                <div>
                    <label>Uid</label>
                    <input type="text" onChange={(e) => setUserUid(e.target.value)} />
                </div>
                <div>
                    <label>Token</label>
                    <input type="text" onChange={(e) => setCajaToken(e.target.value)} />
                </div>
                <button className="boton" type='submit'>Activar</button>
            </form>
        </div>
    );

}
export default ActivarUser;