import { Loader2 } from 'lucide-react';
import { FC } from 'react';

export const Loader: FC<{ loadingText?: string | undefined }> = ({
  loadingText = 'please wait',
}) => (
  <div className="fixed left-0 top-0 flex min-h-screen w-screen items-center justify-center bg-background bg-gradient-to-br text-teal-500">
    <span className="flex w-fit flex-col items-center">
      <Loader2 className="size-6 animate-spin duration-1000" />
      <span className="mt-2 font-semibold">{loadingText}</span>
    </span>
  </div>
);
