import { config } from '@/config';

const GOOGLE_CLIENT_ID = config.GOOGLE_CLIENT_ID;

export const getGoogleAuthUrl = (): string => {
  return (
    `https://accounts.google.com/o/oauth2/v2/auth?` +
    `client_id=${GOOGLE_CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(window.location.origin + '/callback')}` +
    `&scope=${encodeURIComponent('https://www.googleapis.com/auth/drive.file')}` +
    `&response_type=code` +
    `&access_type=offline` +
    `&prompt=consent`
  );
};
