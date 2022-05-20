import { BUY_MAGAZINE } from "./magazineTypes";

export const onBuyMagazineAction = (number = 1) => {
  return {
    type: BUY_MAGAZINE,
    payload: number
  };
};
