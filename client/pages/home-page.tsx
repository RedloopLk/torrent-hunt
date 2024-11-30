import ConfigService from '@/config/config-service';

export default function HomePage() {
  const config = ConfigService.getInstance().config;

  return (
    <div>
      <p>home page</p>
      <p>env : {config.AUTH0_DOMAIN}</p>
    </div>
  );
}
