import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appSlice";
import settingsReducer from "../features/settingsSlice";

export default configureStore({
  reducer: {
    app: appReducer,
    settings: settingsReducer,
  },
});
