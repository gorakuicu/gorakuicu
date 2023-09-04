/// <reference lib="WebWorker" />

import { Push } from '@remix-pwa/push';
import {
  PrecacheHandler,
  matchAssetRequest,
  matchDocumentRequest,
  matchLoaderRequest,
  remixLoaderPlugin,
} from '@remix-pwa/sw';
import { registerRoute, setDefaultHandler } from 'workbox-routing';
import { CacheFirst, NetworkFirst } from 'workbox-strategies';

declare let self: ServiceWorkerGlobalScope;

const PAGES = 'page-cache-v1';
const DATA = 'data-cache-v1';
const ASSETS = 'assets-cache-v1';
const staticAssets = ['/build/'];

const messageHandler = new PrecacheHandler({
  assetCacheName: ASSETS,
  dataCacheName: DATA,
  documentCacheName: PAGES,
});

// Assets
registerRoute(
  (event) => matchAssetRequest(event, staticAssets),
  new CacheFirst({
    cacheName: ASSETS,
  }),
);

// Loaders
registerRoute(
  matchLoaderRequest,
  new NetworkFirst({
    cacheName: DATA,
    plugins: [remixLoaderPlugin],
  }),
);

// Documents
registerRoute(
  matchDocumentRequest,
  new NetworkFirst({
    cacheName: PAGES,
  }),
);

setDefaultHandler(({ request }) => {
  return fetch(request.clone());
});

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', (event) => {
  event.waitUntil(messageHandler.handle(event));
});

/******** Push Event ********/
class PushHandler extends Push {
  async handleError(_error: ErrorEvent): Promise<void> {}

  async handleNotificationClick(_event: NotificationEvent): Promise<void> {}

  async handleNotificationClose(_event: NotificationEvent): Promise<void> {}

  async handlePush(_event: PushEvent): Promise<void> {}
}

const pushHandler = new PushHandler();

self.addEventListener('push', (event: PushEvent) => {
  pushHandler.handlePush(event);
});

self.addEventListener('notificationclick', (event: NotificationEvent) => {
  pushHandler.handleNotificationClick(event);
});

self.addEventListener('notificationclose', (event: NotificationEvent) => {
  pushHandler.handleNotificationClose(event);
});

self.addEventListener('error', (error: ErrorEvent) => {
  pushHandler.handleError(error);
});
