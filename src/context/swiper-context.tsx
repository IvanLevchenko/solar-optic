import { createContext } from "react";

type SwiperContextType = {
  slideNext: () => void;
};

export const SwiperContext = createContext<SwiperContextType>({
  slideNext: () => {},
});
