import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {commentApi} from "./services/commentApi";
import {classesApi} from "./services/classesApi";
const store = configureStore({
  reducer: {
    [commentApi.reducerPath]: commentApi.reducer,
    [classesApi.reducerPath]: classesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(commentApi.middleware, classesApi.middleware)
});
// настраиваем листенеры для обработки запросов и мутаций.
setupListeners(store.dispatch);
export default store;
