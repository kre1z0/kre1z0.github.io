import React, { Component } from "react";

import { Button } from "../../components/Button/Button";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { H1 } from "../../components/Headlines/Headlines";
import { Link } from "../../components/Link/Link";
import { socials } from "../../assets/contacts/social";

import styles, { SocialBlock, SocialLink } from "../../styles/contacts";

class Contacts extends Component {
  state = {
    stope: true,
  };

  render() {
    const { stope } = this.state;

    return (
      <MainAnimation
        {...this.props}
        leftSideClassName={styles.contactsLeftSide}
        rightSideClassName={styles.contactsRightSide}
        leftSide={
          <>
            <H1>Контакты</H1>
            <Link as="address" className={styles.address}>
              127051, Россия, г. Москва, ул. Трубная, д. 25 к. 1
            </Link>
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
        rightSide={
          <div>
            <Button onClick={() => this.setState({ stope: true })} primary={stope}>
              Остановки
            </Button>
            <Button onClick={() => this.setState({ stope: false })} primary={!stope}>
              Метро
            </Button>
          </div>
        }
      />
    );
  }
}

export default Contacts;
