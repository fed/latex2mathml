const MathJax = require('mathjax-node');

MathJax.start();

const settings = {
    format: 'TeX',
    mml: true
};

function toPromise(latex) {
    return MathJax.typeset({ ...settings, math: latex }).then(data => data.mml);
}

function toCallback(latex, callback) {
    MathJax.typeset({ ...settings, math: latex }, data => {
        if (data.errors) {
            callback(data.errors);
        } else {
            callback(data.mml);
        }
    });
}

module.exports = {
    toPromise,
    toCallback
};
