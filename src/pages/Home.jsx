import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { loadWaps, loadCmps } from "../store/actions/wap.actions.js"

class _Home extends Component {
  async componentDidMount() {
    try {
      if (!this.props.waps) await this.props.loadWaps()
      if (!this.props.cmps) await this.props.loadCmps()
    } catch (err) {
      console.log(err)
      throw new Error(err)
    }
  }

  render() {
    return (
      <div className="home flex column align-center justify-center">
        <div className="home-hero flex column align-center">
          <h2>Welcome to</h2>
          <h1>WeBuild</h1>
          <Link to="/editor"><button className="btn btn-start w-75 fs28">Click Start to Build your site</button></Link>
        </div>
        {/* <div className="future-card flex"> <h2>Future 1</h2><h2>Img</h2></div>
      <div className="future-card flex row-reverse"> <h2>Future 2</h2><h2>Img</h2></div>
      <div className="future-card flex"> <h2>Future 3</h2><h2>Img</h2></div> */}
      </div>
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
  loadCmps
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home)