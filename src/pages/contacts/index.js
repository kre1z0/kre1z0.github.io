import React, { PureComponent } from "react";
import cn from "classnames";
import Responsive from "react-responsive";

import { fade, transition } from "../../components/Transition/animation";
import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import { Portal } from "../../components/Portal/Portal";
import bg from "../../components/Background/styles";
import { TelegramButton } from "../../components/Buttons/TelegramButton";
import { Button } from "../../components/Buttons/Buttons";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { H2 } from "../../components/Atoms/Atoms";
import { socials } from "../../assets/social";
import { AddressWindow } from "../../components/AddressWindow/AddressWindow";

import styles, {
  SocialBlock,
  SocialLink,
  Link,
  ContactsLeftSide,
  BtnGroup,
} from "../../styles/contacts";
import { getRouteByLocation } from "../../routes";

export const ButtonGroup = ({ stope, onClickBus, onClickMetro }) => {
  return (
    <>
      <Button raisedButton onClick={onClickBus} isActive={stope}>
        Остановки
      </Button>
      <Button raisedButton onClick={onClickMetro} isActive={!stope}>
        Метро
      </Button>
    </>
  );
};

class Contacts extends PureComponent {
  state = {
    stope: true,
  };

  render() {
    const { status, location } = this.props;
    const { text } = getRouteByLocation(location);
    const { stope } = this.state;

    const btnGroupProps = {
      stope,
      status,
      onClickBus: () => this.setState({ stope: true }),
      onClickMetro: () => this.setState({ stope: false }),
    };

    return (
      <MainAnimation
        {...this.props}
        base64styles={!stope ? bg.metro : ""}
        rightSideClassName={styles.contactsRightSide}
        willChangeLeftSideClassName={styles.willChangeContactsLeftSideClassName}
        leftSide={
          <ContactsLeftSide>
            <H2 as="h1">{text}</H2>
            <Link as="address" className={styles.address}>
              127051, Россия, <br /> г. Москва, ул. Трубная, д. 25 к. 1
            </Link>
            <Responsive maxWidth={1000}>
              <AddressWindow />
            </Responsive>
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
                        <BtnGroup className={cn(fade[status], transition[status])}>
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
        <TelegramButton as="a" className={styles.telegramBtn} target="_blank" href="https://telegram.me/redditr" />
      </MainAnimation>
    );
  }
}

export default Contacts;
