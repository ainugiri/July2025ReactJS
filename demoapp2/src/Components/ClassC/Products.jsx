import React, { Component } from 'react';

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {qty : this.props.qty}
    }
    getLineTotal = (price, qty) => {
        return price * qty;
    }
    getGrandTotal = () => {
        const { products } = this.props;
        return products.reduce((total, product) => total + this.getLineTotal(product.price, product.qty), 0);
    }
    increment = () => {
        this.setState({qty: this.state.qty + 1});
        console.log(qty)
    }

        render() {
        const { products } = this.props;
        return (
            <div>
                <h2>Product List</h2>
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
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                                <td>
                                    <button>-</button><input type="number" min="0" value={this.state.qty} /> <button onClick={this.increment}>+</button>
                                </td>
                                <td>${this.getLineTotal(product.price, product.qty)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h3> Grand Total : {this.getGrandTotal()} </h3>
                <label>Discount Code :</label>
                <input type="text" placeholder="Enter discount code" />
                <button>Apply</button>
            </div>
        )
    }
}
export default Products;