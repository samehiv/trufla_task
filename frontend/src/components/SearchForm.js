import React, { useState, useEffect } from 'react';

function SearchForm({ search, keyword }) {
  const [q, setQ] = useState('')

  useEffect(() => {
    setQ(keyword || '')
  }, [keyword])


  function onSubmit(e) {
    e.preventDefault()
    search(q)
  }


  return (
    <div className="mb-3">
      <form className="form-inline my-2 my-lg-0" onSubmit={onSubmit}>
        <input className="form-control mr-sm-2" type="search"
          placeholder="Search" name="q" value={q}
          onChange={(e) => setQ(e.target.value)} />

        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>

  )
}


export default SearchForm