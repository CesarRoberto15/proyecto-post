import React from 'react';
import axios from 'axios';
//fsdhkjsdhgfu

const Mostrar_datos = () => {
    let globalUrl = "https://api-datapinder.onrender.com/auth/users/me/";
    
    const mostrarDatos = (e) => {
        //let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg0OTU2MDc5LCJpYXQiOjE2ODQ5NTI0NzksImp0aSI6ImI0YTJhZGU3NzNhMDRhMzliYTc4YWFiZTVjNzNlM2UxIiwidXNlcl9pZCI6MX0.EldZ70gYV-RjR5AMcxFDCGu9nAK1fOxG63h5DA8svAQ'
        const config = {
            headers : {
                'Content-type' : 'application/json',
                'Authorization' : 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg1NTY3MjgzLCJpYXQiOjE2ODU1NjM2ODMsImp0aSI6IjU2YWVkYTk1NmU2ODQxYWRiZWE1OGQ4YzVmNWZmNjhjIiwidXNlcl9pZCI6MX0.U0TA4XzRia7gP8uDbxDRChMOpR2uTul7PmdG7_8kDIo',
                'Accept' : 'application/json'
            }
        }
        e.preventDefault();
        try {
            var re = axios.get(globalUrl,config)
            console.log(re)
        } catch (err) {
            console.log(err)
        }
    }
    return (
    <div>
        <h2>Mostrar</h2>
        <form onSubmit={mostrarDatos}>
            <button className="boton" type='submit'>Enviar</button>
        </form>
    </div>
    )
}
export default Mostrar_datos;