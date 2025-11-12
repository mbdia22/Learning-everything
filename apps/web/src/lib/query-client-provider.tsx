"use client";
import {
  QueryClient,
  QueryClientProvider as BaseProvider,
} from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export function QueryClientProvider({ children }: { children: ReactNode }) {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            retry: 1,
          },
        },
      }),
  );

  return <BaseProvider client={client}>{children}</BaseProvider>;
}

