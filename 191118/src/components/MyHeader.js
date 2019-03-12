import React, { Component } from "react";
import './../App.css';

class MyHeader extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);

        this.state = {
            bgColorActive: this.props.boolean,
            apiresponse: null,
        };
    this.changeBgColor = this.changeBgColor.bind(this)
    };

    changeBgColor() {
        this.setState({ bgColorActive: true })
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos/")
            .then(response => response.json())
            .then(res => this.setState({apiresponse: res}))
    }

    render() {
        console.log(this.state.apiresponse);
        const { classHomeTitle, title, bgColor } = this.props
        return (
            <div>
                <header className="App-header"
                    style={{
                        backgroundColor: this.state.bgColorActive ? bgColor : 'green',
                        color: 'black',
                    }}
                >
                    <h3 className={classHomeTitle}>
                        {title}
                    </h3>
                </header>
                <button onClick={this.changeBgColor}>Change</button>
            </div>
        );
    };

};

export default MyHeader;