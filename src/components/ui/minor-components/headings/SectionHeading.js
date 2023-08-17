export const SectionHeading = ({heading}) => {
    return (
        <div className="flex mb-7 mt-5 items-center justify-between">
            <p className="text-xl font-medium text-slate-700 dark:text-navy-100">
            {heading}
            </p>
        </div>
    )
}