import { HeroSection } from "./hero-section/HeroSection"
import { BannerForRegisters } from "./restaurants/BannerForRegisters"
import { StaticBannerDisplay } from "./restaurants/DisplayCards/StaticBannerDisplay"
import { DisplayFlowInImages } from "./restaurants/FlowInImages/DisplayFlowInImages"

export const IndexLandingPage = () => {
    return (
        <>
            <HeroSection />
            <div className="MuiContainer-root MuiContainer-maxWidthLg mui-style-159cdno">
                <main className="pos-app w-full pb-6 transition-all duration-[.25s]" >
                    <DisplayFlowInImages />
                    <StaticBannerDisplay />
                    <BannerForRegisters />
                </main>
            </div>
        </>
    )
}