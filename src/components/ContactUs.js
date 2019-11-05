import React, { Component } from 'react'

export default class ContactUs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             email: '',
             subject: '',
             message: ''

        }
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        console.log(this.state.name)
        return (
            <div>
                <div>

                </div>
                <form>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='text'
                        name='email'
                        placeholder='Email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='text'
                        name='subject'
                        placeholder='Subject'
                        value={this.state.subject}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='text'
                        name='message'
                        placeholder='Type your message here:'
                        value={this.state.message}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}
