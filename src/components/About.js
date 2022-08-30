import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div>
                <div className='container my-3' style={{ display: "flex", justifyContent: 'center' }}>
                    <h1>NewsMonkey</h1>
                </div>
                <div className="container my-3">
                    <p><strong>NewsMonekey</strong> is a goto platform if you are one who need all latest news at one place. We show you news from all over the domains.</p>
                    <p>This is a react component based app which is made by our super talented developer <strong>Mr. Aman Gupta</strong> who is currently a sophomore at one of the top notch universities of India namely <strong>Delhi Technological University(Formerly known as Delhi College of Engineering)</strong>.</p>
                </div>
            </div>
        )
    }
}

export default About