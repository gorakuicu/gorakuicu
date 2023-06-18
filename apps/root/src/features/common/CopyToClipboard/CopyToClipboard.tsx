import { useCallback, useEffect, useState } from 'react';

export interface CopyToClipboardProps {
  data?: string;
  children?: React.ReactNode;
}

export default function CopyToClipboard({ data = '', children = null }: CopyToClipboardProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(data);
    setIsCopied(true);
  }, [data]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [isCopied]);

  if (!data) return <div className="inline-flex items-center">{children}</div>;

  return (
    <div className="inline-flex items-center">
      <span role="button" tabIndex={0} onClick={copyToClipboard} onKeyDown={() => {}}>
        {children}
      </span>
      {isCopied && <p className="text-base-400 ml-4 w-full text-xs font-bold opacity-50">Copied</p>}
    </div>
  );
}
