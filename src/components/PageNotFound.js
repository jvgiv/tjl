import React, { Component } from 'react'

export default class PageNotFound extends Component {

    redirect = () => {
        this.props.history.push("/")
    }
    render() {
        return (
            <div className="error-404">
                <h3 className="brand-h3">404 Error: Page Cannot Be Found</h3>
                <p className="error-p" onClick={this.redirect}>Click Here to go Home</p>
            </div>
        )
    }
}
