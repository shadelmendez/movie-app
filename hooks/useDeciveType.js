import { useWindowDimensions } from "react-native";

export default function useDeviceType() {
  const { width, height } = useWindowDimensions();

  const isTablet = width >= 800;
  const isMobile = width < 800;

  return { isTablet, isMobile, width, height };
}
