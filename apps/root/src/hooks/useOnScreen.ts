import { useEffect, useRef, useState } from 'react';

export function useOnScreen<T extends Element>(): [React.RefObject<T>, boolean] {
  const [visible, setVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    const refCurrent = ref.current;

    if (refCurrent) observer.observe(refCurrent);

    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, []);

  return [ref, visible];
}
