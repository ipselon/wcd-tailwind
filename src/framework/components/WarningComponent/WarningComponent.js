import React from 'react';

const style = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

class WarningComponent extends React.Component {

  render () {
    const { message } = this.props;
    return (
      <div style={style}>
        <div><code>{message}</code></div>
      </div>
    );
  }
}

export default WarningComponent;
