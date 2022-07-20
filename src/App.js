import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Ecommerce,Calendar,ColorPicker,Orders,Customers,Employees,Editor,Kanban,Area,Pie,Bar,Financial,Stacked,Line,Pyramid,ColorMapping} from './pageIndex'

import "./App.css";
import{ Navbar }from "./components";
import { FiSettings } from "react-icons/fi";
import { Tooltip } from "@material-tailwind/react";

function App() {
  const activeMenu = true;
  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4 " style={{ zIndex: 1000 }}>
            <Tooltip content="Settings">
              <button
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </Tooltip>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              SideBar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg ">SideBar</div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-secondary-dark-bg bg-main-bg min-h-screen md:ml-72 w-full "
                : "dark:bg-secondary-dark-bg bg-main-bg w-full min-h-screen flex"
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
{/* Routes */}
            <div>
              <Routes>
{/* Dashboard */}
<Route path="/" element={<Ecommerce/>}/>
<Route path="/ecommerce" element={<Ecommerce/>}/>

{/* Pages */}
<Route path="/orders" element={<Orders />}/>
<Route path="/customers" element={<Customers/>}/>
<Route path="/employees" element={<Employees/>}/>

{/* Apps */}
<Route path="/kanban" element={<Kanban/>}/>
<Route path="/editor" element={<Editor/>}/>
<Route path="/color-picker" element={<ColorPicker/>}/>
<Route path="/calendar" element={<Calendar/>}/> 

{/* Charts */}
<Route path="/bar" element={<Bar/>}/>
<Route path="/line" element={<Line/>}/>
<Route path="/pie" element={<Pie/>}/>
<Route path="/stacked" element={<Stacked/>}/>
<Route path="/area" element={<Area/>}/> 
<Route path="/color-mapping" element={<ColorMapping/>}/>
<Route path="/financial" element={<Financial/>}/>
<Route path="/pyramid" element={<Pyramid/>}/>
</Routes>

            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
