'use client'
import { scrapeAndStoreProduct } from '@/lib/actions';
import React, { FormEvent, useState } from 'react'

const isValidAmazonProductURL=(url:string)=>{
    try {
        const parsedUrl=new URL(url);
        const hostname=parsedUrl.hostname;

        //Check if the hostname conatins amazon.com

        if(hostname.includes('amazon.com')||hostname.includes('amazon.')||hostname.endsWith('amazon'))
        {
            return true
        }
    } catch (error) {
        return false
    }
}

const SearchBar = () => {

    const [searchPrompt, setSearchPrompt] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit=async(event:FormEvent<HTMLFormElement>)=>
    {
        event.preventDefault();

        const isValidLink=isValidAmazonProductURL(searchPrompt);

        // alert(isValidLink?'Valid Link':'Invalid Link')
        if(!isValidLink) return alert('Please Provide a Valid Amazon Link')
        
        try {
            setIsLoading(true)

            //Scrape the first product

            const product=await scrapeAndStoreProduct(searchPrompt);
        } catch (error) {
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    }


  return (
    <form className='flex flex-wrap gap-4 mt-12 ' onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Product Link' className='searchbar-input' onChange={(e)=> setSearchPrompt(e.target.value) } />
        <button type='submit' className='searchbar-btn' disabled={searchPrompt === ''} >{isLoading?'Searching...':'Search'}</button>
    </form>
  )
}

export default SearchBar