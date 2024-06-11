import {useRef, useState} from "react";

export default function SearchableList({items, children, itemKeyFn}) {

  const [searchTerm, setSearchTerm] = useState('');

  const lastChange = useRef();

  const handleChange = (e) => {

    // debouncing
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchTerm(e.target.value);
    }, 500);
  }

  const searchResult = items.filter((item) => {
    return JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase());
  })

  return (
      <div className="searchable-list">
        <input type="search" placeholder="search" onChange={handleChange}/>
        <ul>
          {searchResult.map((item) => {
            return <li key={itemKeyFn(item)}>
              {children(item)}
            </li>
          })}
        </ul>
      </div>
  )
}
