import { BellIcon, UserIcon } from "@heroicons/react/24/outline";

const Header = () => {
    return (
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your system</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <BellIcon className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <UserIcon className="w-5 h-5" />
          </button>
        </div>
      </header>
    );
  };
  
  export default Header;