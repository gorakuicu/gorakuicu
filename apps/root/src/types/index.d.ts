interface RefObject<T> {
  readonly current: T | null | undefined;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CMS_TOKEN?: string;
    }
  }
}
