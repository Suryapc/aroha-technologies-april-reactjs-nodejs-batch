const Person = (props) => {
  return (
    <div>
      <p>
        I'm a {props.name}, and I'm an {props.age} years old.
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
