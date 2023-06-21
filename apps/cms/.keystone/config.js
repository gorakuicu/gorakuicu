"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_register = require("module-alias/register");
var import_core2 = require("@keystone-6/core");
var import_dotenv4 = __toESM(require("dotenv"));

// src/config/auth.ts
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var import_crypto = require("crypto");
var import_dotenv = __toESM(require("dotenv"));
import_dotenv.default.config({ path: "../../.env" });
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  sessionData: "email id isAdmin createdAt",
  secretField: "password",
  initFirstItem: {
    fields: ["email", "password", "isAdmin"],
    itemData: { isAdmin: true },
    skipKeystoneWelcome: true
  }
});
var session = (0, import_session.statelessSessions)({
  maxAge: 60 * 60 * 24 * 30,
  secret: process.env.SESSION_SECRET || process.env.NODE_ENV !== "production" && (0, import_crypto.randomBytes)(32).toString("hex") || "",
  // secure: process.env.NODE_ENV === 'production',
  secure: false,
  sameSite: "lax"
});

// src/config/db.ts
var import_dotenv2 = __toESM(require("dotenv"));
import_dotenv2.default.config({ path: "../../.env" });
var DATABASE_LOCAL = process?.env?.DATABASE_LOCAL === "1";
var DATABASE_URL = DATABASE_LOCAL ? process?.env?.DATABASE_LOCAL_URL : process?.env?.DATABASE_URL;
var DATABASE_SHADOW_URL = DATABASE_LOCAL ? process?.env?.DATABASE_LOCAL_SHADOW_URL : process?.env?.DATABASE_SHADOW_URL;
process.env.DATABASE_URL = DATABASE_URL;
process.env.DATABASE_SHADOW_URL = DATABASE_SHADOW_URL;
var db = {
  provider: "postgresql",
  url: process.env.DATABASE_URL || "",
  shadowDatabaseUrl: DATABASE_SHADOW_URL || "",
  idField: { kind: "uuid" },
  enableLogging: true
  // useMigrations: true,
};

// src/config/graphql.ts
var graphql = {
  debug: process.env.NODE_ENV !== "production",
  path: "/api/graphql"
  // apolloConfig: {
  //   debug: true,
  // },
};

// src/config/server.ts
var import_ws = require("graphql-ws/lib/use/ws");
var import_ws2 = require("ws");
var server = {
  cors: {
    origin: [
      "http://localhost:3000",
      "http://localhost:7777",
      "http://localhost",
      "https://aiko.icu",
      "https://cms.aiko.icu",
      "https://aiko.icu:7777"
    ],
    credentials: true
  },
  port: 7777,
  maxFileSize: 200 * 1024 * 1024,
  healthCheck: true,
  extendHttpServer: (httpServer, _, graphqlSchema) => {
    (0, import_ws.useServer)(
      { schema: graphqlSchema },
      new import_ws2.WebSocketServer({
        server: httpServer,
        path: "/api/graphql"
      })
    );
  },
  extendExpressApp: (app) => {
    app.get("/_v", (_, res) => {
      res.send(process.env.npm_package_version);
    });
  }
};

// src/config/storage.ts
var import_dotenv3 = __toESM(require("dotenv"));
import_dotenv3.default.config({ path: "../../.env" });
var S3_ACCESS_KEY = process?.env?.S3_ACCESS_KEY;
var S3_SECRET_KEY = process?.env?.S3_SECRET_KEY;
var S3_ENDPOINT = process?.env?.S3_REGION + "." + process?.env?.S3_DOMAIN;
var S3_BUCKET = process?.env?.S3_BUCKET;
var S3_DIRECTORY = process?.env?.S3_DIRECTORY;
var S3_REGION = process?.env?.S3_REGION;
var S3_CDN = process?.env?.S3_CDN;
var storage = {
  s3image: {
    kind: "s3",
    type: "image",
    bucketName: S3_BUCKET || "",
    region: S3_REGION || "",
    accessKeyId: S3_ACCESS_KEY || "",
    secretAccessKey: S3_SECRET_KEY || "",
    endpoint: `https://${S3_BUCKET}.${S3_ENDPOINT}/${S3_DIRECTORY}`,
    generateUrl: (path) => `https://${S3_CDN}}/${path}`,
    signed: { expiry: 5e3 },
    forcePathStyle: true
  },
  s3file: {
    kind: "s3",
    type: "file",
    bucketName: S3_BUCKET || "",
    region: S3_REGION || "",
    accessKeyId: S3_ACCESS_KEY || "",
    secretAccessKey: S3_SECRET_KEY || "",
    endpoint: `https://${S3_BUCKET}.${S3_ENDPOINT}/${S3_DIRECTORY}`,
    generateUrl: (path) => `https://${S3_CDN}}/${path}`,
    signed: { expiry: 5e3 },
    forcePathStyle: true
  }
};

// src/schemas/User.ts
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");
function User() {
  return (0, import_core.list)({
    // access: {
    //   operation: {
    //     query: isAdmin,
    //     create: isAdmin,
    //     update: isAdmin,
    //     delete: isAdmin,
    //   },
    // },
    access: import_access.allowAll,
    fields: {
      email: (0, import_fields.text)({
        validation: { isRequired: true },
        isIndexed: "unique"
      }),
      password: (0, import_fields.password)({ validation: { isRequired: true } }),
      createdAt: (0, import_fields.timestamp)({
        defaultValue: { kind: "now" }
      }),
      isAdmin: (0, import_fields.checkbox)({
        defaultValue: false
      })
    }
  });
}

// src/schemas/index.ts
var lists = {
  User: User()
};

// keystone.ts
import_dotenv4.default.config({ path: "../../.env" });
var keystone_default = withAuth(
  (0, import_core2.config)({
    lists,
    server,
    session,
    db,
    storage,
    graphql
  })
);
