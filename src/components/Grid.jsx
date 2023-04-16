import React, { useState } from 'react'

const Grid = ({data}) => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState([]);

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= data.length / 10 && selectedPage !== page) {
      setPage(selectedPage)
    }
  }
  const handleSearch = (event) => {
    setSearch([...data].filter(prod => prod.title.toUpperCase().includes(event.target.value.toUpperCase())))
    console.log(search)
  }

  return (
  <>
  {data.length > 0 && <>
    <input type='text' onChange={handleSearch}></input>
    <section className='w-full h-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
        {data.slice(page * 10 - 10, page * 10).map((prod) => (
          <div className="cursor-pointer transition-all shadow-sm hover:shadow-md transition-all" key={prod.id}>
            <img className="object-cover h-1/2" src={prod.thumbnail} alt={prod.title} /> {/* alt is imp */}
            <span>
              {prod.title}
            </span>
            <p>
              {prod.description}
            </p>
          </div>
        ))}
    </section>
    <div className="pagination">
        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>

        {[...Array(data.length / 10)].map((_, i) => {
          return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
        })}

        <span onClick={() => selectPageHandler(page + 1)} className={page < data.length / 10 ? "" : "pagination__disable"}>▶</span>
    </div>
  </>}
  </>
  );
}

export default Grid