import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "antd/dist/reset.css"; // Import Ant Design CSS
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
