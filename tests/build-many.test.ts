import type { BuildMany } from '../src/types/BuildMany';
import type { Equal, Expect } from '../src/types/helpers';
import type { State } from './types-catalog/utils';

describe('BuildMany', () => {
  it('should correctly update the content of a readonly tuple', () => {
    type cases = [
      Expect<
        Equal<
          BuildMany<readonly [number, State], [[{ status: 'idle' }, [1]]]>,
          [number, { status: 'idle' }]
        >
      >,
      Expect<
        Equal<
          BuildMany<
            readonly [number, State],
            [[{ status: 'idle' }, [1]]] | [[{ status: 'loading' }, [1]]]
          >,
          [number, { status: 'idle' }] | [number, { status: 'loading' }]
        >
      >
    ];
  });
});
