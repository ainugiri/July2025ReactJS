import React, { Component } from "react";

class ClassComp1 extends Component {
    render(){
        return <h1>Hello from Class Component 1</h1>
    }
}

class ClassComp2 extends Component{
    render(){
        return <h1>Hello {this.props.name} from Class Component2, And his exp is {this.props.exp} years</h1>
    }
}

ClassComp2.defaultProps = {
    name: 'Guest',
    exp : 0,
};


export {ClassComp1, ClassComp2}