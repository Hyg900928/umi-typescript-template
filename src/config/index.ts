// axios 相关配置
export const AXIOS_DEFAULT_CONFIG = {
  timeout: 20000,
  withCredentials: true,
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:9001'
      : 'https://api.heyungao.com'
};
console.log(process.env.NODE_ENV);
// 项目相关配置
export const PROJECT_DEFAULT_CONFIG = {
  companyName: '炫踪网络股份有限公司 '
};

// 项目默认设置
export const SETTING_DEFAULT_CONFIG = {
  navTheme: 'dark',
  layout: 'sideMenu',
  contentWidth: 'Fluid',
  fixedHeader: false,
  autoHideHeader: false,
  fixSideBar: false
};
