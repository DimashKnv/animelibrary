export function Search({ searchAnime, setSearchAnime, searchAxios }) {
  return (
    <div className="search_cont">
      <input
        type="text"
        onChange={(e) => {
          setSearchAnime(e.target.value);
        }}
        placeholder="Search Anime..."
        value={searchAnime}
      />
      <button
        onClick={() => {
          searchAxios();
        }}
      >
        Search
      </button>
    </div>
  );
}
