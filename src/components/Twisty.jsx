import React from "react";
import Radium from "radium";
import { css, PropTypes } from "js-util/react";


/**
 * A triangular bullet that toggles to express
 * an "open" or "closed" state.
 */
@Radium
export default class Twisty extends React.Component {
  styles() {
    let { width, color, opacity, isOpen, isAnimated, margin } = this.props;
    const narrow = Math.round(width * 0.666666)
    if (opacity < 0) { opacity = 0; }
    if (opacity > 1) { opacity = 1; }

    return {
      base: {
        display: "inline-block",
        width: 0,
        height: 0,
        opacity: opacity,
        borderTop: `${ narrow }px solid transparent`,
        borderBottom: `${ narrow }px solid transparent`,
        borderLeft: `${ width }px solid ${ color }`,
        transform: `rotate(${ isOpen ? "90deg" : "0deg" })`,
        transition: isAnimated ? "transform 0.15s" : "none",
        cursor: "pointer",
        margin: margin
      }
    };
  }

  render() {
    const styles = this.styles();
    return (
      <div style={ styles.base } />
    );
  }
}

// -----------------------------------------------------------------------------
Twisty.propTypes = {
  isAnimated: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  width: PropTypes.number,
  color: PropTypes.string,
  opacity: PropTypes.number,
  margin: PropTypes.numberOrString
};
Twisty.defaultProps = {
  isAnimated: true,
  isOpen: false,
  width: 8,
  color: "#000",
  opacity: 0.3,
  margin: 0
};