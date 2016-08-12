import React from 'react';

export default ({
  isOpen = false,
  onClick,
}) => {
  const defaultLineStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    transition: 'transform 0.5s, width 0.5s, top 0.3s',
    width: 22,
    height: 2,
    backgroundColor: '#33597F',
    left: '50%',
    top: '50%',
  };

  const styles = {
    container: {
      position: 'fixed',
      zIndex: 3,
      left: '5%',
      top: 20,
      width: 54,
      height: 54,
      cursor: 'pointer',
      transition: 'transform 500ms',
      backgroundColor: '#fff',
      borderRadius: '50%',
      whiteSpace: 'nowrap',
      textIndent: '100%',
      overflow: 'hidden',
    },

    line1: {
      ...defaultLineStyle,
      transformOrigin: 'right top',
      transform: 'translateX(-50%) translateY(-8px)',
    },

    line2: {
      ...defaultLineStyle,
      transform: 'translateX(-50%) translateY(-50%)',
    },

    line3: {
      ...defaultLineStyle,
      transformOrigin: 'right bottom',
      transform: 'translateX(-50%) translateY(6px)',
    },
  };

  if ( isOpen ) {
    styles.container.transform = 'rotate(180deg)';

    const newLineStyles = {
      // width: '50%',
      transition: 'transform 0.5s, width 0.5s',
    };

    styles.line1 = {
      ...styles.line1,
      ...newLineStyles,
      transform: 'rotate(45deg)',
    };

    styles.line3 = {
      ...styles.line1,
      ...newLineStyles,
      transform: 'rotate(-45deg)',
    };
  }

  return (
    <a style={styles.container} onClick={onClick}>
      Menu
      <span style={styles.line1}></span>
      <span style={styles.line2}></span>
      <span style={styles.line3}></span>

      <svg x="0px" y="0px" width="54px" height="54px" viewBox="0 0 54 54">
        <circle fill="transparent" stroke="#66788f" strokeWidth="1" cx="27" cy="27" r="25" strokeDasharray="157 157" strokeDashoffset="157"></circle>
      </svg>
    </a>
  );
};

