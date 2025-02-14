import { useState } from 'react';
import SearchInput from './search-input';
import ProductList from './product-list';
import ContextDisplay from '../context/context-display';

function SearchPage() {

  const [isSubmitted, setSubmitted] = useState(false);
  const [search, setSearch] = useState('');
  const [scoped, setScoped] = useState(false);

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
    setSubmitted(false);
  }

  const onSubmit = () => {
    setSubmitted(true);
  }

  const onSetScoped = (event) => {
    console.log(event.target.checked);
    setScoped(event.target.checked == true);
  }

  return (
    <div className="App">
      <ContextDisplay />
      Enter search string to search for products:
      <p/>&nbsp;
        <SearchInput onChange={onChangeSearch} onSubmit={onSubmit} />
        &nbsp;<input type="checkbox" onChange={onSetScoped} /> Use Scoped Pricing <br></br>
        { isSubmitted && <ProductList search={search} scoped={scoped} /> }
      
    </div>
  );
}

export default SearchPage;