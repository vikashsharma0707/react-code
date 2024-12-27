import { configureStore } from "@reduxjs/toolkit";
import data from "./AddTaskSlice";

const store= configureStore({
    reducer:{

        products:data
    }
})

export default store;