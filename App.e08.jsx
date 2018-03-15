import React from 'react';

class App extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: 0
      }
	
      this.setStateHandler = this.setStateHandler.bind(this);
   };

   setStateHandler() {
      this.setState({data: this.state.data + 3})
   };
   consolear() {
      console.log("esto funciona");
   };

   render() {
      return (
         <div>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <button onClick = {this.consolear}>Prueba</button>
            <h4>State Array: {this.state.data}</h4>
         </div>
      );
   }
}

export default App;