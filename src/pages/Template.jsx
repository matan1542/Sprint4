import React, { Component } from "react";
import { connect } from "react-redux";
import { Loader } from "../cmps/Loader.jsx";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AddIcon from "@material-ui/icons/Add";

import { loadWaps, setWapToEdit } from "../store/actions/wap.actions.js";
import { TemplatePreview } from "../cmps/TemplatePreview";
import { Link } from "react-router-dom";

class _Templates extends Component {
  async componentDidMount() {
    await this.props.loadWaps();
  }

  setWapToEditor = async (wapId) => {
    await this.props.setWapToEdit(wapId);
    this.props.history.push("/editor");
  };

  render() {
    if (!this.props.waps) return <Loader />;
    const waps = this.props.waps.filter(wap => wap.isPublic === true);
    return (
      <section className="template-section">
        <h2 className="title-template">
          Select a template or create a site from scratch
        </h2>
        <div className="template-list">
          <Link
            className="decoration-none"
            style={{ color: "#fff" }}
            to={`/editor`}
          >
            <div className="template-preview" style={{ height: "100%" }}>
              <div className="template-preview-header">
                <MoreHorizIcon fontSize="large" style={{ color: "white" }} />
                <p className="template-preview-header-text">
                  Create new website
                </p>
              </div>
              <div className="scratch-template flex justify-center align-center">
                <AddIcon
                  style={{
                    color: "#0000007a",
                    fontSize: "100px",
                    marginBottom: "30px",
                  }}
                />
              </div>
            </div>
          </Link>
          {waps.map((wap, idx) => {
            return (
              <TemplatePreview
                key={idx}
                wap={wap}
                setWapToEditor={this.setWapToEditor}
              />
            );
          })}
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
  loadWaps,
  setWapToEdit,
};

export const Templates = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Templates);
