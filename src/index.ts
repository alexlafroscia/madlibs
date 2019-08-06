type AnyFunction = (...args: unknown[]) => unknown;

export const blank = Symbol("Adlib Placeholder");

export function create(fxn: AnyFunction, ...args: unknown[]) {
  return function(...laterArgs: unknown[]) {
    const argsToUse = args.map(arg => {
      if (arg === blank && laterArgs.length !== 0) {
        return laterArgs.shift();
      }

      return arg;
    });

    return fxn(...argsToUse);
  };
}
