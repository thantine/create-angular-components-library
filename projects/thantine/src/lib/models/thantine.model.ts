export interface MenuItem {
  href: string;
  text: string;
}

export interface FooterColumn {
  title: string;
  menuItems: MenuItem[];
}

export interface LoginInfo {
  email: string;
  password: string;
  remembered: boolean;
}
