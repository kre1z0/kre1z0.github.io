import React, { Component } from "react";

import { CompanyPhoto } from "../../components/CompanyPhoto/CompanyPhoto";
import employees from "../../assets/employees";

import { CompanyContainer } from "../../styles/company";

class Company extends Component {
  render() {
    return (
      <CompanyContainer>
        <CompanyPhoto
          title="Everpoint - это мы!"
          // add designer photo
          photo={employees.filter(({ id }) => id !== "8").map(({ avatar }) => avatar)}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut dolorem fuga iusto
          laboriosam nam quibusdam repellendus tempora. A accusantium alias asperiores eligendi,
          nesciunt nostrum pariatur quas rerum tempora voluptatum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut dolorem fuga iusto
          laboriosam nam quibusdam repellendus tempora. A accusantium alias asperiores eligendi,
          nesciunt nostrum pariatur quas rerum tempora voluptatum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut dolorem fuga iusto
          laboriosam nam quibusdam repellendus tempora. A accusantium alias asperiores eligendi,
          nesciunt nostrum pariatur quas rerum tempora voluptatum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut dolorem fuga iusto
          laboriosam nam quibusdam repellendus tempora. A accusantium alias asperiores eligendi,
          nesciunt nostrum pariatur quas rerum tempora voluptatum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut dolorem fuga iusto
          laboriosam nam quibusdam repellendus tempora. A accusantium alias asperiores eligendi,
          nesciunt nostrum pariatur quas rerum tempora voluptatum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut dolorem fuga iusto
          laboriosam nam quibusdam repellendus tempora. A accusantium alias asperiores eligendi,
          nesciunt nostrum pariatur quas rerum tempora voluptatum.
        </p>
      </CompanyContainer>
    );
  }
}

export default Company;
