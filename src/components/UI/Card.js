import '../UI/Card.css';

const Card = (props) => {

    const classes = 'card' + props.children;
    
return <div className={classes}></div>;

}
export default Card;