import GalleryImage from './GalleryImage'

export const CardWorks = () => {
  return (
    <div className="flex gap-10">
        <GalleryImage />
          <div className="max-w-[40ch]">
              <h3 className="text-xl w-[30ch] font-bold">Job Tracker with Salary Prediction</h3>
              <p className="mt-2 text-sm text-neutral-200">A job application tracker with kanban board integrated with ML model to get salary prediction.</p>

            <div className="flex w-full gap-2 mt-6 text-sm">
              <a href="#" className="px-4 py-1 bg-red-900">&gt; Github &lt;</a>
              <a href="#" className="px-4 py-1 bg-red-900">&gt; Live Website &lt;</a>
            </div>
          </div>
      </div>
  )
}
