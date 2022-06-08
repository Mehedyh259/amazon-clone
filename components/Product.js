import Image from 'next/image'
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';


const Product = ({ product }) => {
    const { id, title, price, description, category, image } = product;
    const MAX_RATING = 5;
    const MIN_RATING = 1;
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )
    const dispatch = useDispatch()

    const [hasPrime] = useState(Math.random() < 0.5);

    const addItemToBasket = () => {
        // sending the product as a action to te redux store basket slice
        dispatch(addToBasket(product));
    }

    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10 rounded'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>

            <Image src={image} height={200} width={200} objectFit="contain" />
            <h4 className='my-3'>{title}</h4>
            <div className='flex'>
                {
                    Array(rating).fill().map((_, index) => {
                        return <StarIcon key={index} className='h-5 text-yellow-400' />
                    })
                }
            </div>
            <p className='text-xs my-2 line-clamp-2'>{description}</p>
            <div className='mb-5'>
                <p>${price}</p>
            </div>
            {
                hasPrime && (
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

export default Product;