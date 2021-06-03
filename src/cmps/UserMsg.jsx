
import React, { Component } from 'react'
import { connect } from 'react-redux'

class _UserMsg extends Component {
    render() {
        return (
            <>
                {this.props.msg &&
                    <div className="user-msg">
                      <p>{this.props.msg}</p>  
                    </div>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    msg: state.userMsgModule.msg,
    type: state.userMsgModule.type
})

export const UserMsg = connect(mapStateToProps)(_UserMsg)
