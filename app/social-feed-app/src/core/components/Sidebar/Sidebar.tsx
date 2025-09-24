import { SidebarProps } from "../../../types/types";
import { SidebarView } from "../../../ux/views/components/Sidebar/Sidebar.view";


export const Sidebar = ({ categories }: SidebarProps) => {
  return <SidebarView categories={categories}/>;
};