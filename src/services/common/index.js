import request from '../../utils/request.js';
import { API_NAME } from './apiName';

// 请求home页的nav数据
const fetchHomeData = async (params) => request.get(API_NAME.APP_HOME, params);

// 请求demo页的nav数据
const fetchDemoData = async (params) => request.get(API_NAME.APP_DEMO, params);

export { fetchHomeData, fetchDemoData };
