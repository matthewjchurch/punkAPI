import { library } from "@fortawesome/fontawesome-svg-core";

import { faHeart as faOpenHeart } from "@fortawesome/free-regular-svg-icons";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
    faSearch,
    faHeart,
    faSignOutAlt,
    faBeer
} from "@fortawesome/free-solid-svg-icons";

export default library.add(
    faSearch,
    faOpenHeart,
    faHeart,
    faGoogle,
    faSignOutAlt,
    faBeer,
    faGithub
);
