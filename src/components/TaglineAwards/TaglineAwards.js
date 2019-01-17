import React from "react";

import { ReactComponent as Loyalty } from "../../img/icons/loyalty.svg";
import { ReactComponent as Badge } from "../../img/portfolio/msp/tagline-awards-badge.svg";
import {
  TaglineAwardsContainer,
  TaglineAwardsBlock,
  TaglineAwardsLeftBlock,
  TaglineAwardsLeftText,
  TaglineAwardsCenterBlock,
  TaglineAwardsRightBlock,
} from "./styles";

export const TaglineAwards = () => {
  return (
    <TaglineAwardsContainer>
      <TaglineAwardsBlock>
        <TaglineAwardsLeftBlock>
          <Loyalty />
          <TaglineAwardsLeftText>
            <span>Бронза</span>
            <span>Tagline Awards 2018</span>
          </TaglineAwardsLeftText>
        </TaglineAwardsLeftBlock>
        <TaglineAwardsCenterBlock>
          <span>Лучший сервис для digital-маркетинга</span>
          <span>Лучший инновационный сервис</span>
        </TaglineAwardsCenterBlock>
        <TaglineAwardsRightBlock>
          <Badge />
          <Badge />
        </TaglineAwardsRightBlock>
      </TaglineAwardsBlock>
    </TaglineAwardsContainer>
  );
};
