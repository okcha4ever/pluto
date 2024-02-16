"use client";
import { QueryClient, QueryClientProvider } from "react-query";

const MyReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      {children}
    </QueryClientProvider>
  );
};

export default MyReactQueryProvider;
