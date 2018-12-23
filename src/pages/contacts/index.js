import React, { Component } from "react";
import Responsive from "react-responsive";

import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import { Portal } from "../../components/Portal/Portal";
import { Tablet } from "../../components/Responsive/Responsive";
import bg from "../../components/Background/styles";
import { TelegramButton } from "../../components/Buttons/TelegramButton";
import { RaisedButton } from "../../components/Buttons/RaisedButton";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { H2 } from "../../components/Atoms/Atoms";
import { socials } from "../../assets/contacts/social";
import { AddressWindow } from "../../components/AddressWindow/AddressWindow";

import styles, {
  SocialBlock,
  SocialLink,
  Link,
  ContactsLeftSide,
  BtnGroup,
} from "../../styles/contacts";

export const ButtonGroup = ({ stope, onClickBus, onClickMetro }) => {
  return (
    <>
      <RaisedButton onClick={onClickBus} isActive={stope}>
        Остановки
      </RaisedButton>
      <RaisedButton onClick={onClickMetro} isActive={!stope}>
        Метро
      </RaisedButton>
    </>
  );
};

class Contacts extends Component {
  state = {
    stope: true,
  };

  render() {
    const { stope } = this.state;

    const btnGroupProps = {
      stope,
      onClickBus: () => this.setState({ stope: true }),
      onClickMetro: () => this.setState({ stope: false }),
    };

    return (
      <MainAnimation
        {...this.props}
        base64styles={!stope ? bg.metro : ""}
        leftSideClassName={styles.contactsLeftSide}
        rightSideClassName={styles.contactsRightSide}
        willChangeLeftSideClassName={styles.willChangeContactsLeftSideClassName}
        leftSide={
          <ContactsLeftSide>
            <H2 as="h1">Контакты</H2>
            <Link as="address" className={styles.address}>
              127051, Россия, <br /> г. Москва, ул. Трубная, д. 25 к. 1
            </Link>
            <Tablet>
              <AddressWindow />
            </Tablet>
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
          </ContactsLeftSide>
        }
        rightSide={
          <>
            <Responsive minWidth={666}>
              <ButtonGroup {...btnGroupProps} />
            </Responsive>
            <Responsive maxWidth={665}>
              <MainLayoutConsumer>
                {({ mobileMenuIsOpen }) => (
                  <>
                    {!mobileMenuIsOpen && (
                      <Portal>
                        <BtnGroup>
                          <ButtonGroup {...btnGroupProps} />
                        </BtnGroup>
                      </Portal>
                    )}
                  </>
                )}
              </MainLayoutConsumer>
            </Responsive>
          </>
        }
      >
        <TelegramButton as="a" target="_blank" href="https://telegram.me/redditr" />
      </MainAnimation>
    );
  }
}

export default Contacts;
