import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  new: 1,
  sales: 2,
  restock: 3,
  accessories: 4,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
