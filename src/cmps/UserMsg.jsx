
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setMsg } from '../store/actions/user.msg.actions.js'

class _UserMsg extends Component {
    render() {
        return (
            <>
                {this.props.msg &&
                    <div className="user-msg">
                        {this.props.msg}
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
