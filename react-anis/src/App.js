import React from 'react';
import Card from './components/Card';
import Data from './data.json'

function App() {
    let items = [];
    for (let i = 0; i < Data.length; i++) {
        items.push(<Card title = {Data[i].title} desc = {Data[i].desc} />)
    }

    return <div>        
        {items}
    </div>
}

export  default App;