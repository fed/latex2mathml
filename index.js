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

const latex2mathml = {
    toPromise,
    toCallback
};

latex2mathml.toPromise('E = mc^2').then(console.log);
latex2mathml.toCallback('\(\frac{x}{\sqrt{x^2+2x-3}}-\frac{1}{x}\)', console.log);
