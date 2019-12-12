import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>{count}</p>
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
