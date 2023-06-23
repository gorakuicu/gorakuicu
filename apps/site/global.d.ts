interface RefObject<T> {
  readonly current: T | null | undefined;
}

declare global {
  namespace NodeJS {
    // interface ProcessEnv {
    //   CMS_TOKEN?: string;
    // }
  }
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    hj: any;
    _hjSettings: any;
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
