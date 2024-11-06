import { IoSearchSharp } from "react-icons/io5";

function SearchBox({ search, setSearch, seacrhHandler }) {
  return (
    <div className="flex justify-center  shadow-md shadow-slate-400  rounded-lg m-12 p-4 " >
      <input
        type="text"
        placeholder="Search Title"
        value={search}
        onChange={(event) => setSearch(event.target.value.toLowerCase().trim())}
        className="border-none w-full"
      />
      <button onClick={seacrhHandler}>
        <IoSearchSharp />
      </button>
    </div>
  );
}
export default SearchBox;