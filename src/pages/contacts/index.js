import React, { Component } from "react";

import { TelegramButton } from "../../components/Buttons/TelegramButton";
import { RaisedButton } from "../../components/Buttons/RaisedButton";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { H2 } from "../../components/Atoms/Atoms";
import { socials } from "../../assets/contacts/social";

import styles, { SocialBlock, SocialLink, Link } from "../../styles/contacts";

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
            <H2 as="h1">Контакты</H2>
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
          <>
            <RaisedButton onClick={() => this.setState({ stope: true })} primary={stope}>
              Остановки
            </RaisedButton>
            <RaisedButton onClick={() => this.setState({ stope: false })} primary={!stope}>
              Метро
            </RaisedButton>
          </>
        }
      >
        <TelegramButton as="a" target="_blank" href="https://telegram.me/redditr" />
      </MainAnimation>
    );
  }
}

export default Contacts;
