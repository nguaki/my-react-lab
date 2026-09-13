import React from 'react';

// 1. Declare the strict type contract (Like a C++ struct)
export interface HelloProps {
  username: string; // Must be text
  age?: number;     // Optional ('?'), must be a number if provided
}

// 2. Enforce the type contract on the function arguments
export const Hello: React.FC<HelloProps> = ({ username, age }) => {
  return (
    <div>
      <h1>Hello, {username}!</h1>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
};
