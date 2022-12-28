import React from 'react';
import { useRouteError } from 'react-router-dom';

export const NotFound = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{JSON.stringify(error)}</p>
    </div>
  )
};
