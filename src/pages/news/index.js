import React, { Component } from "react";
// import PropTypes from "prop-types";

import { Section } from "../../components/Elements/Section";
import { Article } from "../../components/Elements/Article";
import { Header } from "../../components/News/Header/Header";

class News extends Component {
  render() {
    return (
      <div>
        <Header title="СМИ о нас" />
        <Section>
          <Article>
            <p>
              Lorem ipsum dolor sit amet. <br />
              https://vc.ru/ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
              enim et obcaecati quidem rem reprehenderit tenetur. Aperiam consequuntur culpa,
              deleniti deserunt impedit natus non nulla, provident quas quisquam tenetur, veniam.
            </p>
          </Article>
          <Article>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, enim et
              obcaecati quidem rem reprehenderit tenetur. Aperiam consequuntur culpa, deleniti
              deserunt impedit natus non nulla, provident quas quisquam tenetur, veniam.
            </p>
          </Article>
        </Section>
      </div>
    );
  }
}

export default News;
