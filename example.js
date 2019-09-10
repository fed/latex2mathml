const latex2mathml = require('.');

latex2mathml.toPromise('E = mc^2').then(console.log);
latex2mathml.toCallback('\(\frac{x}{\sqrt{x^2+2x-3}}-\frac{1}{x}\)', console.log);
