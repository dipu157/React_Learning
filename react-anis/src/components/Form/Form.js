import React, { useState } from 'react'
import style from './form.module.css';


export default function Form() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const hnameChange = (e) => {
        setName(e.target.value);
    }

    const hemailChange = (e) => {
        setEmail(e.target.value);
    }

    const hpasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const hSubmit = (e) => {
        console.log("Form sumbitted!");        
        let userinfo = {
            name,
            email,
            password
        }
        console.log(userinfo);
        e.preventDefault();
    }


  return (
    <div>
        <h1>Registration</h1>
        <form action='' onSubmit={hSubmit}>

            <div className={style.formGroup}>
                <label>Name: </label>
                <input type="text" name="name" id='name' value={name} onChange={hnameChange} required />
            </div>

            <div className={style.formGroup}>
                <label>Email: </label>
                <input type="text" name="email" id='email' value={email} onChange={hemailChange} required />
            </div>

            <div className={style.formGroup}>
                <label>Password: </label>
                <input type="password" name="password" id='password' value={password} onChange={hpasswordChange} required />
            </div>

            <button type="submit">Submit</button>
            

        </form>
    </div>
  )
}
