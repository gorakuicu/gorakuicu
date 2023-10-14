import { Button, Input } from '@nextui-org/react';
import { memo } from 'react';

export const SubscribeForm = memo(() => {
  return (
    <div className="mx-auto mt-6 flex w-3/4 flex-wrap items-center justify-between gap-3 sm:w-full sm:flex-nowrap">
      <Input
        label="Email"
        placeholder="Subscribe to updates"
        type="email"
        variant="faded"
      />
      <Button
        className="h-14 w-full sm:w-fit"
        color="primary"
        size="lg"
        variant="shadow"
      >
        Get updates
      </Button>
    </div>
  );
});

SubscribeForm.displayName = 'SubscribeForm';
