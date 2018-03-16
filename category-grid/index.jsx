import React from 'react';
import CategorySquare from '../category-square/index.jsx'
import ReactDOM from "react-dom";

class CategoryGrid extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            rows: this.props.rows,
            cols: this.props.col
        };
        this.changeCategory = this.changeCategory.bind(this);
    }

    changeCategory(){

    }

   render() {
       let rows = [];
       var rowsLenght = this.props.rows;
       var colLenght = this.props.col;
       for (var i = 0; i < rowsLenght; i++){
           let rowID = `row${i}`;
           let cell = [];
           for (var idx = 0; idx < colLenght; idx++){

               let cellID = `cell${i}-${idx}`;
               var square = <CategorySquare cellId={cellID}
                                            name={this.props.listado[Math.floor(Math.random() * this.props.listado.length)].keyword}/>;
               cell.push(square);
           }
           rows.push(<tr key={i} id={rowID}>{cell}</tr>)
           this.changeCategory();
       }
       var styleTable = {height:"100%"};
       var listado = this.props.listado

       //ReactDOM.findDOMNode(`cell${rowRandom}-${cellRandom}`).style.color = 'red';
       setInterval(function(){
           let rowRandom = Math.floor(Math.random() * rowsLenght);
           let cellRandom = Math.floor(Math.random() * colLenght);
           let cellId = [`cell${rowRandom}-${cellRandom}`]
           let cell = document.getElementById([cellId]);
           console.log(<CategorySquare cellId={cellId}
                                       name={listado[Math.floor(Math.random() * listado.length)].keyword}/>);

       },5000);
      return (

             <div className="container">
                 <div className="row">
                     <div className="col s12 board" style={styleTable}>
                         <table id="simple-board" border="1" width="100%">
                             <tbody>
                             {rows}
                             </tbody>
                         </table>
                     </div>
                 </div>
             </div>
      );
   }
}

export default CategoryGrid;

