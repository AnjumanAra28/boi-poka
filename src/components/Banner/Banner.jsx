import bannerImg from '../../assets/books.jpg'
const Banner = () => {
  return (
    <div className="hero bg-base-200 max-h-max my-5 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse py-20">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className='max-w-lg'>
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          <button className="btn btn-success text-white mt-8">View the list</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
