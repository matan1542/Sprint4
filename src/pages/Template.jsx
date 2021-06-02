import React, { Component } from 'react'
import { connect } from "react-redux";

import { loadWaps } from "../store/actions/wap.actions.js";


class _Templates extends Component {
    async componentDidMount() {
        if (!this.props.waps) await this.props.loadWaps()
    }
    render() {
        const { waps } = this.props
        if (!waps) return <div>Loading...</div>
        return (
            <section className="tempalte-section">
                <h1>Templates page</h1>
                <section className="template-list">
                    {waps.map((wap, idx) => <img key={idx} alt="" src={wap.imgUrl}></img>)}
                </section>
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
};

export const Templates = connect(mapStateToProps, mapDispatchToProps)(_Templates)