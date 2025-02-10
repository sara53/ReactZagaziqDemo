// class component
import { Component } from 'react'
export class Header extends Component {


    constructor() {
        super();


    }

    componentTitle = 'Python Track'
    btnText = "show More"
    render() {
        // const { trackDetails: { name, supervisorName } } = this.props
        const { trackDetails } = this.props


        const { bgColor } = trackDetails
        return (
            <div className={`p-4 ${bgColor} ${bgColor == 'bg-dark' ? "text-light" : "text-dark"}`}>
                <h1 >{trackDetails?.name}</h1>
                <p><mark>{trackDetails?.supervisorName || 'default Name'}</mark>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ullam esse? Quam, animi odio. Mollitia libero officia, dolore sapiente eaque vero enim nostrum possimus voluptatum repudiandae. Excepturi id ab hic.</p>
                {this.props.children}
                <button className={`btn ${bgColor == 'bg-dark' ? "btn-info" : "btn-dark"}`}>{this.btnText}</button>
            </div>
        )
    }
}
// jsx -- js