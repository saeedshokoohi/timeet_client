export const MOBILE = (typeof window !== 'undefined') ? (window.screen.availWidth < 800) : true;
//export const API_BASE_URL: string = `http://${HOST}:${PORT}`;
export const API_BASE_URL: string = `http://${HOST}:8080`;
export const API_URL_COMPANY_BY_KEY_URL: string = API_BASE_URL+'/api/client/get-company-info-by-key-url';
