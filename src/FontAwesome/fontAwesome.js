import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* Import Solid Icons */
import {
  faUserPlus,
  faPen,
  faTrash,
  faEye,
  faCircleLeft,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
/* Import Brands Icons */
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faUserPlus, faPen, faTrash, faEye, faCircleLeft, faUser);
export const useFontAwesomFun = () => {
  return { FontAwesomeIcon };
};
