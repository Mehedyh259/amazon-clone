import Image from 'next/image'
import { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/solid';

const SingleProduct = ({ product }) => {
    const [hasPrime, setHasPrime] = useState(null)

    useEffect(() => {
        setHasPrime(Math.random());
    }, [])

    const { id, title, price, description, category, image } = product;


    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10 rounded'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            <Image loading='lazy' src={image} height={200} width={200} objectFit="contain" />
            <h4 className='my-3'>{title}</h4>


            <p className='text-xs my-2 line-clamp-2'>{description}</p>
            <div className='mb-5'>
                <p>${price}</p>
            </div>

            {
                (hasPrime && hasPrime < 0.5) && (
                    <div className='flex space-x-2 -mt-5'>
                        <img className='w-12' src='https://links.papareact.com/fdw' alt='..' />
                        <p className='text-xs text-gray-500'>Free next-day Delivery</p>
                    </div>
                )
            }

            <button className='mt-auto button'>Add to Basket</button>

        </div>
    );
};

export default SingleProduct;