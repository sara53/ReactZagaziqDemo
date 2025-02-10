import { Component } from "react";

export class Counter extends Component {


    state = {
        count: 0,
        title: "Counter Component"
    }
    constructor() {
        super();
        console.log( "1-ctor" )

    }
    // after initial Render Only once
    componentDidMount() {
        console.log(
            "Connection To API"
        )
    }

    componentDidUpdate() {
        // after render Change State
        console.log( "Update after each state change" )
    }
    componentWillUnmount() {
        // remove component
        // logic remove component
    }
    increase = () => {

        // Rerender
        this.setState( {
            count: this.state.count + 1
        } )

    }
    decrease = () => {
        this.setState( {
            count: this.state.count - 1
        } )

    }

    changeTitle = () => {
        this.setState( {
            title: "new Title"
        } )

    }
    // react
    render() {
        console.log( "2-render" )
        return (
            <div className="bg-light p-5">
                <h1>{this.state.title}</h1>
                <p className="fs-1 m-2 text-muted">Count : {this.state.count}</p>
                <button
                    onClick={this.increase}

                    className="btn btn-success m-3">increase</button>
                <button onClick={this.decrease} className="btn btn-danger m-3">decrease</button>
                <button onClick={this.changeTitle} className="btn btn-dark m-3">Change Title</button>
            </div>
        )
    }
}
