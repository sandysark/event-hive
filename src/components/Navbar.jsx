export default function Navbar() {
    return (
        <nav className="flex flex-row justify-around mb-10">
            <h1 className="flex flex-row text-2xl text-bold gap-2">
                <span>Event</span>
                <span className="text-purple-800">Hive</span>
            </h1>
            <div className="flex flex-row gap-15">
                <button>Login</button>
                <button className="border bg-purple-700 text-white px-4 py-1">signup</button>

            </div>
        </nav>
    );

}