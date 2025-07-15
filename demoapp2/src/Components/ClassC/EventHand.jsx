import React, { Component } from 'react'

class EventHand extends Component
{
    constructor(props){
        super(props);
        this.state = { text : 'TEXTME',hoveredIndex:null, }
    }
    btnClick = () => {
        alert("Button Clicked")
        console.log("Button Clicked")
    }
    handleTextChange1 = (e) => {
        this.setState({text:e.target.value}); 
    }
    handleMouseOver = (index) => {
        this.setState({hoveredIndex: index})
        console.log("Hovered index value",this.state.hoveredIndex)
    }

    render(){
        const items = ['iPhone','Samsung','Nokia','Moto']
        return(
            <div>
                <input type="text" placeholder='Enter your name' value={this.state.text} onChange={this.handleTextChange1} />
                <button onClick={this.btnClick}>Click Me</button>
                <ul style= {{listStyle:'none', padding:0}}>
                 {items.map((item,index) => (
                    <li onMouseOver={()=>this.handleMouseOver(index)} 
                        style = {{fontWeight:this.state.hoveredIndex === index ? 'bold' : 'normal',padding:'5px', cursor:'pointer'}}
                        key={index}>{item}
                    </li>
                 ))}
                </ul>
            </div>
        )
    }
}
export default EventHand;