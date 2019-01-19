import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Transition, TransitionGroup } from "react-transition-group";

import { VideoContainer } from "../../components/LongreadAtoms/VideoContainer";
import { transition, VideoTransition, slideLeft } from "./styles";
import { fade } from "../Transition/animation";
import { InViewVideo } from "../Video/InViewVideo";

export class MspVideo extends PureComponent {
  static propTypes = {
    videos: PropTypes.arrayOf(PropTypes.object),
    selectedVideoIndex: PropTypes.number,
  };

  render() {
    const { videos, selectedVideoIndex } = this.props;
    const { source } = videos[selectedVideoIndex];

    return (
      <VideoContainer>
        <TransitionGroup appear>
          <Transition
            key={`${selectedVideoIndex}-msp-video`}
            timeout={{
              enter: 100,
              exit: 200,
            }}
          >
            {status => (
              <VideoTransition className={cn(slideLeft[status], fade[status], transition[status])}>
                <InViewVideo video={source} />
              </VideoTransition>
            )}
          </Transition>
        </TransitionGroup>
      </VideoContainer>
    );
  }
}
