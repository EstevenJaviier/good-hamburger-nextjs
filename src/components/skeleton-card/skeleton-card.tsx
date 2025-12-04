export default function SkeletonCard() {
  return (
    <>
      <div className="bg-white shadow-sm border border-gray-200 p-3 rounded-lg animate-pulse">
        {/* name */}
        <div className="mb-3">
          <div className="h-3 w-20 bg-gray-200 rounded mb-2"></div>
          <div className="h-5 w-32 bg-gray-300 rounded"></div>
        </div>

        {/* price */}
        <div className="mb-4">
          <div className="h-3 w-16 bg-gray-200 rounded mb-2"></div>
          <div className="h-5 w-20 bg-gray-300 rounded"></div>
        </div>

        {/* button */}
        <div className="w-full h-10 bg-gray-300 rounded-xl"></div>
      </div>
    </>
  );
}
