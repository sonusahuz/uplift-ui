import { X } from 'lucide-react';
import './Drawer.css';

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  width?: string;
  title: string;
  content: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  setIsOpen,
  width = '250px',
  title = 'Drawer Title',
  content,
}) => {
  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`} style={{ width: width }}>
      <div className="drawer-content">
        <div className="drawer-slider">
          <h2 className="drawer-title">{title}</h2>
          <X size={25} strokeWidth={1.5} onClick={() => setIsOpen(false)}  className='drawer-close'/>
        </div>
        <ul className="drawer-main" onClick={() => setIsOpen(false)}>
          {content}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
