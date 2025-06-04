import { Facebook, Instagram, Linkedin } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-navy-blue text-white mt-40">
            <h1 className="flex justify-center text-4xl text-border gap-2"><span>Event</span><span className="text-blue-800">Hive</span></h1>
            <form className="flex justify-center mb-10 gap-3">
                <input className="border bg-white text-gray-600 px-20 py-3" type="email" placeholder="Enter your mail" name="email" />
                <button className="border-line-purple bg-purple-700 text-white px-10 py-2" type="submit">subscribe</button>
            </form>
            <div className="flex flex-row justify-center gap-4 mb-4">
                <span>Home</span>
                <span>About</span>
                <span>Service</span>
                <span>Get in Touch</span>
                <span>FAQs</span>
            </div>
            <hr />
            <div className="flex flex-row justify-center gap-10">
                <div className="flex flex-row justify-evenly py-4 absolute left-1 gap-4">
                    <button>English</button>
                    <button>French</button>
                    <button>Hindi</button>
                </div>
                <div className="flex flex-row gap-10 mt-5">
                    <Linkedin />
                    <Instagram />
                    <Facebook />
                </div>
                <div className="flex flex-row justify-end py-4  absolute right-1 gap-10">
                    <p>Non Copyrighted© 2025 Upload by EventHive</p>
                </div>

            </div>
        </footer>

    )

}
export default Footer