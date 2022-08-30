import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            // To centre any thing we use class this class of bootstrap ->text-center 
            // To centre any thing we use class this class of bootstrap ->text-center 
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Spinner