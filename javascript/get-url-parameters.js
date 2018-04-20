(function () {
    'use strict';

    function getUrlParam(sUrl, sKey) {
        const result = {};
        const reg = /([^?&$=#]+)=([^?&$=#]+)/g;
        sUrl.replace(reg, (item, key, value) => {
            if (result[key]) {
                result[key] = [].concat(result[key], value);
            } else {
                result[key] = value;
            }
        });
        return sKey && sKey !== '' ? result[sKey] || '' : result;
    }

    const url = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe';

    console.log(getUrlParam(url, 'key'));
})();