import React, { Component } from "react";

import { getProject, getBackRouteByLocationPathName } from "../routes";
import { setVhProperty } from "../utils/dom";
import { Helmet } from "../components/Helmet/Helmet";
import { ScrollbarProvider } from "../components/ScrollbarProvider/ScrollbarProvider";
import { LongreadNavbar } from "../components/LongreadNavbar/LongreadNavbar";
import styles from "../styles/longread";

class LongredLayout extends Component {
  state = {
    projects: null,
  };

  componentDidMount() {
    const { location } = this.props;

    window.addEventListener("resize", this.onResize);
    this.onResize();

    const prevPage = getBackRouteByLocationPathName(location.pathname);

    if (prevPage.includes("portfolio")) {
      const projects = getProject({ allProject: true }).map(({ id }) => id);
      this.setState({ projects });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    setVhProperty();
  };

  render() {
    const { projects } = this.state;
    const { children, location } = this.props;

    return (
      <ScrollbarProvider location={location} className={styles.scrollbar} withScrollbarY>
        <Helmet />
        <LongreadNavbar projects={projects} pathname={location.pathname} />
        {children}
      </ScrollbarProvider>
    );
  }
}

export default LongredLayout;
