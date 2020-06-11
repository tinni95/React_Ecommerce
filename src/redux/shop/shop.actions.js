import ShopActionTypes from "./shop.types";

export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPADTE_COLLECTIONS,
  payload: collectionsMap,
});
