import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Link } from "../../components/Link/Link";
import { Menu, ListItem, ListHeader, MenuList, SecondLevelMenu } from "./styles";

export class AdditionalMenu extends PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool,
    additionalMenu: PropTypes.array,
    big: PropTypes.bool,
  };

  render() {
    const { isOpen, additionalMenu, big } = this.props;

    return (
      <Menu isOpen={isOpen} big={big}>
        {additionalMenu &&
          additionalMenu.map(({ title, id, children }) => (
            <MenuList key={id}>
              <ListHeader>{title}</ListHeader>
              {children &&
                children.map(({ text, secondLevel, count }, index) => (
                  <ListItem key={`${text}-${index}`}>
                    <Link>
                      {text}
                      {count && <span>{count}</span>}
                    </Link>
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
