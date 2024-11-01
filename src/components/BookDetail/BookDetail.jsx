import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToWishList } from "../../utility/addToDb";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  const { bookId: currentBookId, image ,bookName,author,category,tags,review,publisher,totalPages,yearOfPublishing ,rating} = book;

  const handleMarkAsRead =(id)=>{
    addToStoredReadList(id)
  }

  const handleWishList =(id)=>{
    addToWishList(id)
  }

  return (
    <div className="hero bg-base-200  min-h-screen my-16 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={image}
          className="max-w-80 p-10 rounded-lg shadow-2xl mr-10"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{bookName}</h1>
          <p>By : {author}</p>
          <hr className=" my-2  bg-gray-300 border-dashed" />
          <p>{category}</p>
          <hr className=" my-2  bg-gray-300 border-dashed" />
          <p className="py-6">
            <span className="font-semibold">Review : </span>{review}
          </p>
          <div className="flex mb-5 gap-5">          
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-sm text-green-600 bg-green-100"
              >
                {tag}
              </button>
            ))}
          </div>
          <hr className=" my-2  bg-gray-300 border-dashed" />
          <p className="flex gap-3 flex-row"><span>Number of pages :</span><span className="font-semibold"> {totalPages}</span></p>
          <p className="flex gap-3 flex-row"><span>Publisher :</span><span className="font-semibold"> {publisher}</span></p>
          <p className="flex gap-3 flex-row"><span>Year of publishing :</span><span className="font-semibold"> {yearOfPublishing}</span></p>
          <p className="flex gap-3 flex-row"><span>Rating :</span><span className="font-semibold"> {rating}</span></p>
          <button onClick={ ()=>handleMarkAsRead(bookId)} className="btn btn-accent btn-outline mr-8 mt-6">Read</button>
          <button onClick={()=>handleWishList(bookId)} className="btn btn-accent mt-6">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
