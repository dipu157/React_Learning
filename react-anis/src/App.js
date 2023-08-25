import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const users = [
    {
        id: uuidv4(),
        name : "Manik Chan",
        address : "This is address1",
        phones : [
            { home: "01213212"},
            { office: "123456"}
        ]

    },
    {
        id: uuidv4(),
        name : "Rakibul Islam",
        address : "This is address2",
        phones : [
            { home: "56165251"},
            { office: "879874854"}
        ]
    },
    {
        id: uuidv4(),
        name :"Fatema Tuzzohra",
        address : "This is address3",
        phones : [
            { home: "7897489212"},
            { office: "564654"}
        ]
    }

]

function App() {

    return <div>        
        <h1>Nested Lists</h1>        

        {users.map((user) =>{
            const {id, name, address, phones} = user;
            return <div key={id}>
                <h2>Name : {name}</h2>
                <p>Address : {address}</p>
                <h4>
                    {phones.map((phone) =>{
                        return <div>
                            Home : {phone.home}
                            Office :{phone.office}
                        </div>
                    })}
                </h4>
                <hr />
            </div>
        })}
    </div>
}

export  default App;