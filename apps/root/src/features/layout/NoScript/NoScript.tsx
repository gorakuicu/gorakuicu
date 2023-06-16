import { noscriptMessage } from '@/constants/messages';
import { addGlassStyle } from '@/utils/styles';

export default function NoScript() {
  return (
    <noscript>
      <span
        className={addGlassStyle(
          'fixed left-2/4 top-2/4 z-50 -translate-x-2/4 translate-y-2/4 rounded-3xl p-2 text-center align-middle text-red-500 shadow-sm',
        )}
      >
        {noscriptMessage}
      </span>
    </noscript>
  );
}
