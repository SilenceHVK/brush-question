(function () {
    'use strict';

    function namespace(oNamespace, sPackage) {
        const nameSpaceArr = sPackage.split('.');
        let tempNameSpace = oNamespace;
        for (let key of nameSpaceArr) {
            if (!(tempNameSpace[key] instanceof Object)) {
                tempNameSpace[key] = {};
            }
            tempNameSpace = tempNameSpace[key];
        }
        return oNamespace;
    };

    console.log(namespace({ a: { test: 1, b: 2 } }, 'a.b.c.d'));
})();