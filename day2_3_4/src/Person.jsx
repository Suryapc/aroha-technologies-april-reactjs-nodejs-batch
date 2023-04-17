const Person = (props) => {
  return (
    <div className="personStyle">
      <p onClick={props.click}>
        I'm a {props.name}, and I'm an {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} />
      <button type="button" onClick={props.delete}>
        Delete
      </button>
    </div>
  );
};

export default Person;
