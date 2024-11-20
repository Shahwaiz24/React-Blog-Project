import React, { Suspense } from "react";

// Using lazy() to dynamically import LoginFoamComponent
const LoginFoamComponent = React.lazy(() => 
  import('../index.js').then(module => ({ default: module.LoginFoamComponent }))
);

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="w-full h-full flex flex-col justify-center">
       <h1>Loading...</h1>
    </div>}>
      <LoginFoamComponent />
    </Suspense>
  );
}
