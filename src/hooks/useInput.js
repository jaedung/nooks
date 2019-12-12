import { useState } from "react";

const useInput = initialValue => {
  const [value] = useState(initialValue);

  return value;
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
