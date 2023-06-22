import { useEffect, useState } from 'react';

export interface IScriptStatus {
  idle: 'idle';
  loading: 'loading';
  ready: 'ready';
  error: 'error';
}

export function useScript(
  src: string,
  delay?: number,
  doNotRun?: boolean,
): IScriptStatus[keyof IScriptStatus] {
  const [status, setStatus] = useState<IScriptStatus[keyof IScriptStatus]>(
    src ? 'loading' : 'idle',
  );

  useEffect(() => {
    if (doNotRun) return;

    if (!src) {
      setStatus('idle');

      return;
    }

    let script: HTMLScriptElement | null = document.querySelector(
      `script[src="${src}"]`,
    ) as HTMLScriptElement;
    let timeout: NodeJS.Timeout;

    const setStateStatus = (event: Event) => {
      setStatus(event.type === 'load' ? 'ready' : 'error');
    };

    // code to inject script
    function injectScript() {
      script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.setAttribute('data-status', 'loading');
      document.body.appendChild(script);

      const setDataStatus = (event: Event) => {
        script?.setAttribute('data-status', event.type === 'load' ? 'ready' : 'error');
      };

      script.addEventListener('load', setDataStatus);
      script.addEventListener('error', setDataStatus);
    }

    if (!script) {
      if (delay) {
        timeout = setTimeout(() => {
          injectScript();
          script?.addEventListener('load', setStateStatus);
          script?.addEventListener('error', setStateStatus);
        }, delay);
      } else {
        injectScript();
        const script = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement;

        script?.addEventListener('error', setStateStatus);
      }
    } else {
      setStatus(script.getAttribute('data-status') as IScriptStatus[keyof IScriptStatus]);
    }

    return () => {
      if (script) {
        script.removeEventListener('load', setStateStatus);
        script.removeEventListener('error', setStateStatus);
      }
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [src]);

  return status;
}
