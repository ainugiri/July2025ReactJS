import React, {Component} from "react";
class OddEvenColorBox extends Component
 {
    constructor(props) {
        super(props);
        this.state = {
            number: 1
        };
    }
    incNum = () => {
        this.setState({number : this.state.number+1});
    }

    render(){
        const {number} = this.state;
        const isOdd = number % 2 !== 0;
        const boxStyle = {
            padding: '30px 30px',
            color:'white',
            backgroundColor: isOdd ? 'green' : 'blue',
            fontSize: '24px',
            borderRadius: '8px',
            display:'inline-block',
            marginBottom:'10px'
        }

        return(
            <div style={{padding:'40px', fontFamily:'Arial'}}>
                <h1>Conditional Rendering</h1>
                <div style={boxStyle}>
                    {number} is {isOdd ? 'Odd' : 'Even'}
                </div>
                <br />
                <button onClick={this.incNum}>Next Number</button>
            </div>
        )
    }

 }

 export default OddEvenColorBox;