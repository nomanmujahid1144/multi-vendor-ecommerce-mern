export const SubmitButton = ({innerText}) => {
    return (
        <div className="mb-4">
            <button
                type="submit"
                className="py-2 px-5 inline-block tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
            >{innerText}</button>
        </div>
    )
}