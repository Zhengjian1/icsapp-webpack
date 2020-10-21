import { Api } from '../hosts/host-api';
import OptionFactory from '../params/option-factory';
import BaseRequest from 'sven-dev-tools/http/request/base-request';

export default function ApiRequest() {}

ApiRequest.prototype = new BaseRequest();

ApiRequest.prototype.host = function () {
    return Api();
};

//实现自己的方法
ApiRequest.prototype.postBody = function (url, params, body, filter, control) {
    return this.post(
        url,
        params,
        new OptionFactory().simple(body, 'application/json;', filter, control),
        filter,
        control,
    );
};
