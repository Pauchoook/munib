import * as functions from "./files/functions.js";

import "../scss/style.scss";
import spoller from "./files/spoller.js";
import burger from "./files/burger.js";
import reserva from "./files/reserva.js";
import slider from "./files/slider.js";
import map from "./files/map.js";
import modal from "./files/modal.js";

slider();
functions.isWebp();
functions.mediaAdaptive();
spoller();
burger();
reserva();
map();
modal();