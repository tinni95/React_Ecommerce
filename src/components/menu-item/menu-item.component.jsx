import React from "react";

import { withRouter } from "react-router-dom";
import {
  StyledTitle,
  StyledContent,
  BackgroundImage,
  MenuItemContainer,
} from "./menu-item.style";

const MenuItem = ({ title, imageUrl, history, size, linkUrl }) => (
  <MenuItemContainer size={size} onClick={() => history.push(`${linkUrl}`)}>
    <BackgroundImage imageUrl={imageUrl} />
    <StyledContent className="content">
      <StyledTitle className="title">{title.toUpperCase()}</StyledTitle>
    </StyledContent>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
