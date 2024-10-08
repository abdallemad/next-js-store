'use client'
import { Input } from '../ui/input';
import { useSearchParams, useRouter } from 'next/navigation'; 
// useSearch => use with client component.
// searchParams => use with server component.
import { useDebouncedCallback } from 'use-debounce';
import { useState } from 'react';

const NavSearch = () => {
  const searchParams= useSearchParams();
  const {replace} = useRouter();
  const [search , setSearch] = useState(searchParams.get('search')?.toString() || '');
  
  const handleSearch = useDebouncedCallback((value:string)=>{
    const params = new URLSearchParams(searchParams)
    if(value) params.set('search',search)
    else params.delete('search');
    replace(`/products?${params.toString()}`)
  },500)
  return (
    <Input
      type='search'
      placeholder='search product...'
      className='max-w-xs dark:bg-muted '
      onChange={(e)=>{
        setSearch(e.target.value);
        handleSearch(e.target.value)
      }}
      value={search}
    />
  )
}

export default NavSearch
