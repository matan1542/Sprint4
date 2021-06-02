import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { Component } from 'react'


export class WapForm extends Component {
    state = {
        newMail: {
            name: '',
            email: '',
            phoneNumber: '',
            subject: '',
            msg: ''
        }
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = target.name === 'phoneNumber' ? +target.value : target.value
        this.setState(prevState => ({
            ...prevState,
            newMail: {
                ...prevState.newMail,
                [field]: value
            }
        }))
    }

    onSubmit = (ev) => {
        ev.preventDefault()
        this.setState({
            newMail: {
                name: '',
                email: '',
                phoneNumber: '',
                subject: '',
                msg: ''
            }
        })
    }

    render() {
        const { onSubmit } = this.props
        return (
            <form className="wap-el flex column" onSubmit={onSubmit}>
                <TextField required id="outlined-basic" label="Your name" name="name" placeholder="John Smith" onChange={this.handleChange} />
                <TextField required type="email" id="outlined-basic" label="Your Email" name="email" placeholder="Johnsmith@mail.com" onChange={this.handleChange} />
                <TextField required type="number" id="outlined-basic" label="Your phone number" name="phoneNumber" placeholder="0501234567" onChange={this.handleChange} />
                <TextField required id="outlined-basic" label="Subject" name="subject" onChange={this.handleChange} />
                <TextField required id="outlined-multiline-static" label="Your message" name="msg" multiline rows={5} onChange={this.handleChange} />
                <Button variant="outlined" color="primary" type="submit">Send!</Button>
            </form>
        )
    }

}
