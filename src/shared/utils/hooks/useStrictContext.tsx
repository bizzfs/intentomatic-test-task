import { Context, useContext } from 'react';

export function useStrictContext<T>(context: Context<T>, strictNullCheck: boolean = false): NonNullable<T> {
  const contextState = useContext(context);

  if (strictNullCheck ? contextState === null : contextState == null) {
    throw new Error(`useStrictContext must be used within ${context.displayName || ''}Provider`);
  }

  return contextState as NonNullable<T>;
}
