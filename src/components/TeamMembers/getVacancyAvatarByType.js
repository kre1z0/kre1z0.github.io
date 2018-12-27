import developer from "../../img/vacancy/developer.svg";
import designer from '../../img/vacancy/designer.svg';
import manager from '../../img/vacancy/manager.svg';
import analyst from '../../img/vacancy/analytic.svg';
import novacancy from "../../img/vacancy/no-vacancy.svg";

export const getVacancyAvatarByType = type => {
  switch (type) {
    case "developer":
      return developer;
    case "designer":
      return designer;
    case "manager":
      return manager;
    case "analyst":
      return analyst;
    default:
      return novacancy;
  }
};
