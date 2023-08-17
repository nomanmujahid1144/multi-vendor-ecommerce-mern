import sisthImage from '../../../../assets/1.jpg'
import { SectionHeading } from "../../minor-components/headings/SectionHeading"

export const Product = () => {
  return (
    <>
      <SectionHeading
          heading="Recent Products"
        />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
        <div className="card p-2 w-52">
          <img className="rounded-lg" src={sisthImage} alt="image" />
          <div className="pt-2">
            <p className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
              Duck Salad
            </p>
            <p className="text-xs text-slate-400 line-clamp-1 dark:text-navy-300">
              Description
            </p>
            <p className="text-right font-medium text-primary dark:text-accent-light">
              35.00 $
            </p>
          </div>
        </div>
        <div className="card p-2 w-52">
          <img className="rounded-lg" src={sisthImage} alt="image" />
          <div className="pt-2">
            <p className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
              Duck Salad
            </p>
            <p className="text-xs text-slate-400 line-clamp-1 dark:text-navy-300">
              Description
            </p>
            <p className="text-right font-medium text-primary dark:text-accent-light">
              35.00 $
            </p>
          </div>
        </div>
        <div className="card p-2 w-52">
          <img className="rounded-lg" src={sisthImage} alt="image" />
          <div className="pt-2">
            <p className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
              Duck Salad
            </p>
            <p className="text-xs text-slate-400 line-clamp-1 dark:text-navy-300">
              Description
            </p>
            <p className="text-right font-medium text-primary dark:text-accent-light">
              35.00 $
            </p>
          </div>
        </div>
      </div>
    </>
    )
}