import { Link } from 'react-router-dom';
import { sidebar } from '../utils/data';
const SideBar = () => {
  return (
    <div>
      {sidebar.map((section) => (
        <div key={section.category}>
          <h3 className="my-2 font-semibold">{section.category}</h3>
          <ul className="flex flex-col gap-2">
            {section.items.map((item) => (
              <li key={item.id}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
