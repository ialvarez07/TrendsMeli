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
    }
    get_random_color()
    {
        var color = "";
        for(var i = 0; i < 3; i++) {
            var sub = Math.floor(Math.random() * 256).toString(16);
            color += (sub.length == 1 ? "0" + sub : sub);
        }
        return "#" + color;
    }

   render() {
        console.log(this.props.listado);
       let rows = [];
       var rowsLenght = this.props.rows;
       var colLenght = this.props.col;

       for (var i = 0; i < rowsLenght; i++){
           let rowID = `row${i}`;
           let cell = [];
           for (var idx = 0; idx < colLenght; idx++){
               var styleCell = {height: "100px", backgroundColor: this.get_random_color(), align:"center"};
               let cellID = `cell${i}-${idx}`;
               var square = <CategorySquare cellId={cellID} styleCell={styleCell}
                                            name={this.props.listado[Math.floor(Math.random() * this.props.listado.length)].name}/>;
               cell.push(square);
           }
           rows.push(<tr key={i} id={rowID}>{cell}</tr>);
       }
       var styleTable = {height:"100%"};
       var listado = this.props.listado;
       //ReactDOM.findDOMNode(`cell${rowRandom}-${cellRandom}`).style.color = 'red';
       var getColor = this.get_random_color;
       setInterval(function(){

           let rowRandom = Math.floor(Math.random() * rowsLenght);
           let cellRandom = Math.floor(Math.random() * colLenght);
           let cellId = [`cell${rowRandom}-${cellRandom}`];
           let cell = document.getElementById([cellId]);

           cell.innerText = listado[Math.floor(Math.random() * listado.length)].name;
           cell.style.backgroundColor=getColor();

       },100);

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

