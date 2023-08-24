
//const desc = "lorem ipsum dolor sit am id, consectetur adipiscing elit et"
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

function Card(props){
    const { title, desc } = props;   // this is call props destructuring
    return <div>
        <h1>To Do App</h1>
        <h3>{title}</h3>
        <h3>{desc}</h3>
        <h3>{day + "/" +month + "/" + year} </h3>
    </div>
}

export default Card;