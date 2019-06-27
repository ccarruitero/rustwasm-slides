import * as wasmModule from './lib.wasm';

(async () => {
  // const wasmModule = await import('./lib.wasm');
  console.log(wasmModule.add_one(10));
});
