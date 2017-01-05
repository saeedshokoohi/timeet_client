export const MOBILE = (typeof window !== 'undefined') ? (window.screen.availWidth < 800) : true;
//export const API_BASE_URL: string = `http://${HOST}:${PORT}`;
export const API_BASE_URL: string = `http://${HOST}:8080`;
export const API_URL_COMPANY_BY_KEY_URL: string = API_BASE_URL+'/api/client/get-company-info-by-key-url';
export const API_URL_ROOT_CATEGORIES_BY_KEY_URL: string = API_BASE_URL+'/api/client/get-root-categories-by-key-url';
export const API_URL_CATEGORIES_BY_PARENT_ID: string = API_BASE_URL+'/api/client/get-categories-by-parent';
export const API_URL_SERVICES_BY_CATEGORY_ID: string = API_BASE_URL+'/api/client/get-service-item-by-category';
export const API_URL_SERVICE_DETAIL_BY_SERVICE_ID: string = API_BASE_URL+'/api/client/get-service-item-by-id';
