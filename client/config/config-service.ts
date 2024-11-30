// src/config/configManager.ts
import { z } from 'zod';

// Runtime environment validation schema
const ConfigSchema = z.object({
  AUTH0_DOMAIN: z.string().min(1, 'Auth0 domain is required'),
  AUTH0_CLIENT_ID: z.string().min(1, 'Auth0 client ID is required'),
  AUTH0_CALLBACK_URL: z.string().url('Must be a valid URL'),
  APP_ENVIRONMENT: z
    .enum(['development', 'staging', 'production'])
    .default('development'),
});

// Configuration loader with runtime validation
export const loadConfig = () => {
  const rawConfig = {
    AUTH0_DOMAIN: import.meta.env.VITE_AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: import.meta.env.VITE_AUTH0_CLIENT_ID,
    AUTH0_CALLBACK_URL: import.meta.env.VITE_AUTH0_CALLBACK_URL,
    APP_ENVIRONMENT: import.meta.env.VITE_APP_ENVIRONMENT || 'development',
  };

  try {
    return ConfigSchema.parse(rawConfig);
  } catch (error) {
    console.error('Configuration Validation Error', error);
    throw new Error('Invalid configuration. Check your environment variables.');
  }
};

// Singleton configuration instance
class ConfigService {
  private static instance: ConfigService;
  public readonly config;

  private constructor() {
    this.config = loadConfig();
  }

  public static getInstance(): ConfigService {
    if (!ConfigService.instance) {
      ConfigService.instance = new ConfigService();
    }
    return ConfigService.instance;
  }

  // Environment-specific configuration methods
  public isDevelopment(): boolean {
    return this.config.APP_ENVIRONMENT === 'development';
  }

  public isProduction(): boolean {
    return this.config.APP_ENVIRONMENT === 'production';
  }
}

export default ConfigService;
