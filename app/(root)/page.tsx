import React from 'react';
import { UserButton } from '@clerk/nextjs';

function SetupPage() {
  return (
    <div className="p-4 bg-black">
      <UserButton afterSignOutUrl='/' />
    </div>
  );
}

export default SetupPage;
