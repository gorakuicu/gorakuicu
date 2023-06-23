import { useMediaQuery } from '@/hooks/useMediaQuery';
import theme from '@/styles/theme';

export default function useBreakpoints(): {
  isSM: boolean;
  isMD: boolean;
  isLG: boolean;
  isXL: boolean;
} {
  return {
    isSM: useMediaQuery(theme.screens.sm) || false,
    isMD: useMediaQuery(theme.screens.md) || false,
    isLG: useMediaQuery(theme.screens.lg) || false,
    isXL: useMediaQuery(theme.screens.xl) || false,
  };
}
