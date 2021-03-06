import { expect, test, describe } from '@jest/globals';
import { rspecExamplesShort } from './mocks';
import { rspecReportRuntime } from '../src';

describe('Rspec Report Total Runtime', () => {
  test('should produce the total runtime of a set of rspec examples', () => {
    expect(rspecReportRuntime(rspecExamplesShort)).toBeCloseTo(1.904_241_177, 5);
  });
});
