import './Card.css';
function Card(props){
    return (
        <>
            <div className='card'>
                <h2>{props.designation}</h2>
                <img className='img' src={props.image} alt="card-user"/>
                <h1>{props.name}</h1>
                <h3>{props.description}</h3>
                
            </div>
        </>

    )

};
export default Card;