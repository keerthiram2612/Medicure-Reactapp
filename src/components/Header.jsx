
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
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl max-auto '>
            <div>
                <img className="h-24 cursor-pointer px-0 -mt-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6mwlduQ2t7__zOKwZKaqzg_powboEoYo2iBKSIPH7J2YbEhW5Wnbo0JwM__51tCZTcuI&usqp=CAU" 
                alt="logo" onClick={()=>navigate("/")}/>
                <h1 className={`ml-20 -mt-12 ml-16 text-lg font-semibold cursor-pointer`}>Medicure</h1>
            </div>
            <div>
                <ul className='flex space-x-5'>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${pathMathRoute("/")&& "text-black border-b-red-500"}`}
                    onClick={()=>navigate("/")}>Home</li>
                    <li className={` cursor-pointer py-3 text-sm  font-semibold text-gray-500 border-b-[3px] border-b-transparent ${pathMathRoute("/products")&& "text-black border-b-red-500"}`}
                    onClick={()=>navigate("/products")}>Products</li>
                    <li  className={`cursor-pointer py-3 text-sm  font-semibold text-gray-500 border-b-[3px] border-b-transparent ${pathMathRoute("/resources")&& "text-black border-b-red-500"}`}
                    onClick={()=>navigate("/resources")}>Resources</li>
                    <li  className={`cursor-pointer py-3 text-sm  font-semibold text-gray-500 border-b-[3px] border-b-transparent ${pathMathRoute("/sign-in")&& "text-black border-b-red-500"}`}
                    onClick={()=>navigate("/sign-in")}>Sign in</li>
                </ul>
            </div>
        </header>
       
    </div>
  )
}
