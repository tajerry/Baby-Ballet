import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { commentApi } from "./services/commentApi";

const store = configureStore({
  reducer: {
    [commentApi.reducerPath]: commentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(commentApi.middleware)
});
// настраиваем листенеры для обработки запросов и мутаций.
setupListeners(store.dispatch);
export default store;
