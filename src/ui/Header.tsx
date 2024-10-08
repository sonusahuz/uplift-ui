import { Link } from 'react-router-dom';
import { Github, Menu, Search } from 'lucide-react';
import { useState } from 'react';
// import { Modal, Input, Drawer } from 'uplift-ui';
import Input from '../components/Input/Input';
import Drawer from '../components/Drawer/Drawer';
import { items } from '../utils/data';
import SideBar from './SideBar';
import Dialog from '../components/Dialog';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const results = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <header className="flex items-center justify-between px-4 py-4">
        <Link className="flex items-center justify-center" to="/">
          <span className="flex items-center justify-start gap-2 text-xl font-medium">
            <svg
              width="95"
              height="95"
              viewBox="0 0 95 95"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-auto text-teal-400"
            >
              <path d="M96 0V47L48 94H0V47L48 0H96Z"></path>
            </svg>
            <span className="font-medium ">Uplift UI</span>
          </span>
        </Link>
        <nav className="flex items-center justify-between gap-5">
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              onClick={() => setOpen(true)}
              className="px-4 py-1 border rounded-lg cursor-pointer hover:bg-gray-100 w-72"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
          </div>
          <div className="flex items-center gap-4">
            <Search
              size={23}
              strokeWidth={1.5}
              className="cursor-pointer md:hidden"
              onClick={() => setOpen(true)}
            />
            <Github size={23} strokeWidth={1.5} className="cursor-pointer " />
            <Menu
              className="cursor-pointer md:hidden "
              size={23}
              strokeWidth={1.5}
              onClick={() => setDrawerOpen(true)}
            />
          </div>
        </nav>
      </header>
      <Dialog
        isOpen={open}
        title="Search Components"
        onClose={() => setOpen(false)}
      >
        <div className="mt-5">
          <Input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <div className="mt-4">
            {query ? (
              results.length > 0 ? (
                results.map((item) => (
                  <div key={item.id} className="mb-2">
                    <Link
                      to={item.href}
                      className="text-blue-500 hover:underline"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))
              ) : (
                <div className="text-gray-500">No results found</div>
              )
            ) : (
              results.slice(0, 5).map((item) => (
                <div key={item.id} className="mb-2">
                  <Link
                    to={item.href}
                    className="text-blue-500 hover:underline"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </Dialog>
      <Drawer
        isOpen={drawerOpen}
        title="Uplift UI"
        setIsOpen={setDrawerOpen}
        width="220px"
        content={<SideBar />}
      />
    </div>
  );
};

export default Header;
