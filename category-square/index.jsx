import React from 'react';


class CategorySquare extends React.Component {
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

        var styleCell = {height: "100px", backgroundColor: this.get_random_color(), align:"center"};
        return (
                <td align="center" key={this.props.cellId} id={this.props.cellId}  style={styleCell} >{this.props.name}</td>
        );
    }
}

export default CategorySquare;

