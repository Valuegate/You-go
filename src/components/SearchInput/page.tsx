const SearchInput = () => {
  return (
    <div className="relative bg-gray-50">
      <input
        type="text"
        placeholder="Search Product"
        className="w-full md:w-[695px] h-[64px] px-4 pl-10 round text-[16px] leading-8 font-normal placeholder-color focus:outline-none"
      />
      <span className="absolute inset-y-0 left-3 flex items-center pr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-6 w-6 text-black-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 101 101"
            id="search"
          >
            <path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path>
          </svg>
        </svg>
      </span>
    </div>
  );
};

export default SearchInput;