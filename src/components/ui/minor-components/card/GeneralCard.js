export const GeneralCard = ({children}) => {
    return (
        <section className="m-0 landing-inline-1 section-gap">
            <div className="container">
                <div className="card __card">
                    <div className="card-body">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}