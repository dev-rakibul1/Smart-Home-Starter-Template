import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./utils/route";

function App() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
