import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export interface CopyToClipboardProps {
  data?: string;
  children?: React.ReactNode;
}

export default function CopyToClipboard({ data = '', children = null }: CopyToClipboardProps) {
  const isUnmounted = useRef(false);

  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  const message = useMemo(() => {
    if (copied) return 'Copied';
    if (error) return 'Failed to copy';

    return '';
  }, [copied, error]);

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(data);
      setCopied(true);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setError(true);
    }
  }, [data]);

  useEffect(() => {
    return () => {
      isUnmounted.current = true;
    };
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (copied || error) {
      timeout = setTimeout(() => {
        setCopied(false);
        setError(false);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [copied]);

  if (!data) return <div className="inline-flex items-center">{children}</div>;

  return (
    <div className="inline-flex items-center">
      <span role="button" tabIndex={0} onClick={copyToClipboard} onKeyDown={() => {}}>
        {children}
      </span>
      {(error || copied) && (
        <p className="text-base-400 ml-4 w-full text-xs font-bold opacity-50">{message}</p>
      )}
    </div>
  );
}
