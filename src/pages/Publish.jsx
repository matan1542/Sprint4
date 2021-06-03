import { EditorWapSections } from "../cmps/EditorCmps/EditorWapSections";
import { Component } from "react";
import { connect } from "react-redux";
import { loadWaps } from "../store/actions/wap.actions.js";
import { Loader } from "../cmps/Loader";
export class _Publish extends Component {
    state = {
        currWap: null,
    };
    async componentDidMount() {
        if (!this.props.waps) await this.props.loadWaps()
        await this.setCurrWap();
    }

    setCurrWap = async () => {
        const { wapId } = this.props.match.params
        let currWap = this.props.waps.find(wap => {
            return wap._id === wapId
        })
        currWap = { ...currWap }
        currWap.isEdit = false
        await this.setState({ currWap })
    }

    render() {
        const { currWap } = this.state;
        if (!currWap) return <Loader />
        return (
            <section className="app-publish flex space-between">
                <div className="editor-wap">
                    <EditorWapSections
                        wap={currWap}
                        isEdit={false}
                    />
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        waps: state.wapModule.waps,
    };
}

const mapDispatchToProps = {
    loadWaps
}


export const Publish = connect(mapStateToProps, mapDispatchToProps)(_Publish);
