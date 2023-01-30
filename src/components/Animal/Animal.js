import './Animal.css';

export default function Animal(props) {
  return (
    <div className="animal" style={{ left: `${props.left}`, top: `${props.top}` }}>
      <img src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`} />
      <h2>{props.name}</h2>
      <h4>{props.says}</h4>
    </div>
  );
}
