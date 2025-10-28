import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry } from "@serwist/precaching";
// 'serwist' 本体から Serwist クラスをインポートします
import { Serwist } from "serwist";

// declare const self: ServiceWorkerGlobalScope;
// 以下の型定義の方がより厳密です
declare global {
  interface WorkerGlobalScope {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}
declare const self: ServiceWorkerGlobalScope;

// new Serwist() でインスタンスを作成します
const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
});
