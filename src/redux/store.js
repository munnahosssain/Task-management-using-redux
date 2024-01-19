import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/tasksSlice";
import usersSlice from "./features/user/usersSlice";

export default configureStore({
  reducer: {
    taskSlice: tasksSlice,
    userSlice: usersSlice,
  },
});
