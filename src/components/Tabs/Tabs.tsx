import React, { useState } from 'react';
import './Tabs.css';

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex space-x-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 border-b-2 ${
              activeTab === index ? 'border-blue-500' : 'border-transparent'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 mt-4 border border-gray-200 rounded-md">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
