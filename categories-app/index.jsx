import React from 'react'
import CategoryGrid from '../category-grid/index.jsx'

class CategoriesApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = { listado: [] , auxiliar: []}

    }



    componentWillMount() {
        var listado = [];
        fetch('https://api.mercadolibre.com/sites/MLA/trends/search')
            .then((response) => response.json())
            .then((categories) => {
                var urls = []
                categories.forEach(function(category){
                    var url = "https://api.mercadolibre.com/sites/MLA/search?q=" + category.keyword;
                    var res = encodeURI(url);
                    urls.push(res);
                });
                Promise.all(urls.map(url =>
                    fetch(url).then(resp => resp.json())
                )).then(resp => {
                    resp.forEach(function(category) {
                        listado.push({name: category.query, picture: category.results[0].thumbnail});
                    });
                    this.setState({listado : listado})
                })
            });




    }

    render() {

        if (this.state.listado.length > 0) {
            return (
                <div className="container-fluid">
                    {console.log(this.state.listado)}
                    {<CategoryGrid listado = {this.state.listado} col={5} rows={5} />}

                </div>
            )
        } else {
            return <p className="text-center">Cargando categorias...</p>
        }
    }

}

export default CategoriesApp