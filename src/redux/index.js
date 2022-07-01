import {  configureStore } from "@reduxjs/toolkit";
import { todoreducer } from "./config";
import  todoslice  from "./features/todoslice";

//store
export const store = configureStore({ reducer: {todo:todoslice} });
