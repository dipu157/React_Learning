
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

function Card(){
    return <div>
        <h1>To Do App</h1>
        <h3>Call Family</h3>
        <h3>{day + "/" +month + "/" + year} </h3>
    </div>
}

export default Card;