import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onInputChange = event => {
    let willUpdate = true;

    if (typeof validator === "function") willUpdate = validator(value);
    if (willUpdate === true) setValue(event.target.value);
  };

  return [value, onInputChange];
};

export default useInput;

// import { useState, useEffect } from "react";

// export default () => {
//   const [lat, setLat] = useState(null);
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     window.navigator.geolocation.getCurrentPosition(
//       position => setLat(position.coords.latitude),
//       error => setErrorMessage(error.message)
//     );
//   }, []);

//   return [lat, errorMessage];
// };
