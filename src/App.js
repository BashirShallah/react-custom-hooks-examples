import React from 'react';
import useDocumentBg from "./hooks/useDocumentBg";
import useCount from "./hooks/useCount";

function App() {

  const {count, increment, decrement} = useCount();

  useDocumentBg();

  return (
    <div>
      Count: {count}
      <br /><br />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
