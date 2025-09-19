import { SidebarProps } from "../../types/types";
import { SidebarView } from "./Sidebar.view";


export const Sidebar = ({ categories }: SidebarProps) => {
  return <SidebarView categories={categories}/>;
};