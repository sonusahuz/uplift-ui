// Define the type for individual items
type SidebarItem = {
  id: number;
  name: string;
  path: string;
};

// Define the type for a section (category)
type SidebarSection = {
  category: string;
  items: SidebarItem[];
};

// The function to flatten the sidebar
export const flattenSidebar = (sidebar: SidebarSection[]): SidebarItem[] => {
  return sidebar.reduce((acc: SidebarItem[], section: SidebarSection) => {
    return acc.concat(section.items);
  }, []);
};
