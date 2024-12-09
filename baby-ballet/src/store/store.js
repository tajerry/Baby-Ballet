import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {commentApi} from "./services/commentApi";
import {classesApi} from "./services/classesApi";
import {usersApi} from "./services/usersApi";

const store = configureStore({
  reducer: {
    [commentApi.reducerPath]: commentApi.reducer,
    [classesApi.reducerPath]: classesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(commentApi.middleware, classesApi.middleware, usersApi.middleware)
});
// настраиваем листенеры для обработки запросов и мутаций.
setupListeners(store.dispatch);
export default store;
