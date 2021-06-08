import { WapTxt } from "./WapTxt";
import { WapBtn } from "./WapBtn";
import { WapSection } from "./WapSection";
import { WapNav } from "./WapNav";
import { WapNavLink } from "./WapNavLink";
import { WapImg } from "./WapImg";
import { WapCard } from "./WapCards";

import { Component } from "react";
import { WapForm } from "./WapForm";
import { WapVideo } from "./WapVideo"
import { WapImgGallery } from "./WapImgGallery";
import { WapMap } from "./WapMap";
export class DynamicCmps extends Component {
  getCmp = () => {
    const {
      onCmpFocus,
      onUpdateCurrCmp,
      cmp,
      onCloneCmp,
      onDeleteCmp,
      idx,
      updateWap,
      wap,
      isEdit,
      respView
    } = this.props;
    switch (cmp.type) {
      case "wap-map":
        return (
          <WapMap  cmp={cmp}
          isEdit={isEdit}
          updateWap={updateWap}
          onCmpFocus={onCmpFocus}
          onCloneCmp={onCloneCmp}
          onDeleteCmp={onDeleteCmp}
          onUpdateCurrCmp={onUpdateCurrCmp}/>
        )
      case "wap-section":
        return (
          <WapSection
            cmp={cmp}
            wap={wap}
            isEdit={isEdit}
            updateWap={updateWap}
            onCmpFocus={onCmpFocus}
            onUpdateCurrCmp={onUpdateCurrCmp}
            onCloneCmp={onCloneCmp}
            onDeleteCmp={onDeleteCmp}
            idx={idx}
            respView={respView}/>
        )
      case 'wap-video':
        return (
          <WapVideo
            onCmpFocus={onCmpFocus}
            onDeleteCmp={onDeleteCmp}
            onCloneCmp={onCloneCmp}
            cmp={cmp}
            isEdit={isEdit}
          />
        )
      case "wap-nav":
        return (
          <WapNav
            cmp={cmp}
            wap={wap}
            isEdit={isEdit}
            updateWap={updateWap}
            onCloneCmp={onCloneCmp}
            onCmpFocus={onCmpFocus}
            onUpdateCurrCmp={onUpdateCurrCmp}
            onDeleteCmp={onDeleteCmp}
            idx={idx}
          />
        );
      case "wap-nav-link":
        return (
          <WapNavLink
            cmp={cmp}
            wap={wap}
            isEdit={isEdit}
            updateWap={updateWap}
            onCloneCmp={onCloneCmp}
            onCmpFocus={onCmpFocus}
            onDeleteCmp={onDeleteCmp}
            onUpdateCurrCmp={onUpdateCurrCmp}
          />
        );
      case "wap-card":
        return (
          <WapCard
            cmp={cmp}
            wap={wap}
            isEdit={isEdit}
            updateWap={updateWap}
            onCloneCmp={onCloneCmp}
            onCmpFocus={onCmpFocus}
            onUpdateCurrCmp={onUpdateCurrCmp}
            onDeleteCmp={onDeleteCmp}
            idx={idx}
          />
        );
      case "wap-text":
        // console.log('cmp.parentID:', cmp)
        return (
          <WapTxt
            cmp={cmp}
            isEdit={isEdit}
            wap={wap}
            updateWap={updateWap}
            onCmpFocus={onCmpFocus}
            onUpdateCurrCmp={onUpdateCurrCmp}
            onCloneCmp={onCloneCmp}
            onDeleteCmp={onDeleteCmp} />
        );
      case "wap-btn":
        return (
          <WapBtn
            cmp={cmp}
            wap={wap}
            isEdit={isEdit}
            updateWap={updateWap}
            onCloneCmp={onCloneCmp}
            onCmpFocus={onCmpFocus}
            onDeleteCmp={onDeleteCmp}
            onUpdateCurrCmp={onUpdateCurrCmp}
          />
        );
      case "wap-form":
        return <WapForm isEdit={wap.isEdit} />
      case "wap-img":
        return (
          <WapImg
            cmp={cmp}
            wap={wap}
            isEdit={isEdit}
            updateWap={updateWap}
            onCloneCmp={onCloneCmp}
            onCmpFocus={onCmpFocus}
            onDeleteCmp={onDeleteCmp}
            onUpdateCurrCmp={onUpdateCurrCmp}
          />
        );
      case "wap-gallery":
        return (
          <WapImgGallery cmp={cmp}
            wap={wap}
            isEdit={isEdit} 
            onCmpFocus={onCmpFocus}
            onCloneCmp={onCloneCmp}
            onDeleteCmp={onDeleteCmp} />
        );
      default:
        return null;
    }
  };
  render() {
    return this.getCmp();
  }
}
