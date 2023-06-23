import React, { useEffect, useRef, useState } from 'react';

export function useOnScreen<T extends Element>(
  destroyOnVisible: boolean = false,
): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const refCurrent = ref.current;

    if (destroyOnVisible && visible) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    if (refCurrent) observer.observe(refCurrent);

    return () => {
      if (refCurrent) observer.unobserve(refCurrent);
    };
  }, [visible, destroyOnVisible]);

  return [ref, visible];
}
