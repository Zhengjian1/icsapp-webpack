(function(win, doc) {
    var docEl = doc.documentElement;
    function setRemUnit() {
        var docWidth = docEl.clientWidth;
        var rem = docWidth / 10;
        // 按照iphone X的高度定制最大宽度
        if (docWidth >= 812) {
            rem = 81.2;
        }
        docEl.style.fontSize = rem + 'px';
    }

    var resetRemUnit = null;

    win.addEventListener('resize', function() {
        clearTimeout(resetRemUnit);
        resetRemUnit = setTimeout(setRemUnit, 200);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(resetRemUnit);
            resetRemUnit = setTimeout(setRemUnit, 200);
        }
    }, false);

    setRemUnit();

    if (win.devicePixelRatio && win.devicePixelRatio >= 2) {
        var testEl = doc.createElement('div');
        var fakeBody = doc.createElement('body');

        testEl.style.border = '0.5px solid transparent';
        fakeBody.appendChild(testEl);
        docEl.appendChild(fakeBody);

        if (testEl.offsetHeight === 1) {
            docEl.classList.add('hairlines');
        }

        docEl.removeChild(fakeBody);
    }

    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 12 + 'px';
    } else {
        doc.addEventListener('DOMContentLoaded', function(e) {
            doc.body.style.fontSize = 12 + 'px';
        }, false);
    }
})(window, document);