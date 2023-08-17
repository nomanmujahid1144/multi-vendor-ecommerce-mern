import backgroundImage from '../../../../assets/bg01.jpg';

export const Background = ({ children }) => {
    return (
        <section style={{backgroundImage : `url(${backgroundImage})`}} className="md:h-screen py-36 flex items-center bg-no-repeat bg-center bg-cover">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
            {children}
        </section>
    )
}