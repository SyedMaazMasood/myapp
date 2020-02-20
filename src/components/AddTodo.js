import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form style={{ display: 'flex' }}>
                <input
                    type="text"
                    style={{ flex: '10', padding: '5px' }}
                    name="title"
                    placeholder="Search..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Search"
                    className="btn"
                    style={{ flex: '1' }}
                />
            </form>
        )
    }
}

export default AddTodo