import { UserButton } from '@clerk/nextjs';

import { MainNav } from '@/components/main-nav';

function Navbar() {
  return (
    <div className="border-b ">
      <div className="flex h-16 items-center px-4">
        <div>This will be a store switcher</div>
        <MainNav className='mx-6'/>
        <div className="ml-auto flex items-center scale-x-4">
          <UserButton afterSignOutUrl="/" />
          MainNav
        </div>
      </div>
    </div>
  );
}

export default Navbar;
