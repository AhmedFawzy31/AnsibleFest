import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./QueryClient";
import { RouterProvider } from "react-router-dom";
import router from "./router";
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;