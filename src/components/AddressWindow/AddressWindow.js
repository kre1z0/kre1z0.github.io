import React, { Component } from "react";
import styled from "astroturf";

import { Portal } from "../../components/Portal/Portal";
import { H2 } from "../../components/Atoms/Atoms";
import { Hamburger } from "../../components/Buttons/Hamburger";
import { Link } from "../../styles/contacts";
import styles from "../../components/Transition/animation";

export const ModalLink = styled(Link)`
  margin-bottom: 1.4285rem;
`;

export const AddressWindowContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.95);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const CloseBtn = styled(Hamburger)`
  top: 2rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Content = styled("div")`
  text-align: center;
`;

export class AddressWindow extends Component {
  state = {
    isOpen: false,
  };

  render() {
    const { isOpen } = this.state;

    return (
      <>
        <ModalLink as="div" isActive onClick={() => this.setState({ isOpen: true })}>
          Открыть адрес на карте
        </ModalLink>
        {isOpen && (
          <Portal>
            <AddressWindowContainer>
              <CloseBtn isOpen onClick={() => this.setState({ isOpen: false })} />
              <Content className={styles.fadeIn}>
                <H2>Открыть адрес на карте</H2>
                <img
                  src="https://vignette.wikia.nocookie.net/dont-starve/images/8/81/Kappa.png/revision/latest?cb=20160415163659&path-prefix=ru"
                  alt="kappa"
                />
              </Content>
            </AddressWindowContainer>
          </Portal>
        )}
      </>
    );
  }
}
