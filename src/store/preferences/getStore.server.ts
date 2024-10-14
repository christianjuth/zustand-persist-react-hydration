import { cookies } from 'next/headers';
import * as config from './config';

export function getPreferencesCookie() {
  return cookies().get(config.storageKey)?.value ?? null;
}
