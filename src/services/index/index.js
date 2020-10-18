import request from '../../utils/request.js';
import { API_NAME } from './apiName';

const fetchIndexData = async (params) => request.get(API_NAME.APP_INDEX, params);

export { fetchIndexData };
