import React, { Component } from 'react'
import { connect } from "react-redux";

import { loadWaps, setWapToEdit } from "../store/actions/wap.actions.js";


class _Templates extends Component {
    async componentDidMount() {
        if (!this.props.waps) await this.props.loadWaps()
    }

    setWapToEditor = async (wapId) => {
        await this.props.setWapToEdit(wapId)
        this.props.history.push('/editor')
    }

    render() {
        const { waps } = this.props
        if (!waps) return <div>Loading...</div>
        return (
            <section className="template-section">

                {waps.map((wap, idx) => <img className="template-img" key={idx} onClick={() => this.setWapToEditor(wap)} alt="" src={wap.imgUrl}></img>)}
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        waps: state.wapModule.waps,
    };
}

const mapDispatchToProps = {
    loadWaps,
    setWapToEdit
};

export const Templates = connect(mapStateToProps, mapDispatchToProps)(_Templates)