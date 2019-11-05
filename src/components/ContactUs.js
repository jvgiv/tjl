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
        
        return (
            <div className='form-container'>
                <div className='contact'>
                    <div>
                        <h3>Tracy Welch</h3>
                        <p>tracy@tjluxurygroup.com</p>
                        <p>917-913-5073</p>
                    </div>
                    <div>
                        <h3>James Fletcher</h3>
                        <p>james@tjluxurygroup.com</p>
                        <p>917-596-0701</p>
                    </div>
                </div>
                <form className='form'>
                    <input
                        className='form-input'
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        className='form-input' 
                        type='text'
                        name='email'
                        placeholder='Email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input 
                        className='form-input'
                        type='text'
                        name='subject'
                        placeholder='Subject'
                        value={this.state.subject}
                        onChange={this.handleChange}
                    />
                    <input 
                        className='form-input-message'
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
