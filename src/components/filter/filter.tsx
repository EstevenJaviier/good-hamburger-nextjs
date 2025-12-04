type FilterType = "all" | "sandwich" | "extra";

export default function Filter({
  onChangeFilter,
}: {
  onChangeFilter: (type: FilterType) => void;
}) {
  return (
    <>
      <div className="flex gap-3 justify-center mt-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          onClick={() => onChangeFilter("all")}
        >
          Todos
        </button>

        <button
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          onClick={() => onChangeFilter("sandwich")}
        >
          Sandwiches
        </button>

        <button
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          onClick={() => onChangeFilter("extra")}
        >
          Extras
        </button>
      </div>
    </>
  );
}
