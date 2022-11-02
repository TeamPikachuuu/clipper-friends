import React from 'react'

const Search = () => {
  return (
    <section className='search'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Search</h1>
          <p className='lead'>
            Enter your client's username here:
          </p>
          <div className='client'>
          <input className='clientUsername'></input>
          <button>Submit</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Search