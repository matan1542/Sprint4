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
  componentDidMount() {
    let color = this.props.val
    if (!color) return
    if (color.charAt() === '#') {
      var r = parseInt(color.substring(1, 3), 16),
        g = parseInt(color.substring(3, 5), 16),
        b = parseInt(color.substring(5, 7), 16);
      const colorRgb = { r, g, b, a: 1 }
      this.setState({ ...this.state, color: colorRgb })
    } else if (color !== 'inherit') {
      color = color.split('(')[1].split(')')[0].split(',')
      const colorRgb = { r: color[0], g: color[1], b: color[2], a: color[3] }
      this.setState({ ...this.state, color: colorRgb })
    } else {
      const colorRgb = { r: '255', g: '255', b: '255', a: '0' }
      this.setState({ ...this.state, color: colorRgb })
    }
  }
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
    let label = ''
    switch(this.props.att) {
      case 'color': 
        label = 'color' 
        break
      case 'backgroundColor': 
        label = 'Background Color' 
        break
      case 'borderColor': 
        label ='Border Color'
        break
      default: label = 'err'
    }
    return (
      <div className="color-picker flex space-between mb-3" >
        <label>{label}</label>
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