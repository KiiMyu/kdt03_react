import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function RouteNav() {
    const navigate = useNavigate();

    const HandleClick = () => {
        navigate("/p2?item1=수박&item2=오이"); // url 쿼리스트링
    }
  return (
    <div className="w-full h-40 flex justify-center items-center">
      <Link to="/" className="px-5 py-2 mx-2 border border-amber-900 rounded-sm hover:bg-amber-100 hover:cursor-pointer
      hover:font-bold">
        홈
      </Link>
      <Link to="/p1/사과/바나나" className="px-5 py-2 mx-2 border border-amber-900 rounded-sm hover:bg-amber-100 hover:cursor-pointer
      hover:font-bold">
        페이지1
      </Link>
      <div onClick={HandleClick} className="px-5 py-2 mx-2 border border-amber-900 rounded-sm hover:bg-amber-100 hover:cursor-pointer
      hover:font-bold">
        페이지2
      </div>
    </div>
  )
}
