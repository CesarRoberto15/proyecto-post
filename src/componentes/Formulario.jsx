import React from 'react';
import axios from 'axios';

const globalUrl="https://api-datapinder.onrender.com/auth";

const Formulario = () => {
    
    cajaName=React.createRef();
    cajaLastName=React.createRef();
    cajaEmail=React.createRef();
    cajaPassword=React.createRef();
    cajaRepassword=React.createRef();

    newUser = (e) => {
        e.preventDefault();
        var nam = this.cajaName.current.value;
        var ln = this.cajaLastName.current.value;
        var em =this.cajaEmail.current.value;
        var pas =this.cajaPassword.current.value;
        var rp =this.cajaRepassword.current.value;
        var data = {
            first_name: nam,
            last_name: ln,
            email: em,
            password: pas,
            re_password: rp
        } 

        var url = globalUrl + '/users/'
        axios.post(url, data)
        console.log(data)
    }

    return (
    <div>
        <h2>Formulario</h2>
        <form onSubmit={this.newUser}>
            <div>
                <label>Nombre</label>
                <input type="text" ref={this.cajaName} />
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" ref={this.cajaLastName} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" ref={this.cajaEmail} />
            </div>
            <div>
                <label>Password</label>
                <input type="text" ref={this.cajaPassword} />
            </div>
            <div>
                <label>Repetir Password</label>
                <input type="text" ref={this.cajaRepassword} />
            </div>
            <button className="boton">Enviar</button>
        </form>
    </div>
    );
}

export default Formulario;