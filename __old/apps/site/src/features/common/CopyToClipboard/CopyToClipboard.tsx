import React, { useCallback, useEffect, useState } from 'react';

export interface ICopyToClipboardProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: string;
}

const messages = {
  copied: 'Copied',
  error: 'Failed to copy',
};

export default function CopyToClipboard({ data = '', children = null }: ICopyToClipboardProps) {
  const [status, setStatus] = useState<'copied' | 'error' | 'idle'>('idle');

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(data);
      setStatus('copied');
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setStatus('error');
    }
  }, [data]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (status !== 'idle') {
      timeout = setTimeout(() => setStatus('idle'), 2000);
    }

    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [status]);

  if (!data) return <div className="inline-flex items-center">{children}</div>;

  return (
    <div className="inline-flex items-center">
      <span role="button" tabIndex={0} onClick={copyToClipboard} onKeyDown={() => {}}>
        {children}
      </span>
      {status !== 'idle' && (
        <p className="text-base-400 ml-4 w-full text-xs font-bold opacity-50">{messages[status]}</p>
      )}
    </div>
  );
}
