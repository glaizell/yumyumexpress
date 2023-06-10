const SearchInput = ({ handleSearchInput, searchInput }) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form action="" onSubmit={submitHandler}>
      <input
        className="px-4 py-2 rounded-3xl outline-none border border-gray-300"
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={handleSearchInput}
      />
    </form>
  );
};
export default SearchInput;
