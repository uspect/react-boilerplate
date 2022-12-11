import { accessTokenService } from '@/utils/services/accessTokenService';

export const useIsAuth = () => Boolean(accessTokenService.getToken());
