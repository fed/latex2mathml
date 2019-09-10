import test from 'ava';
import latex2mathml from '.';

function getSingleLineMML(str) {
  const stringWithoutLineBreaks = str.replace(/(\r\n|\n|\r)/gm, ' ');
  const stringWithoutMultipleSpaces = stringWithoutLineBreaks.replace(/\s+/g, ' ');
  const stringWithoutSpacesBetweenTags = stringWithoutMultipleSpaces.replace(/> </g, '><');

  return stringWithoutSpacesBetweenTags;
}

test('test case #1', async t => {
  const tex = 'x^2+y^2=z^2';
  const mml = getSingleLineMML(await latex2mathml.toPromise(tex));

  t.is(mml, '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block" alttext="x^2+y^2=z^2"><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>z</mi><mn>2</mn></msup></math>');
});

test('test case #2', async t => {
  const tex = '\prod_{x=1}^52x+1';
  const mml = getSingleLineMML(await latex2mathml.toPromise(tex));

  t.is(mml, '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block" alttext="prod_{x=1}^52x+1"><mi>p</mi><mi>r</mi><mi>o</mi><msubsup><mi>d</mi><mrow class="MJX-TeXAtom-ORD"><mi>x</mi><mo>=</mo><mn>1</mn></mrow><mn>5</mn></msubsup><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></math>');
});
