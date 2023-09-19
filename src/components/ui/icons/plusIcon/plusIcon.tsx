import { CSSProperties } from 'react';

const containerStyle: CSSProperties = {
  position: 'relative',
  width: '9px',
  height: '9px',
  backgroundColor: 'transparent',
};

const lineStyle: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '0',
  width: '100%',
  height: '1px',
  backgroundColor: 'rgb(107 114 128 / var(--tw-text-opacity))',
};

export const PlusIcon = () => {
  return (
    <div style={containerStyle}>
      <div style={{ ...lineStyle, transform: 'rotate(90deg)' }}></div>
      <div style={{ ...lineStyle }}></div>
    </div>
  );
};
