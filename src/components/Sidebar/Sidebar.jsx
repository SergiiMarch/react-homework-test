import { useEffect } from 'react';
export default function Sidebar({ onClose }) {
  useEffect(() => {
    const hundleEsc = e => {
      if (e.code === 'Escape') {
        console.log('KEYDOUWN');
        onClose();
      }
    };

    document.addEventListener('keydown', hundleEsc);

    return () => {
      document.removeEventListener('keydown', hundleEsc);
    };
  }, [onClose]);

  return (
    <div>
      <button onClick={onClose}>Close</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti,
        provident eaque doloremque excepturi non tempore corporis reiciendis et
        iure, aut exercitationem, incidunt velit debitis alias. In veniam
        blanditiis numquam.
      </p>
    </div>
  );
}
