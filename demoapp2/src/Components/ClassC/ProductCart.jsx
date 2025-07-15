import React, { Component } from "react";
class ProductCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productslist : this.props.productslist.map(productslist => ({ ...productslist}))
        };
    }
    incrementQty = (id) => {
        const updateProdcts = this.state.productslist.map(productslist => {
            if(productslist.id === id) {
                return {...productslist, qty:productslist.qty+1};
            }
            return productslist;            
        });
        this.setState({productslist:updateProdcts});
    }
    render() {
        const productslist = this.state;
        return (
            <div>
                            <h2>Product Kart</h2>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {productslist.map(productslist => (
                        <tr key={productslist.id}>
                            <td>{productslist.id}</td>
                            <td>{productslist.name}</td>
                            <td>${productslist.price}</td>
                            <td>{productslist.qty}<button onClick={this.incrementQty}>+</button> </td>
                            <td>${this.getLineTotal(productslist.price, productslist.qty)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3> Grand Total : {this.getGrandTotal()} </h3>
            </div>
        );
    }
}
export default ProductCart