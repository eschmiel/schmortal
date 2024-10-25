import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    let errorText = ''

    if(isRouteErrorResponse(error)) errorText = error.statusText
    if(error instanceof Error) errorText = error.message

    return (
        <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {<i>{errorText}</i> }
      </p>
    </div>
    )
}