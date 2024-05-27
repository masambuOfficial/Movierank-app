import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";


function Categories() {
  return (
    <div className="md:max-w-[1100px] m-auto">
        <div className="border-b-2 border-[#ccc]">
        <h2 className="md:text-4xl text-2xl font-bold pb-3">Movie Categories</h2>
        <div className="dropdown">
          <button className="dropbtn flex bg-[#2FC4EC] px-9 py-3 text-base mb-2 z-[-1]">
            Select Genre 
            <span className="pl-3">
              <ChevronDownIcon className="size-6"/>
            </span>
          </button>
            <div className="dropdown-content">
                <Link to={'/action'}>Action</Link>
                <Link to={'/adventure'}>Adventure</Link>
                <Link to={'/animation'}>Animation</Link>
                <Link to={'/comedy'}>Comedy</Link>
                <Link to={'/crime'}>Crime</Link>
                <Link to={'/cocumentary'}>Documentary</Link>
                <Link to={'/drama'}>Drama</Link>
                <Link to={'/family'}>Family</Link>
                <Link to={'/fantasy'}>Fantasy</Link>
                <Link to={'/history'}>History</Link>
                <Link to={'/horror'}>Horror</Link>
                <Link to={'/music'}>Music</Link>
                <Link to={'/mystery'}>Mystery</Link>
                <Link to={'/romance'}>Romance</Link>
                <Link to={'/thriller'}>Thriller</Link>
                <Link to={'/tvMovie'}>TV Movie</Link>
                <Link to={'/sciFi'}>Sci-Fi</Link>
                <Link to={'/war'}>War</Link>
                <Link to={'/western'}>Western</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Categories