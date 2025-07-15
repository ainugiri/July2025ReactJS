// variable
// variable balance = 1000
// balance = balance - 100
// update -> setState(class) or useState(function)
// Re-rendering.


// posting a story in facebook
// initial like - 0
// event -> some clicks like button
// update the memory -> with the help of setState or useState
// re-rendering

// dynamic data - state of application
// value in the memory -> update -> setState / useState

import React, { Component } from 'react'
class StateMgmt extends Component {
    constructor(props) {
        super(props);
        this.state = { likeCount : 0 };
    }
increment = () => {
    this.setState({ likeCount : this.state.likeCount + 1});
}
    render() {
        return(
            <div>
                <button onClick={this.increment}>👍</button> <p>{this.state.likeCount}</p>
            </div>
        )
    }
}

export default StateMgmt;