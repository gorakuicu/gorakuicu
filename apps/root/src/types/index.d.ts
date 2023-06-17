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

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.mdx' {
  const content: string;
  export default content;
}
