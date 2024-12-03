import { Loader } from '@/components/loaders';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const DriveCallbackPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      window.opener.postMessage(
        { type: 'GOOGLE_OAUTH_CALLBACK', code },
        window.location.origin
      );
      window.close();
    } else {
      // Navigate back if no code is present
      navigate(-1);
    }
  }, [navigate]); // Add navigate to dependency array

  return <Loader loadingText="redirecting..." />;
};

export default DriveCallbackPage;