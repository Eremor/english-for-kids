import React from 'react';
import './app.scss';

const App = () => {
  const arr = [1, 2, 3, 4, 5];
  const text = arr
    .map((x) => x + 1)
    .filter((someMaxNumber) => someMaxNumber === 5)[0]
    .toString();
  return <h1>{text}</h1>;
};

export default App;
