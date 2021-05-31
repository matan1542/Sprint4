import React, { Component } from 'react';
import { CirclePicker } from 'react-color';

import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';

export class EditColor extends (Component) {
  state = {
    color: '',
    showColorPicker: false
  }
  componentDidUpdate(prevProps) {
    if (prevProps.currCmp !== this.props.currCmp) {
      this.setState({ showColorPicker: false })
    }
  }

  toggleColorPicker = () => {
    this.setState(prevState => ({ showColorPicker: !prevState.showColorPicker }))
  }

  handleColorChange = async (color) => {
    const { currCmp, onUpdateCurrCmp, att} = this.props
    const { r, g, b, a } = color.rgb
    const value = `rgba(${r},${g},${b},${a})`
    const cmp = {...currCmp,info:{...currCmp.info,style:{...currCmp.info.style, [att]:`${value}`}}}
    await onUpdateCurrCmp(cmp)
  
  }

  render() {
    const { showColorPicker } = this.state;
    return (
      <div className='flex space-between mb-2'>
        <label>{this.props.att === 'color' ? 'Color' : 'Background Color'}</label>
        
        <button variant="contained" 
          style={{ backgroundColor: this.state.color, marginRight: '20px'}}
          title={this.props.name} 
          onClick={this.toggleColorPicker}>
        {this.props.att === 'color' ? <FormatColorTextIcon/> : <FormatColorFillIcon/>}
        </button>
        
        {showColorPicker &&
          <React.Fragment>
            <div className='colorpicker-cover' onClick={this.toggleColorPicker} />
            <CirclePicker color={this.props.val} onChange={this.handleColorChange} />
          </React.Fragment>}
      </div>
    )
  }
}