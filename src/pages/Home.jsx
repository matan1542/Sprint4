import React, { useEffect} from "react";
import { connect } from "react-redux";
import { loadWaps, loadCmps } from "../store/actions/wap.actions.js";
import { Features } from "../cmps/Home/Features.jsx";
import Header from "../cmps/Home/Header.jsx";

function _Home({waps,cmps,loadWaps,loadCmps}){
 
  useEffect(()=>{
   async function handleDidMount(){
    try {
          if (!waps) await loadWaps();
          if (!cmps) await loadCmps();
        } catch (err) {
          console.log(err);
          throw new Error(err);
        }
    }
    handleDidMount()
  })
  // async componentDidMount() {
  //   try {
  //     if (!this.props.waps) await this.props.loadWaps();
  //     if (!this.props.cmps) await this.props.loadCmps();
  //   } catch (err) {
  //     console.log(err);
  //     throw new Error(err);
  //   }
  // }

  
   
    return (
      <React.Fragment>
        <Header />
        <Features />
        {/* <Footer /> */}
      </React.Fragment>
    );
 
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
