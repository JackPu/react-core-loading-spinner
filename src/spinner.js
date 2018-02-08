/** 加载条组件
 * 支持自定义文案，加载动画，和样式
 * 默认提供 Material , gif加载样式
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Gif from './gif';


const css = require('style-loader!css-loader!./style.css');

class Spinner extends Component {
  render() {
    const {
      size,
      show,
      type,
      color,
      children,
    } = this.props;

    if (!show) {
      return <span />;
    }
    const styleObject = Object.assign({}, this.props.style);
    if (size) {
      styleObject.fontSize = size;
    }
    let loading = (
      <div className="svg-loader" style={styleObject}>
        <svg width="1em" height="1em" >
          <circle style={{ stroke: color }} cx="0.5em" cy="0.5em" r="0.45em" />
        </svg>
      </div>
    );
    if (type !== 'svg') {
      loading = <Gif size={size} />;
    }
    if (children) {
      loading = children;
    }
    // 返回行内的加载内容
    if (this.props.display === 'inline') {
      return loading;
    }
    return (
      <div className="react-loading-spinner" >
        <div className="loading-inner">
          {loading}
          <div className="alert-text">{this.props.text}</div>
        </div>
      </div>
    );
  }
}

Spinner.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string,
  show: PropTypes.bool,
  size: PropTypes.string,
  display: PropTypes.string,
};

Spinner.defaultProps = {
  type: 'svg',
  style: {},
  color: '#9b59b6',
  text: 'Loading...',
  show: false,
  size: '24px',
  display: 'block',
};

export default Spinner;
