import { useState } from "react";
import { books as bookData } from '../conatants/mockData'
import BookCard from "./BookCart";
import SideCard from "./SideCard";
import SearchBox from "./SearchBox";

function Books() {
  const [books, setBooks] = useState(bookData);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);
  const handleLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id != book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };
  const seacrhHandler = () => {
    if (search) {
      const newBooks = bookData.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setBooks(newBooks);
    } else {
      setBooks(bookData);
    }
  };
  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        seacrhHandler={seacrhHandler}
      />
      <div  >
      <h4 className="text-3xl font-bold ml-16 ">Books</h4>
        <div className="grid grid-cols-4 gap-2 justify-center items-center m-10 ">
          {books.map((book) => (
            <BookCard
              key={book.id}
              data={book}
              handleLikedList={handleLikedList}
            />
          ))}
        </div>
        <div className="bg-[#ffe7fb] m-10 ">
        <h4 className="text-3xl font-bold ml-16 pt-6 ">Favorites</h4>
          {!!liked.length && (
            <div className="grid grid-cols-4  justify-center items-cente m-10  ">
              {liked.map((book) => (
                <SideCard key={book.id} data={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Books;