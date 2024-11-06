import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

function BookCard({ data, handleLikedList }) {
  const { title, author, image, language, pages } = data;
  const [like, setLike] = useState(false);
  
  const likeHandler = () => {
    handleLikedList(data, like);
    setLike((prevLike) => !prevLike);
  };

  return (
    
    <div className="relative flex flex-col items-center shadow-md shadow-slate-400 rounded-lg m-6 p-6 h-80 w-80 ">
      <button
        onClick={likeHandler}
        className="absolute top-2 right-2"
        aria-label={like ? "Unlike" : "Like"}
      >
        <AiFillHeart color={like ? "red" : "#e0e0e0"} fontSize="1.8rem" />
      </button>

      <img src={image} alt={title} className="mb-2" />
      <h3 className="text-center">{title}</h3>
      <p className="text-center">{author}</p>
      <div className="flex justify-center">
        <span className="mr-2">{language}</span>
        <span>{pages} pages</span>
      </div>
    </div>
  );
}

export default BookCard;