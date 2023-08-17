import { Footer } from "../ui/major-components/footer/Footer";
import { Navbar } from "../ui/major-components/nav/Navbar";
import { NewsLetter } from "../ui/minor-components/newsletter/NewsLetter";



function Layout(props)  {
    return (
        <div className="">
            <Navbar />
            <main >{props.children}</main>
            {/* <NewsLetter /> */}
            <Footer />
        </div>
    )
}

export default Layout;