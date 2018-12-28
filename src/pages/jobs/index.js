import React, { PureComponent } from "react";

import employees from "../../assets/employees";
import vacancy from "../../assets/vacancy";
import photo from "../../assets/photo";
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
          const selectedId = section && section.id;

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
                    selectedId={selectedId}
                    id="employees"
                    items={employees}
                    onSectionChange={onSectionChange}
                  />
                  <TeamMembers selectedId={selectedId} id="vacancy" items={vacancy} />
                  <TeamMembers selectedId={selectedId} id="process">
                    <img
                      style={{ margin: "0 auto 30px auto" }}
                      src="http://odkb76.ru/pic/userfile/images/razrabotka.png"
                      alt="in developing"
                    />
                  </TeamMembers>
                  <TeamMembers selectedId={selectedId} id="photo" items={photo} />
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
