import React from 'react';
import IconButton from './IconButton';
import useEscapeKeyPress from '../hooks/useEscapeKeyPress';
import { closeButton } from '../images/svgs';

const mainMenuItems = ['Home', 'Shop', 'About us'];
const secondaryMenuItems = [
  'Contact',
  'Track your order',
  'Return policy',
  'Shipping policy',
];

function Menu({ reference, onCloseClick, className }) {
  useEscapeKeyPress(onCloseClick);

  const renderMenuItems = (list, type) => (
    <ul className={`menu-${type}`}>
      {list.map((item, id) => (
        <li className={`menu-${type}-item`} key={id}>
          {/* eslint-disable-next-line */}
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`menu ${className}`}>
      <div className="menu-topbar">
        <div className="menu-title" ref={reference}>
          <h3>Menu</h3>
        </div>
        <IconButton onClick={onCloseClick}>{closeButton}</IconButton>
      </div>
      <div className="menu-body">
        <div>{renderMenuItems(mainMenuItems, 'primary')}</div>
        <div>{renderMenuItems(secondaryMenuItems, 'secondary')}</div>
      </div>
    </div>
  );
}

export default Menu;
