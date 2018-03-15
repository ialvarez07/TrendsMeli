import React from 'react';
import CategorySquare from '../category-square/index.jsx'

class CategoryGrid extends React.Component {
   render() {
      return (
         <div class="grid">
             <p>{this.props.name}</p>
         </div>
      );
   }
}

export default CategoryGrid;

