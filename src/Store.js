import {configureStore} from "@reduxjs/toolkit";

import { Root } from "./reducers";

let Storee = configureStore({
    reducer:Root
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export {Storee};