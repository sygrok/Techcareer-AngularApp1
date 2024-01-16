export interface User {
  isLogin: boolean;
  logo: {
    logoName: string;
    logoFontAwesome: string;
    logoPicture: string;
    logoLink: string;
    logoTitle: string;
  };
  navbar: Array<any>;
  search: {
    name: string;
    placeholder: string;
    type: string;
    style: string;
  };
}
