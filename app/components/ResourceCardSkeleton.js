export default function ResourceCardSkeleton() {
  return (
    <div className="bg-modrinth-dark border border-gray-800 rounded-lg p-3 md:p-4 flex items-start gap-3 md:gap-4 animate-pulse">
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gray-800 flex-shrink-0"></div>
      
      <div className="flex-1 min-w-0">
        <div className="mb-1 flex items-baseline gap-2 flex-wrap">
          <div className="h-6 md:h-7 w-48 bg-gray-800 rounded"></div>
          <div className="h-4 w-24 bg-gray-800 rounded"></div>
        </div>
        <div className="h-4 w-full bg-gray-800 rounded mb-2"></div>
        <div className="h-4 w-3/4 bg-gray-800 rounded mb-2"></div>
        <div className="flex flex-wrap gap-1.5 items-center">
          <div className="h-6 w-20 bg-gray-800 rounded-full"></div>
          <div className="h-6 w-24 bg-gray-800 rounded-full"></div>
          <div className="h-6 w-16 bg-gray-800 rounded-full"></div>
        </div>
      </div>

      <div className="hidden md:flex flex-col justify-between items-end text-right flex-shrink-0 min-w-[110px] self-stretch">
        <div className="flex flex-col gap-2.5 items-end">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 bg-gray-800 rounded"></div>
            <div className="h-5 w-16 bg-gray-800 rounded"></div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 bg-gray-800 rounded"></div>
            <div className="h-5 w-16 bg-gray-800 rounded"></div>
          </div>
        </div>
        <div className="h-4 w-20 bg-gray-800 rounded"></div>
      </div>
    </div>
  )
}

