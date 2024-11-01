import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../utility/addToDb";
import { useEffect, useState } from "react";
import Book from "../Book/Book";

const ListedBooks = () => {
  const allBooks = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  const [wishListBooks, setWishListBooks] = useState([]);
  const [sort,setSort]=useState([]);

  useEffect(() => {
    const listedReadBooks = getStoredReadList();
    const listedReadBooksInt = listedReadBooks.map((id) => parseInt(id));
    const readBookList = allBooks.filter((book) =>
      listedReadBooksInt.includes(book.bookId)
    );
    setReadBooks(readBookList);

    const bookOfWishList = getStoredWishList();
    const bookOfWishListInt = bookOfWishList.map((id) => parseInt(id));
    const listedWishBooks = allBooks.filter((book) =>
      bookOfWishListInt.includes(book.bookId)
    );
    setWishListBooks(listedWishBooks);
  }, []);

  const handleSort =(sortType)=>{
     setSort(sortType)
     if(sortType==='No of Pages'){
        const sortedReadList  = [...readBooks].sort((a,b)=>a.totalPages-b.totalPages);
        setReadBooks(sortedReadList)
     }
     if(sortType==='Ratings'){
        const sortedReadList = [...readBooks].sort((a,b)=>a.rating-b.rating);
        setReadBooks(sortedReadList)
     }
  }

  return (
    <div>
      <h3 className="text-4xl text-center my-5">Listed Books</h3>

      <div className="text-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            {
                sort?`Sort By ${sort}` : 'Sort By'
            }
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li onClick={()=>handleSort('Ratings')}>
              <a>Ratings</a>
            </li>
            <li onClick={()=>handleSort('No of Pages')}>
              <a>No of Pages</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs className="my-10">
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {readBooks.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {wishListBooks.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
