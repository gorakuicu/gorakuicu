import { useEffect, useState } from 'react';

export interface ScriptStatus {
  idle: 'idle';
  loading: 'loading';
  ready: 'ready';
  error: 'error';
}

export function useScript(src: string, delay?: number): ScriptStatus[keyof ScriptStatus] {
  const [status, setStatus] = useState<ScriptStatus[keyof ScriptStatus]>(src ? 'loading' : 'idle');

  useEffect(() => {
    if (!src) {
      setStatus('idle');

      return;
    }

    let script = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement;
    let timeout: NodeJS.Timeout;

    if (!script) {
      if (delay) {
        timeout = setTimeout(() => {
          injectScript();
          // Add event listener after the script is added
          script.addEventListener('load', setStateStatus);
          script.addEventListener('error', setStateStatus);
        }, delay);
      } else {
        injectScript();
      }
    } else {
      setStatus(script.getAttribute('data-status') as ScriptStatus[keyof ScriptStatus]);
    }

    const setStateStatus = (event: Event) => {
      setStatus(event.type === 'load' ? 'ready' : 'error');
    };

    //code to inject script
    function injectScript() {
      script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.setAttribute('data-status', 'loading');
      document.body.appendChild(script);

      const setDataStatus = (event: Event) => {
        script.setAttribute('data-status', event.type === 'load' ? 'ready' : 'error');
      };

      script.addEventListener('load', setDataStatus);
      script.addEventListener('error', setDataStatus);
    }

    if (script) {
      //script will be be undefined available when its delayed hence check it before adding listener
      script.addEventListener('load', setStateStatus);
      script.addEventListener('error', setStateStatus);
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
