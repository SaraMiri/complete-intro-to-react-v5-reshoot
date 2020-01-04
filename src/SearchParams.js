import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("San Francisco, CA");
  return (
    <div className="search-params">
      <form>
        <h1>{location}</h1>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={event => {
              //This curly braces before setLocation are optional on this case
              setLocation(event.target.value);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
