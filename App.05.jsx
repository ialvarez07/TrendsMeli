import React from 'react';

class App extends React.Component {
   render() {
      var miEstilo = {fontSize: 100, color: '#FF0000'}
      return (
         <div>
            <h1 style = {miEstilo}>Cabecera</h1>
         </div>
      );
   }
}

export default App;


