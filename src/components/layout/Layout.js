import { Outlet } from "react-router-dom";
import { Footer } from "../ui/major-components/footer/Footer";
import { Navbar } from "../ui/major-components/nav/Navbar";



function Layout(props)  {
    return (
        <div className="">
            <Navbar />
            <main className="mt-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;