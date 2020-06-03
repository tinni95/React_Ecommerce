import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'NEW ARRIVALS',
          imageUrl: 'https://i.ibb.co/XXcZndd/alberto-bobbera-URw-OHJu-TZas-unsplash.jpg',
          size: 'large',
          id: 1
        },
        {
          title: 'SALES',
          imageUrl: 'https://i.ibb.co/9htX57M/barbora-polednova-Hx3k-Z7-GB4dc-unsplash.jpg',
          size: 'large',
          id: 2
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 4
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;