import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId, bookName, author, image, tags, category,totalPages,rating} = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-80 shadow-xl p-6 rounded-2xl">
        <figure className="bg-base-300 rounded-2xl">
          <img src={image} alt={bookName} className="p-6 h-[180px]" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between gap-5">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-sm text-green-600 bg-green-100"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>
          <hr className="my-2 bg-gray-300 border-dashed" />
          <div className="card-actions justify-center gap-5">
            <div>{category}</div>
            <h2>{totalPages}</h2>
            <h2>{rating}</h2>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-100"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
