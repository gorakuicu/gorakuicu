import { BaseKeystoneTypeInfo, ServerConfig } from '@keystone-6/core/types';
import { useServer as wsUseServer } from 'graphql-ws/lib/use/ws';
import { WebSocketServer } from 'ws';

export const server: ServerConfig<BaseKeystoneTypeInfo> | undefined = {
  cors: {
    origin: [
      'http://localhost:3000',
      'http://localhost:7777',
      'http://localhost',
      'https://aiko.icu',
      'https://cms.aiko.icu',
      'https://aiko.icu:7777',
    ],
    credentials: true,
  },
  port: 7777,
  maxFileSize: 200 * 1024 * 1024,
  healthCheck: true,
  extendHttpServer: (httpServer, _, graphqlSchema) => {
    wsUseServer(
      { schema: graphqlSchema },
      new WebSocketServer({
        server: httpServer,
        path: '/api/graphql',
      }),
    );
  },
  extendExpressApp: (app) => {
    app.get('/_v', (_, res) => {
      res.send(process.env.npm_package_version);
    });
  },
};
