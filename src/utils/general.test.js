import { add, logger } from './general';

it('console.log the text "hello"', () => {
  console.log = jest.fn();
  logger('hello');
  // The first argument of the first call to the function was 'hello'
  expect(console.log.mock.calls[0][0]).toBe('hello');
});
