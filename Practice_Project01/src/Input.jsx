export default function Input(props) {
  return (
    <p>
      <label htmlFor={props.id}>{props.children}</label>
      <input
        type="number"
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </p>
  );
}
