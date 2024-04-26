interface MenuItem {
    title: string;
    path: string;
}

export const menuItems: MenuItem[] = [
    { title: 'home', path: '/' },
    { title: 'all collection', path: '/collection' },
    { title: 'about us', path: '/about-us' },
    { title: 'contacts', path: '/contacts' },
];
