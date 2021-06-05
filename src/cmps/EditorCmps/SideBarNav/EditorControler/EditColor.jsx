//   render() {
//     const { showColorPicker } = this.state;
//     return (
//       <div className='flex space-between mb-2'>
//         <label>{this.props.att === 'color' ? 'Color' : 'Background Color'}</label>

//         <button variant="contained" 
//           style={{ backgroundColor: this.state.color, marginRight: '20px'}}
//           title={this.props.name} 
//           onClick={this.toggleColorPicker}>
//         {this.props.att === 'color' ? <FormatColorTextIcon/> : <FormatColorFillIcon/>}
//         </button>

//         {showColorPicker &&
//           <React.Fragment>
//             <div className='colorpicker-cover' style={zIndex="1"}/>
//             <ChromePicker color={this.props.val} onChange={this.handleColorChange} onClick={this.toggleColorPicker}/>
//           </React.Fragment>}
//       </div>
//     )
//   }
// }

import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

export class EditColor extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = async (color) => {
    const { currCmp, onUpdateCurrCmp, att } = this.props
    this.setState({ color: color.rgb })
    const { r, g, b, a } = color.rgb
    const value = `rgba(${r},${g},${b},${a})`
    const cmp = { ...currCmp, info: { ...currCmp.info, style: { ...currCmp.info.style, [att]: `${value}` } } }
    await onUpdateCurrCmp(cmp)

  };

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });
    return (
      <div className="color-picker flex space-between mb-3" >
        <label>{this.props.att === 'color' ? 'Color' : 'Background Color'}</label>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        { this.state.displayColorPicker ? <div style={styles.popover}>
          <div style={styles.cover} onClick={this.handleClose} />
          <SketchPicker color={this.state.color} onChange={this.handleChange} />
        </div> : null}

      </div>
    )
  }
}