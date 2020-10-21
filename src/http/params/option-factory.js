export default function OptionFactory() {}

OptionFactory.prototype = {
    constructor: OptionFactory,

    completely: function (body, headers) {
        return {
            data: JSON.stringify(body),
            headers: headers,
        };
    },

    simple: function (body, ctype, filter, control) {
        return this.completely(body, {
            'Content-Type': ctype,
            filter: filter,
            control: control,
        });
    },
};
