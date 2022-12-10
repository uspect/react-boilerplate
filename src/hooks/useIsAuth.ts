import { accessTokenService } from '@/utils/services/accessTokenService';

export const useIsAuth = () => {
  return Boolean(accessTokenService.getToken());
};
