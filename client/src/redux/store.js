import {configureStore} from "@reduxjs/toolkit"
import taskSlice from "./slices/taskSlice";

const Store = configureStore({
    reducer:{
        tasks:taskSlice,
    }
});
export default Store;