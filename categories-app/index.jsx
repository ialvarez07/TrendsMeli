import React from 'react'
import CategoryGrid from '../category-grid/index.jsx'

class CategoriesApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = { categories: [] }
    }

    componentWillMount() {
        var listado = [];
        fetch('https://api.mercadolibre.com/sites/MLA/trends/search')
            .then((response) => response.json())
            .then((categories) => {
                categories.forEach(function(category){
                    var url = "https://api.mercadolibre.com/sites/MLA/search?q=" + category.keyword;
                    var res = encodeURI(url);
                   fetch(res)
                   .then((resDetail) => resDetail.json())
                   .then((categoryDetail) => {
                    listado.push({name: category.keyword, picture: categoryDetail.results[0].thumbnail})

                   })
                });
                this.setState({ listado: listado})
            })
    }

    render() {
        if (this.state.categories.length > 0) {
            return (
                <div className="container-fluid">


                    {<CategoryGrid listado = {this.state.categories} col={5} rows={5} />}

                </div>
            )
        } else {
            return <p className="text-center">Cargando categorias...</p>
        }
    }

}

export default CategoriesApp