const INITIAL_STATE = {
  sections: [
    {
      title: "NEW ARRIVALS",
      imageUrl:
        "https://i.ibb.co/XXcZndd/alberto-bobbera-URw-OHJu-TZas-unsplash.jpg",
      size: "large",
      id: 1,
      linkUrl: "/shop/new",
    },
    {
      title: "SALES",
      imageUrl:
        "https://i.ibb.co/9htX57M/barbora-polednova-Hx3k-Z7-GB4dc-unsplash.jpg",
      size: "large",
      id: 2,
      linkUrl: "/shop/sales",
    },
    {
      title: "RESTOCK",
      imageUrl:
        "https://i.ibb.co/RyTvtB6/ergita-sela-6q1o-QIEi-Sa-A-unsplash.jpg",
      id: 3,
      linkUrl: "/shop/restock",
    },
    {
      title: "ACCESSORIES",
      imageUrl:
        "https://i.ibb.co/5cbbXLz/alex-chambers-Tx-Cbf-Mc854c-unsplash.jpg",
      id: 4,
      linkUrl: "/shop/accessories",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
