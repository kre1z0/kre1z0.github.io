import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { H2, Link } from "../../components/Atoms/Atoms";
import animation from "../../components/Transition/animation";
import { Menu, ListItem, ListHeader, MenuList, SecondLevelMenu } from "./styles";

export class AdditionalMenu extends PureComponent {
  static propTypes = {
    additionalMenuIsOpenId: PropTypes.string,
    additionalMenu: PropTypes.array,
    fadeIn: PropTypes.bool,
  };

  render() {
    const { additionalMenu, leftSide, fadeIn } = this.props;

    return (
      <Menu leftSide={leftSide} className={cn({ [animation.fadeIn]: fadeIn })}>
        {additionalMenu &&
          additionalMenu.map(({ title, id, children }) => (
            <MenuList key={id}>
              {leftSide ? <H2>{title}</H2> : <ListHeader>{title}</ListHeader>}
              {children &&
                children.map(({ text, title, secondLevel, count }, index) => (
                  <ListItem key={`${text}-${index}`}>
                    {title ? (
                      <Link as="div" title>{title}</Link>
                    ) : (
                      <Link>
                        {text}
                        {count && <span>{count}</span>}
                      </Link>
                    )}
                    <SecondLevelMenu>
                      {secondLevel &&
                        secondLevel.map((item, index) => (
                          <Link little key={`${item.text}-${index}`}>
                            {item.text}
                          </Link>
                        ))}
                    </SecondLevelMenu>
                  </ListItem>
                ))}
            </MenuList>
          ))}
      </Menu>
    );
  }
}
