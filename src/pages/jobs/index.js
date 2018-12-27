import React, { PureComponent } from "react";

import vacancy from "../../assets/vacancy";
import employees from "../../assets/employees";
import { GoNextLink } from "../../components/GoNextLink/GoNextLink";
import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import { CenterBlock } from "../../components/CenterBlock/CenterBlock";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { AdditionalMenu } from "../../components/AdditionalMenu/AdditionalMenu";
import { TeamMembers } from "../../components/TeamMembers/TeamMembers";
import { getRouteByLocation } from "../../routes";
import styles from "../../styles/jobs";

export class Jobs extends PureComponent {
  render() {
    const { location } = this.props;
    const currentRoute = getRouteByLocation(location);

    return (
      <MainLayoutConsumer>
        {({ selectedSectionIndex, sections, onSectionChange }) => {
          const section = sections[selectedSectionIndex];

          return (
            <MainAnimation
              {...this.props}
              containerClassName={styles.jobsContainer}
              leftSide={
                <AdditionalMenu
                  selectedId={section && section.id}
                  onSectionChange={onSectionChange}
                  leftSide
                  additionalMenu={currentRoute.additionalMenu}
                  isOpen={true}
                />
              }
              rightSide={
                <CenterBlock>
                  <TeamMembers
                    id="employees"
                    items={employees}
                    control={<GoNextLink>Наши вакансии</GoNextLink>}
                  />
                  <TeamMembers
                    id="vacancy"
                    items={vacancy}
                  />
                </CenterBlock>
              }
            />
          );
        }}
      </MainLayoutConsumer>
    );
  }
}

export default Jobs;
