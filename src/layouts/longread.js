import React, { Component } from "react";
import debounce from "lodash/debounce";

import { isMobile } from "../utils/browser";
import { getProject, getBackRouteByLocationPathName } from "../routes";
import { setVhProperty } from "../utils/dom";
import { Helmet } from "../components/Helmet/Helmet";
import { ScrollbarProvider } from "../components/ScrollbarProvider/ScrollbarProvider";
import { LongreadNavbar } from "../components/LongreadNavbar/LongreadNavbar";
import styles from "../styles/longread";

class LongredLayout extends Component {
  constructor(props) {
    super(props);
    this.onResize = debounce(this.onResize, 44);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { mobileOnly } = prevState;

    if (mobileOnly === null) {
      return {
        mobileOnly: isMobile(),
      };
    }

    return null;
  }

  state = {
    projects: null,
    mobileOnly: null,
  };

  componentDidMount() {
    const { location } = this.props;
    const { mobileOnly } = this.state;

    if (mobileOnly) {
      window.addEventListener("orientationchange", this.onResize);
    } else {
      window.addEventListener("resize", this.onResize);
    }
    this.onResize();
    const prevPage = getBackRouteByLocationPathName(location.pathname);

    if (prevPage.includes("portfolio")) {
      const projects = getProject({ allProject: true }).map(({ id }) => id);
      this.setState({ projects });
    }
  }

  componentWillUnmount() {
    const { mobileOnly } = this.state;

    if (mobileOnly) {
      window.removeEventListener("orientationchange", this.onResize);
    } else {
      window.removeEventListener("resize", this.onResize);
    }
  }

  onResize = () => {
    setVhProperty();
  };

  render() {
    const { projects, mobileOnly } = this.state;
    const { children, location } = this.props;

    return (
      <ScrollbarProvider
        native={mobileOnly}
        location={location}
        className={styles.scrollbar}
        withScrollbarY
      >
        <Helmet
          bodyAttributes={{
            class: styles.londreadBody,
          }}
        />
        <LongreadNavbar native={mobileOnly} projects={projects} pathname={location.pathname} />
        {children}
      </ScrollbarProvider>
    );
  }
}

export default LongredLayout;
