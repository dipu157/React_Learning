import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Index2 from './components/Hooks_UseState/Index2';
import Form from './components/Form/Form';
import Hook_UseStateC from './Hook_UseState/index1';
import Hook_UseStateF from './Hook_UseState/index2';
import { Child } from './components/State_Lifting/Child';


function App() {

    const dataapp = "I am from parent(APP)";
    const handleChildData = (childData) => {
        console.log(childData);
    }

    return <div>        
        <Child data={dataapp} onChildData={handleChildData} />
    </div>
}

export  default App;