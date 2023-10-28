import React from 'react'

export const Child = (props) => {

    const datachild = "I am from child component";
    props.onChildData(datachild);

  return (
    <div>
        <p>I am Child Component</p>
        <p>{props.data}</p>
    </div>
  )
}
