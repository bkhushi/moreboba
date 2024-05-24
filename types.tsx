export type SideNavItem = {
    title: string;
    path: string;
};

export type MenuItemWithSubMenuProps = {
    item: SideNavItem;
    toggleOpen: () => void;
};

export type MenuCard = {
    image: string;
    name: string;
    price: number;
}