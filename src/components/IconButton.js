import React from 'react';

function IconButton({ reference, onClick, children, ...props }) {
  return (
    <div className="icon-button">
      <button ref={reference} onClick={onClick} {...props}>
        {children}
      </button>
    </div>
  );
}

export default IconButton;
