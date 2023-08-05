import { useLocation,useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
   function pathMathRoute(route){
    if(route === location.pathname){
        return true
    }
   }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50 '>
        <header className='flex justify-between items-center px-3 max-w-8xl max-auto'>
            <div>
                <img className="logo h-10 w-20  cursor-pointer px-0 -mt-5 items-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-rwvCYTS4D029xUrilLLKk7OHY0SmS3knQ&usqp=CAU" 
                alt="logo" onClick={()=>navigate("/")}/>
                <h1 className={`head ml-20 -mt-11  text-lg font-semibold cursor-pointer text-green-600 items-center -mb-2px`}>Medicure</h1>
            </div>
            <div className='flex'>
                <ul className='list flex space-x-5 items-center '>
                    <li className={`cursor-pointer py-3  text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${pathMathRoute("/")&& "text-black border-b-blue-600"}`}
                    onClick={()=>navigate("/")}>Home</li>
                    <li className={` cursor-pointer py-3 text-sm  font-semibold text-gray-500 border-b-[3px] border-b-transparent ${pathMathRoute("/products")&& "text-black border-b-blue-600"}`}
                    onClick={()=>navigate("/products")}>Products</li>
                    <li  className={`cursor-pointer py-3 text-sm  font-semibold text-gray-500 border-b-[3px] border-b-transparent ${pathMathRoute("/resources")&& "text-black border-b-blue-600"}`}
                    onClick={()=>navigate("/resources")}>Resources</li>
                    <li  className={`cursor-pointer py-3 text-sm  font-semibold text-gray-500 border-b-[3px] border-b-transparent ${pathMathRoute("/sign-in")&& "text-black border-b-blue-600"}`}
                    onClick={()=>navigate("/login")}>Login</li>
                      <li  className={`cursor-pointer py-3 text-sm  font-semibold text-gray-500 border-b-[3px] border-b-transparent ${pathMathRoute("/sign-in")&& "text-black border-b-blue-600"}`}
                    onClick={()=>navigate("/logout")}>Logout</li>
                    
                </ul>
            </div>
        </header>

    </div>
  )
}