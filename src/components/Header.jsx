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
                <img className="h-10 w-20  cursor-pointer px-0 -mt-5 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-rwvCYTS4D029xUrilLLKk7OHY0SmS3knQ&usqp=CAU" 
                alt="logo" onClick={()=>navigate("/")}/>
                <h1 className={`ml-20 -mt-11 ml-16 text-lg font-semibold cursor-pointer text-green-600`}>Medicure</h1>
            </div>
            <div className='flex '>
                <ul className='flex space-x-5 mr-2'>
                    <li className={`cursor-pointer  py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${pathMathRoute("/")&& "text-black border-b-green-600"}`}
                    onClick={()=>navigate("/")}>Home</li>
                    <li className={` cursor-pointer py-3 text-sm  font-semibold text-gray-500 border-b-[3px] border-b-transparent ${pathMathRoute("/products")&& "text-black border-b-green-600"}`}
                    onClick={()=>navigate("/products")}>Products</li>
                    <li  className={`cursor-pointer py-3 text-sm  font-semibold text-gray-500 border-b-[3px] border-b-transparent ${pathMathRoute("/resources")&& "text-black border-b-green-600"}`}
                    onClick={()=>navigate("/resources")}>Resources</li>
                    <li  className={`cursor-pointer py-3 text-sm  font-semibold text-gray-500 border-b-[3px] border-b-transparent ${pathMathRoute("/sign-in")&& "text-black border-b-green-600"}`}
                    onClick={()=>navigate("/sign-in")}>Sign in</li>
                </ul>
            </div>
        </header>

    </div>
  )
}