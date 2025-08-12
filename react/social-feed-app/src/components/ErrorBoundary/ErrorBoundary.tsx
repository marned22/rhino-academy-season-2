import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return <div>Error: {error.status} {error.statusText}</div>;
  }

  return <div>Unexpected error: {(error as Error)?.message}</div>;
}