import React, { useState } from 'react'
import style from './form.module.css';


export default function Form() {

    // const [name,setName] = useState("");
    // const [email,setEmail] = useState("");
    // const [password,setPassword] = useState("");

    const [user,setUser] = useState({name: "",email: "",password: ""});
    const {name,email,password} = user;

    // const hnameChange = (e) => {
    //     setUser({name:e.target.value, email, password});
    // }

    // const hemailChange = (e) => {
    //     setUser({name, email:e.target.value, password});
    // }

    // const hpasswordChange = (e) => {
    //     setUser({name, email, password:e.target.value});
    // }

    const hChange = (e) => {
        const fieldname = e.target.name;
        setUser({...user,[e.target.name]:e.target.value});
    }

    const hSubmit = (e) => {
        console.log("Form sumbitted!");
        console.log(user);
        e.preventDefault();
    }


  return (
    <div>
        <h1>Registration</h1>
        <form action='' onSubmit={hSubmit}>

            <div className={style.formGroup}>
                <label>Name: </label>
                <input type="text" name="name" id='name' value={name} onChange={hChange} required />
            </div>

            <div className={style.formGroup}>
                <label>Email: </label>
                <input type="text" name="email" id='email' value={email} onChange={hChange} required />
            </div>

            <div className={style.formGroup}>
                <label>Password: </label>
                <input type="password" name="password" id='password' value={password} onChange={hChange} required />
            </div>

            <button type="submit">Submit</button>
            

        </form>
    </div>
  )
}
