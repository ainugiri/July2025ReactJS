import React, { Component } from 'react'

class KartPage extends Component{
    constructor(props) {
        super(props)
        this.state = {
            products:this.props.products.map(product => ({ ...product})) // cloned to manage local state
        };
    }

    incQty = (id) => {
        console.log("started")
        const updateProdcts = this.state.products.map(product =>
        {
            console.log(id)
            if(product.id === id){
                console.log(product.qty)
                return {...product, qty: product.qty + 1};
            }
            return product;
        });
        
        console.log(updateProdcts)
        this.setState({products:updateProdcts});
    }
    decQty = (id) => {
        console.log("started")
        const updateProdcts = this.state.products.map(product =>
        {
            console.log(id)
            if(product.id === id && product.qty>0 ){
                console.log(product.qty)
                return {...product, qty: product.qty - 1};
            }
            return product;
        });
        
        console.log(updateProdcts)
        this.setState({products:updateProdcts});
    }

    render(){
        const {products} = this.state;

        return(
            <>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>+</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product =>(
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><button onClick={() => this.decQty(product.id)}>-</button>
                            {product.qty}
                            <button onClick={() => this.incQty(product.id)}>+</button></td>
                            <td>
                                <button onClick={() => this.incQty(product.id)}>+</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </>
        )
    }
}

export default KartPage;