import React from "react";

import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { H1 } from "../../components/Headlines/Headlines";
import { Link } from "../../components/Link/Link";
import { socials } from "../../assets/contacts/social";

import { SocialBlock, SocialLink } from "../../styles/contacts";

export const Contacts = props => {
  return (
    <MainAnimation
      {...props}
      leftSide={
        <>
          <H1>Контакты</H1>
          <Link as="address">127051, Россия, г. Москва, ул. Трубная, д. 25 к. 1</Link>
          <Link href="tel:+74955060774">+7 (495) 506-07-74</Link>
          <Link href="mailto:info@everpoint.ru">info@everpoint.ru</Link>
          <SocialBlock>
            {socials.map(({ img, link, name }) => (
              <SocialLink
                target="_blank"
                href={link}
                key={`social-${name}`}
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </SocialBlock>
        </>
      }
      rightSide={<div />}
    />
  );
};

export default Contacts;
