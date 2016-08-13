import React from 'react';
import Radium from 'radium';
import tapOrClick from 'react-tap-or-click';

export const NavigationTrigger = ({
  isOpen = false,
  onClick,
}) => {
  const defaultLineStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'inherit',
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden',
    transition: 'transform 0.5s, width 0.5s, top 0.3s',
  };

  const styles = {
    container: {
      WebkitTapHighlightColor: 'transparent',
      position: 'fixed',
      zIndex: 3,
      left: '5%',
      top: 20,
      width: 54,
      height: 54,
      cursor: 'pointer',
      transition: 'transform 500ms',
      backgroundColor: '#6699CC',
      borderRadius: '50%',
      whiteSpace: 'nowrap',
      textIndent: '100%',
      overflow: 'hidden',

      '@media (min-width: 1170px)': {
        top: 40,
      }
    },

    topLine: {
      ...defaultLineStyle,
      transformOrigin: 'right top',
      transform: 'translateY(-6px)',
    },

    middleLine: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      bottom: 'auto',
      right: 'auto',
      width: 22,
      height: 2,
      backgroundColor: '#fff',
      transform: 'translateX(-50%) translateY(-50%)',
    },

    bottomLine: {
      ...defaultLineStyle,
      transformOrigin: 'right bottom',
      transform: 'translateY(6px)',
    },

    svg: {
      position: 'absolute',
      top: 0,
      left: 0,
    },

    circle: {
      fill: 'transparent',
      stroke: '#fff',
      strokeWidth: 1,
      strokeDasharray: '157 157',
      strokeDashoffset: 157,
      transition: 'stroke-dashoffset 0.4s 0s',
    },
  };

  if ( isOpen ) {
    styles.container.transform = 'rotate(180deg)';

    const newLineStyles = {
      width: '50%',
      transition: 'transform 0.5s, width 0.5s',
    };

    styles.topLine = {
      ...styles.topLine,
      ...newLineStyles,
      transform: 'rotate(45deg)',
    };

    styles.bottomLine = {
      ...styles.topLine,
      ...newLineStyles,
      transform: 'rotate(-45deg)',
    };

    styles.circle = {
      ...styles.circle,
      transition: 'stroke-dashoffset 0.4s 0.3s',
      strokeDashoffset: 0,
    };
  }

  return (
    <a style={styles.container} {...tapOrClick(onClick)}>
      Menu
      <span style={styles.middleLine}>
        <span style={styles.topLine}></span>
        <span style={styles.bottomLine}></span>
      </span>

      <svg style={styles.svg} x="0px" y="0px" width="54px" height="54px" viewBox="0 0 54 54">
        <circle style={styles.circle} cx="27" cy="27" r="25"></circle>
      </svg>
    </a>
  );
};

export default Radium( NavigationTrigger );

