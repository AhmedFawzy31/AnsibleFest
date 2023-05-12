import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./QueryClient";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { HomeContextProvider } from "./context/HomeContext";

function App() {
  return (
    <HomeContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </HomeContextProvider>
  );
}

export default App;
