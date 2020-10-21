import BaseRequest from 'sven-dev-tools/http/request/base-request';
import { Local } from '../hosts/host-local';

export default function LocalRequest() {}

LocalRequest.prototype = new BaseRequest();

LocalRequest.prototype.host = function () {
    return Local();
};
