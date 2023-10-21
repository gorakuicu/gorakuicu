import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { memo, useCallback, useEffect, useState } from 'react';

import { commonLSManager } from '~/shared/lib/local-storage/common';

const key = 'ageVerified';
const messages = [
  'This website contains age-restricted materials including nudity and explicit depictions of sexual activity.',
  'By entering, you affirm that you are at least 18 years of age or the age of majority in the jurisdiction you are accessing the website from and you consent to viewing sexually explicit content.',
  'If you are under the age of 18 or the age of majority in your jurisdiction, you must leave this website immediately.',
];
const redirectUrl = 'https://youtu.be/dQw4w9WgXcQ?si=Xqv6qYbvf0qZvLFW';
const classNames = {
  backdrop: 'bg-black/80',
};

export const AgeVerificationModal = memo(() => {
  const [isVerified, setIsVerified] = useState(
    Boolean(commonLSManager.get(key)),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVerified(Boolean(commonLSManager.get(key)));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    commonLSManager.subscribeKey(key, (_, value) =>
      setIsVerified(Boolean(value)),
    );
  }, [isVerified]);

  const onEnter = useCallback(() => commonLSManager.set(key, true), []);

  const onExit = useCallback(() => {
    commonLSManager.set(key, false);
    window.location.href = redirectUrl;
  }, []);

  return (
    <Modal
      backdrop="blur"
      classNames={classNames}
      hideCloseButton
      isDismissable={false}
      isOpen={!isVerified}
      size="xl"
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-center font-serif text-2xl">
              Age Verification
            </ModalHeader>
            <ModalBody>
              {messages.map((message) => (
                <p key={message}>{message}</p>
              ))}
            </ModalBody>
            <ModalFooter className="flex flex-col gap-2">
              <Button
                className="font-serif"
                color="primary"
                onPress={onEnter}
                size="lg"
                variant="shadow"
              >
                I am 18 or older - Enter
              </Button>
              <Button
                className="font-serif"
                color="danger"
                onPress={onExit}
                size="lg"
                variant="flat"
              >
                I am under 18 - Exit
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
});

AgeVerificationModal.displayName = 'AgeVerificationModal';
