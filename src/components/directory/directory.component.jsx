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
            id: 1,
            linkUrl : "/shop"
        },
        {
            title: 'SALES',
            imageUrl: 'https://i.ibb.co/9htX57M/barbora-polednova-Hx3k-Z7-GB4dc-unsplash.jpg',
            size: 'large',
            id: 2,
            linkUrl : "/shop"
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl : "/shop"
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 4,
            linkUrl : "/shop"
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps}/>
        ))}
      </div>
    );
  }
}

export default Directory;