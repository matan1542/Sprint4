import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadWaps, loadCmps } from "../store/actions/wap.actions.js";
import { Features } from "../cmps/Home/Features.jsx";
import Header from "../cmps/Home/Header.jsx";

class _Home extends Component {
  async componentDidMount() {
    try {
      if (!this.props.waps) await this.props.loadWaps();
      if (!this.props.cmps) await this.props.loadCmps();
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Features />
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    waps: state.wapModule.waps,
    cmps: state.wapModule.cmps,
  };
}

const mapDispatchToProps = {
  loadWaps,
  loadCmps,
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);
