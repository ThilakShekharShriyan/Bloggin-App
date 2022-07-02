import React,{useContext} from 'react'
import Link from 'next/link'


const categories = [
    {name:'React',slug:'react'},
    {name:'React1',slug:'react1'},
    {name:'React12',slug:'react12'},
];

const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8 '>
        <div className="border-b w-full inline-block border-blue-400 py-8">
            <div className='md:float-left block'>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-4xl text-white'>
                        GraphCMS

                    </span>

                </Link>

            </div>
            <div className=''>
                {categories.map((category)=>(
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                            {category.name}

                        </span>
                    </Link>
                ))}
               
            </div>
        </div> 

    </div>
  )
}

export default Header