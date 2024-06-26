import {configureStore} from "@reduxjs/toolkit"
import taskSlice from "./slices/taskSlice";

const Store = configureStore({
    reducer:{
        task:taskSlice,
    }
});
export default Store;