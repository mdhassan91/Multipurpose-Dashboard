import React from "react";

function Navbar() {
  return (
    <buttonside class="w-64" aria-label="Sidebar">
      <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <ul class="space-y-2">
          <h1 className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            Dashboard
          </h1>
          <li>
            <button class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span class="ml-3">Ecommerce</span>
            </button>
          </li>
        </ul>
        <ul class="space-y-2">
          <h1 className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            Pages
          </h1>
          <li>
            <button class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span class="ml-3">Orders</span>
            </button>
          </li>
          <li>
            <button class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span class="ml-3">Employees</span>
            </button>
          </li>
          <li>
            <button class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span class="ml-3">Customers</span>
            </button>
          </li>
        </ul>
        <ul class="space-y-2">
          <h1 className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            Apps
          </h1>
          <li>
            <button class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span class="ml-3">Calender</span>
            </button>
          </li>
          <li>
            <button class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span class="ml-3">Kanban</span>
            </button>
          </li>
          <li>
            <button class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span class="ml-3">Editor</span>
            </button>
          </li>
        </ul>

        <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <h1 className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            Charts
          </h1>
          <li>
            <button class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
              <span class="ml-4">Line</span>
            </button>
          </li>
          <li>
            <button class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
              <span class="ml-3">Area</span>
            </button>
          </li>
          <li>
            <button class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
              <span class="ml-3">Bar</span>
            </button>
          </li>
          <li>
            <button class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
              <span class="ml-3">Financial</span>
            </button>
          </li>
          <li>
            <button class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
              <span class="ml-3">Color Mapping</span>
            </button>
          </li>
          <li>
            <button class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
              <span class="ml-3">Pyramid</span>
            </button>
          </li>
          <li>
            <button class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
              <span class="ml-3">Stacked</span>
            </button>
          </li>
        </ul>
      </div>
    </buttonside>
  );
}

export default Navbar;
