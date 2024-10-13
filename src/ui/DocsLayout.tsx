import { Outlet, useLocation } from 'react-router-dom';
import SideBar from './SideBar';
import NextPrevButton from './NextPrevButton';
import { flattenSidebar } from '../utils/utils';
import { sidebar } from '../utils/data';

const DocsLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const flatItems = flattenSidebar(sidebar);

  const currentIndex = flatItems.findIndex((item) => item.path === currentPath);
  const prevItem = flatItems[currentIndex - 1];
  const nextItem = flatItems[currentIndex + 1];

  return (
    <div className="flex items-start justify-around">
      <div className="hidden p-3 lg:block">
        <SideBar />
      </div>
      <div className="lg:w-[70%] w-full">
        <Outlet />
        <div className="px-4 my-8">
          {currentIndex !== -1 && (
            <NextPrevButton
              prev={prevItem ? prevItem.name : ''}
              next={nextItem ? nextItem.name : ''}
              prevPath={prevItem ? prevItem.path : ''}
              nextPath={nextItem ? nextItem.path : ''}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DocsLayout;
