export default function Pagination({ page, setPage, total }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
      <button
        disabled={page === 1}
        onClick={() => {
          setPage(page - 1);
          window.scrollTo(0, 0);
        }}
        className={`px-4 py-2 rounded-md text-sm font-medium transition cursor-pointer
          ${
            page === 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
      >
        Prev
      </button>

      <span className="px-4 py-2 text-sm font-semibold bg-gray-100 rounded-md">
        Page {page} of {total}
      </span>

      <button
        disabled={page === total}
            onClick={() => {setPage(page + 1), window.scrollTo(0, 0)}}
        className={`px-4 py-2 rounded-md text-sm font-medium transition cursor-pointer
          ${
            page === total
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
      >
        Next
      </button>
    </div>
  );
}
