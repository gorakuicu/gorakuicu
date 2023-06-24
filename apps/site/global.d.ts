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
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
    hj: unknown;
    _hjSettings: unknown;
  }
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.mdx' {
  let MDXComponent: (props: unknown) => JSX.Element;
  export default MDXComponent;
}
