import React, { Component } from 'react'
import { connect } from "react-redux";
import { Loader } from '../cmps/Loader.jsx';


import { loadWaps, setWapToEdit } from "../store/actions/wap.actions.js";
import {TemplatePreview} from "../cmps/TemplatePreview"


class _Templates extends Component {
    async componentDidMount() {
        await this.props.loadWaps()
    }

    setWapToEditor = async (wapId) => {
        await this.props.setWapToEdit(wapId)
        this.props.history.push('/editor')
    }

    render() {
        const { waps } = this.props
        if (!waps) return <Loader />
        return (
            <section className="template-section">
                <div className="template-list">
                    {waps.map((wap, idx) =>{
                        return(
                            <TemplatePreview key={idx} wap={wap} setWapToEditor={this.setWapToEditor}/>
                        )
                    })}
                </div>
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