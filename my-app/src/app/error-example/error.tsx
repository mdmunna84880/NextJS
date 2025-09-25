'use client'

import { useEffect } from "react";

function ErrorHandling({error,
  reset}:{
  error: Error & { digest?: string }
  reset: () => void
}) {

    useEffect(()=>{
        console.error(error);
    }, [error]);

    return ( 
        <div>
            <h1>{error?.message || "Something went wrong."} </h1>
            <button onClick={reset}>Try Again</button>
        </div>
     );
}

export default ErrorHandling;