import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import PageNotFound from "@/lib/PageNotFound";
import { queryClientInstance } from "@/lib/query-client";
import Tour from "@/pages/Tour";

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Tour />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
