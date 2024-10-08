import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const DocsLayout = () => {
  return (
    <div className="flex items-start justify-around">
      <div className="hidden p-3 lg:block">
        <SideBar />
      </div>
      <div className="lg:w-[70%] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DocsLayout;
