import { Button, Card, CardBody } from '@nextui-org/react';
import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { memo, useCallback, useEffect, useState } from 'react';

import { commonLSManager } from '~/shared/lib/local-storage/common';

const key = 'cookiesAccepted';
const animate = { opacity: 1 };
const initial = { opacity: 0 };
const transition = { duration: 0.4 };

export const CookieNotificationCard = memo(() => {
  const [isAccepted, setIsAccepted] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAccepted(Boolean(commonLSManager.get(key)));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    commonLSManager.subscribeKey(key, (_, value) =>
      setIsAccepted(Boolean(value)),
    );
  }, [isAccepted]);

  const onAccept = useCallback(() => commonLSManager.set(key, true), []);

  if (isAccepted) {
    return null;
  }

  return (
    <motion.div
      animate={animate}
      className="fixed inset-x-4 bottom-4 max-w-2xl bg-gradient-to-r md:inset-auto md:bottom-8 md:right-16"
      initial={initial}
      transition={transition}
    >
      <Card className="bg-primary">
        <CardBody className="flex flex-col items-center justify-between gap-5 px-4 py-2 text-center md:flex-row md:text-start">
          <p>
            This website uses <b>cookies</b> to ensure you get the best
            experience. Read our{' '}
            <Link to="/legal/privacy">
              <b>Privacy Notice</b>
            </Link>{' '}
            and{' '}
            <Link to="/legal/cookie">
              <b>Cookie Policy</b> for more information.
            </Link>
          </p>
          <Button
            className="w-full font-serif md:w-max"
            onPress={onAccept}
            variant="solid"
          >
            Accept
          </Button>
        </CardBody>
      </Card>
    </motion.div>
  );
});

CookieNotificationCard.displayName = 'CookieNotificationCard';
