import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Todoitem extends Component {
    markComplete=()=>{
        console.log("hello")
    }
    render() {
        const {id, title} = this.props.todo;
        return (
            <div className="list-item">
                <span 
                className="CheckBox"
                onClick={this.props.markComplete}
                style= {{
                    background: this.props.todo.completed ? '' : 'none',
                    border: this.props.todo.completed ? 0 : '',
                }}></span>
                <p 
                    className="list-item-title"
                    onClick={this.props.markComplete}
                    style= {{
                        textDecoration: this.props.todo.completed ? 'none' : 'none',
                        opacity: this.props.todo.completed ? '0.5' : '1',
                    }}>
                    { title }
                </p>
                <span className="delete-btn"></span>
            </div>
        )
    }
}

//PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default Todoitem
