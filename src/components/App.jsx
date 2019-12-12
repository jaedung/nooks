import React from "react";
import useInput from "../hooks/useInput";

const App = () => {
  const maxLengthValidator = value => !value.includes("@");
  const [value, onInputChange] = useInput("", maxLengthValidator);

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={value}
        onChange={onInputChange}
      />
      <p>{value}</p>
    </div>
  );
};

// class App extends React.Component {
//   state = {
//     count: 0
//   };

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   decrement = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   render() {
//     return (
//       <>
//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.decrement}>Decrement</button>
//         <p>{this.state.count}</p>
//       </>
//     );
//   }
// }

export default App;
