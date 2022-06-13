import Image from 'next/image';
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';


const Header = () => {

    const { data: session } = useSession();
    const handleSignOut = () => signOut({ redirect: false });
    const { push } = useRouter();

    const items = useSelector(selectItems);

    return (
        <header className='sticky top-0 z-50'>
            {/* Top Nav */}
            <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0 cursor-pointer'>
                    <Image
                        onClick={() => push('/')}
                        src='https://links.papareact.com/f90'
                        width={150}
                        height={40}
                        objectFit="contain"
                        alt='..'
                    />
                </div>
                {/* search field */}

                <div className='hidden sm:flex h-10 rounded-md flex-grow cursor-pointer items-center bg-yellow-400 hover:bg-yellow-500'>

                    <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type={'text'} />
                    <SearchIcon className='h-14 p-4' />
                </div>
                {/* right */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">

                    {
                        session ? <>
                            <div onClick={handleSignOut} className='link'>
                                <p>Hello {session?.user?.name.split(' ')[0] || 'user'}</p>
                                <p className='font-extrabold md:text-sm'>Account & List</p>
                            </div>
                        </> : <>
                            <div onClick={signIn} className='link'>
                                <p>Hello SignIn</p>
                                <p className='font-extrabold md:text-sm'>Account & List</p>
                            </div>
                        </>
                    }

                    <div className='link'>
                        <p>Returns</p>
                        <p className='font-extrabold md:text-sm'>& Orders</p>
                    </div>
                    <div className='link relative flex items-center'>
                        <span className='absolute top-0 right-0 md:right-11 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>{items.length}</span>
                        <ShoppingCartIcon onClick={() => push('/checkout')} className="h-10" />
                        <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
                    </div>
                </div>

            </div>

            {/* Bottom Nav */}
            <div className='flex items-center space-x-3 bg-amazon_blue-light text-white text-sm'>
                <p className='link flex items-center'>
                    <MenuIcon className='h-6 mr-1' />
                    All
                </p>
                <p className='link'>Prime Video</p>
                <p className='link'>Amazon Business</p>
                <p className='link'>Today&apos;s Deals</p>
                <p className='link hidden lg:inline-flex'>Electronics</p>
                <p className='link hidden lg:inline-flex'>Food & Grocery</p>
                <p className='link hidden lg:inline-flex'>Prime</p>
                <p className='link hidden lg:inline-flex'>Buy Again</p>
                <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
                <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
            </div>
        </header>
    );
};

export default Header;

