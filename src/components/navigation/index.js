import React from 'react';

export default ({
  isOpen = false,
}) => {
  const styles = {
    container: {
      position: 'fixed',
      zIndex: 1,
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundColor: '#6699CC',
      visibility: 'hidden',
      transition: 'visibility 0s 0.7s',
    },

    inner: {
      height: '100%',
      overflowY: 'auto',
      padding: '40px 5% 40px calc( 5% + 80px )',
      transform: 'translateZ(0) translateX(-50%)',
      backfaceVisibility: 'hidden',
      transition: 'transform 0.7s',
      transitionTimingFunction: 'cubic-bezier(0.86, 0.01, 0.77, 0.78)',
    },
  };

  if ( isOpen ) {
    styles.container = {
      ...styles.container,
      visibility: 'visible',
      transition: 'visibility 0s 0s',
    };

    styles.inner = {
      ...styles.inner,
      transform: 'translateX(0)',
      transition: 'transform: 0.5s',
      transitionTimingFunction: 'cubic-bezier(0.82, 0.01, 0.77, 0.78)',
    };
  }

  return (
    <section style={styles.container}>
      <div style={styles.inner}>
        HELLO
      </div>
    </section>
  );
};

