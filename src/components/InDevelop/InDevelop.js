import React from "react";

import { GatsbyLink } from "../../components/Atoms/Atoms";

export const InDevelop = ({ to }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        alignItems: "center",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <img src="http://odkb76.ru/pic/userfile/images/razrabotka.png" alt="in developing" />
      <GatsbyLink style={{ marginTop: "1rem", color: "#90c53d" }} to={to} replace>
        Вернутся назад
      </GatsbyLink>
    </div>
  );
};
