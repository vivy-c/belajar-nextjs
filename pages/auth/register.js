import React, {useState} from 'react';

export default function Register(){
    const [fields, setFields] = useState({
        email : '',
        password : ''
    });

    const [status, setStatus] = useState('normal');

    async function registerHandler(e){
        e.preventDefault();
        // console.log('submit');
        //console.log(fields);
        
        //pada saat loading
        setStatus('loading');

        const registerReq = await fetch('/api/auth/register',{
            method : 'POST',
            body: JSON.stringify(fields),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        if(!registerReq.ok) return setStatus('error '+registerReq.status)

        const registerRes = await registerReq.json();
        console.log(registerRes);

        setStatus('success');

    }


    function fieldHandler(e){
        //console.log(e.target.value);
        //setFields({ email: e.target.value});
        //console.log(e.target.getAttribute('name'));

        const name = e.target.getAttribute('name');

        setFields({
            ...fields,
            [name]: e.target.value
        });
    } 

    return (
        <div>
        <h1>Register</h1>
        <form onSubmit={registerHandler.bind(this)} >
            <input onChange={fieldHandler.bind(this)} name="email" type="text" placeholder="Email" /> 
            <br/>
            <input onChange={fieldHandler.bind(this)} name="password" type="password" placeholder="Password" />

            <br/>
            <button type="submit">
                Register
            </button>
            <div>Output : {status}</div>
        </form>
        </div>
    );
}