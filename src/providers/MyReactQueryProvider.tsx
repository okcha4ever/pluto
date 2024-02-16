"use client";
import { QueryClient, QueryClientProvider } from "react-query";



export const queryClient = new QueryClient();
const MyReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default MyReactQueryProvider;
