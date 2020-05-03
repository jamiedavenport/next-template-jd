import hello from './hello';

it('should add numbers correct', () => {
  expect(hello()).toMatchInlineSnapshot(`"Hello, World"`);
});
