import React from 'react'
import CategoryGrid from '../category-grid/index.jsx'

class CategoriesApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {categories: []}
    }


    createTable(){

    }

    componentWillMount() {
        fetch('https://api.mercadolibre.com/sites/MLA/trends/search')
            .then((response) => response.json())
            .then((categories) => {
                this.setState({categories: categories})
                console.log(this.state.categories)
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