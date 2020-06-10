const INITIAL_STATE = {
  sections: [
    {
      title: "NEW ARRIVALS",
      imageUrl:
        "https://i.ibb.co/XXcZndd/alberto-bobbera-URw-OHJu-TZas-unsplash.jpg",
      size: "large",
      id: 1,
      linkUrl: "/shop",
    },
    {
      title: "SALES",
      imageUrl:
        "https://i.ibb.co/9htX57M/barbora-polednova-Hx3k-Z7-GB4dc-unsplash.jpg",
      size: "large",
      id: 2,
      linkUrl: "/shop",
    },
    {
      title: "RESTOCK",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "/shop",
    },
    {
      title: "ACCESSORIES",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 4,
      linkUrl: "/shop",
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
