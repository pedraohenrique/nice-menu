import { useCallback, useEffect } from 'react';

function useEscapeKeyPress(handleClose) {
  const handleEscape = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    document.addEventListener('keyup', handleEscape, false);

    return () => {
      document.removeEventListener('keyup', handleEscape, false);
    };
  }, [handleEscape]);
}

export default useEscapeKeyPress;
