import { Link } from "react-router";

export default function Home() {
    return (
        <div className="flex justify-center items-center h-screen">
            <button className="transform transition ease-in-out duration-200 hover:-translate-y-px bg-blue-950 text-white px-4 py-2 rounded-2xl shadow-md"><Link to="/shop">Shop</Link></button>
        </div>
    )
}