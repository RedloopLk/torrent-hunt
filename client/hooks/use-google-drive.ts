import { useState, useCallback, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getGoogleAuthUrl } from '../lib/utils';
import { config } from '@/config';

interface GoogleOAuthCallbackEvent extends MessageEvent {
  data: {
    type: string;
    code: string;
  };
}

interface GoogleDriveResponse {
  success: boolean;
  error?: string;
}

interface UseGoogleDriveLinkReturn {
  isLinking: boolean;
  error: string | null;
  linkGoogleDrive: () => Promise<void>;
}

export const useGoogleDriveLink = (): UseGoogleDriveLinkReturn => {
  const { getAccessTokenSilently } = useAuth0();
  const [isLinking, setIsLinking] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleOAuthCallback = useCallback(
    async (event: MessageEvent) => {
      // Add origin check for security
      if (event.origin !== window.location.origin) return;

      const oauthEvent = event as GoogleOAuthCallbackEvent;

      const code = oauthEvent.data.code;

      if (oauthEvent.data.type === 'GOOGLE_OAUTH_CALLBACK') {
        try {
          const token = await getAccessTokenSilently();
          const response = await fetch(
            `${config.API_BASE_URL}/api/drive/link-google-drive`,
            {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code }),
            }
          );

          const data: GoogleDriveResponse = await response.json();

          if (!data.success) {
            throw new Error(data.error || 'Failed to link Google Drive');
          }

          setIsLinking(false);
        } catch (err) {
          setError(
            err instanceof Error ? err.message : 'An unknown error occurred'
          );
          setIsLinking(false);
        }
      }
    },
    [getAccessTokenSilently]
  );

  useEffect(() => {
    window.addEventListener('message', handleOAuthCallback);
    return () => {
      window.removeEventListener('message', handleOAuthCallback);
    };
  }, [handleOAuthCallback]);

  const linkGoogleDrive = async (): Promise<void> => {
    try {
      setIsLinking(true);
      setError(null);

      const width = 500;
      const height = 600;

      const left = window.screen.width / 2 - width / 2;
      const top = window.screen.height / 2 - height / 2;

      const popup = window.open(
        getGoogleAuthUrl(),
        'Google Drive Authorization',
        `width=${width},height=${height},top=${top},left=${left}`
      );

      if (!popup) {
        throw new Error('Failed to open popup window');
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to initiate Google Drive linking'
      );
      setIsLinking(false);
    }
  };

  return { isLinking, error, linkGoogleDrive };
};
