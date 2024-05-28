export type SideNavItem = {
    title: string;
    path: string;
};

export type MenuItemWithSubMenuProps = {
    item: SideNavItem;
    toggleOpen: () => void;
};
