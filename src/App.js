import React from 'react';
import data from './assets/data';
import AddChildComponent from './components/AddChildComponent';

function App() {
  console.log(data);
  return (<>
    <AddChildComponent data={data} />
  </>
  );
}

export default App;
