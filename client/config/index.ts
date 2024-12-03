import { z } from 'zod';

// Runtime environment validation schema
const ConfigSchema = z.object({
  AUTH0_DOMAIN: z.string().min(1, 'Auth0 domain is required'),
  AUTH0_CLIENT_ID: z.string().min(1, 'Auth0 client ID is required'),
  AUTH0_CALLBACK_URL: z.string().url('Must be a valid URL'),
  APP_ENVIRONMENT: z
    .enum(['development', 'staging', 'production'])
    .default('development'),
  AUTH0_IDENTIFIER: z.string().min(1, 'Auth0 audience is required'),
  GOOGLE_CLIENT_ID: z.string().min(1, 'Google client ID is required'),
  API_BASE_URL: z.string().url('Must be a valid URL'),
});

// Infer the type from the schema
type Config = z.infer<typeof ConfigSchema>;

// Configuration loader with runtime validation
const loadConfig = (): Config => {
  const rawConfig = {
    AUTH0_DOMAIN: import.meta.env.VITE_AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: import.meta.env.VITE_AUTH0_CLIENT_ID,
    AUTH0_CALLBACK_URL: import.meta.env.VITE_AUTH0_CALLBACK_URL,
    APP_ENVIRONMENT: import.meta.env.VITE_APP_ENVIRONMENT || 'development',
    AUTH0_IDENTIFIER: import.meta.env.VITE_AUTH_IDENTIFIER,
    GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  };

  try {
    return ConfigSchema.parse(rawConfig);
  } catch (error) {
    console.error('Configuration Validation Error', error);
    throw new Error('Invalid configuration. Check your environment variables.');
  }
};

// Export the validated config object
export const config = loadConfig();

// Export environment helper functions
export const isDevelopment = () => config.APP_ENVIRONMENT === 'development';
export const isProduction = () => config.APP_ENVIRONMENT === 'production';
