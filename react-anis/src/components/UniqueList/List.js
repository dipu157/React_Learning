import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const todos = [
    {
        "id": uuidv4(),
        "title" : "Call Home",
        "desc" : "This is description1"
    },
    {
        "id": uuidv4(),
        "title" : "Call Mother",
        "desc" : "This is description2"
    },
    {
        "id": uuidv4(),
        "title" :"Call Father",
        "desc" : "This is description3"
    }

]

export const List = () => {
  return (
    <div>
        {todos.map((todo) => {
            const {id, title, desc} = todo;
            return (
                <div key={id}>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
            );
        })}
    </div>
  )
}
