import emptyProduct from '../../../../assets/empty-product/empty.png';


export const SomethingNotFound = ({ message }) => {
    return (
        <div className="flex justify-center py-10">
            <img alt="no image" src={emptyProduct} />
            <p className="flex items-center pl-3">{message}</p>
        </div>
    )
}