export default function ViewToggle({ view, setView }) {
  return (
    <div className=" w-full p-4 md:p-8 flex gap-2 items-center justify-center sm:justify-start">
      <button
        onClick={() => setView('table')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer
      ${view === 'table'
            ? 'bg-blue-600 text-white shadow'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
      >
        Table
      </button>

      <button
        onClick={() => setView('card')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer
      ${view === 'card'
            ? 'bg-blue-600 text-white shadow'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
      >
        Card
      </button>
    </div>

  );
}