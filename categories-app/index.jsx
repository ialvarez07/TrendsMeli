import React from 'react'
import CategoryGrid from '../category-grid/index.jsx'

class CategoriesApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = { categories: [] }
    }

    componentWillMount() {
        fetch('https://api.mercadolibre.com/sites/MLA/trends/search')
            .then((response) => response.json())
            .then((categories) => {
                this.setState({ categories: categories})
                console.log(this.state.categories)
            })
    }

    render() {
        if (this.state.categories.length > 0) {
            return (
                <div className="container-fluid">
                    {this.state.categories.map((category) => {
                        console.log(category);
                      return <CategoryGrid
                        key={category.keyword}
                        name={category.url} />
                    })
                    }
                </div>
            )
        } else {
            return <p className="text-center">Cargando categorias...</p>
        }
    }

}

export default CategoriesApp