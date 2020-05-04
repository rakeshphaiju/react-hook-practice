import React from "react";
import ReactDOM from "react-dom";

let values = [];
let currentHook = 0;

function useState(initialState) {
  if (typeof values[currentHook] === "undefined")
    values[currentHook] = initialState;

  let hookIndex = currentHook;

  function setState(nextValue) {
    values[hookIndex] = nextValue;
    ReactDOM.render(<MyName />, document.getElementById("root"));
  }

  return [values[currentHook++], setState];
}

function MyName() {
  currentHook = 0;
  const [enableFirstName, setenableFirstName] = useState(false);
  const [lastName, setlastName] = useState('');
 
  const [name, setName] = useState('') ;
    

  function handleChange(evt) {
    setName(evt.target.value);
  }

  function handlelastNameChange(evt) {
    setlastName(evt.target.value);
  }

  function handleEnableChange(env) {
    setenableFirstName(!enableFirstName);
  }
  return (
    <div>
      <h1>
        My name is: {enableFirstName ? name: ''} {lastName}
      </h1>
      <input
        type="checkbox"
        value={enableFirstName}
        onChange={handleEnableChange}
      />
      <input
        type="text"
        value={name}
        onChange={handleChange}
      />
      <input type="text" value={lastName} onChange={handlelastNameChange} />
    </div>
  );
}

export default MyName;
