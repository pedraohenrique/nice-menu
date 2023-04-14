import { useEffect, useRef, useState } from 'react';
import Menu from './Menu';
import IconButton from './IconButton';
import { menuButton } from '../images/svgs';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const menuToggleReference = useRef(null);

  useEffect(() => {
    if (menuToggleReference) {
      menuToggleReference.current.focus();
    }
  }, [showMenu]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-title">
          <h1>Page title</h1>
        </div>
        <IconButton
          reference={menuToggleReference}
          onClick={handleMenuClick}
          disabled={showMenu}
        >
          {menuButton}
        </IconButton>
      </nav>
      <Menu
        onCloseClick={handleMenuClick}
        className={`menu-${showMenu ? 'show' : 'hide'}`}
      />
    </>
  );
}

export default Navbar;
