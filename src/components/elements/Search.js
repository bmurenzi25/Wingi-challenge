import { useState } from 'react';
import Input from '@/components/elements/Input'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');
  const onChange = (q) => {
      setText(q)
      getQuery(q)
  }
  return (
    <section className='search'>
      <form>
        <Input type='text' placeholder='Search Product' value={text}
          onChange={(e) => onChange(e.target.value)} />
      </form>
    </section>
  );
};

export default Search;
