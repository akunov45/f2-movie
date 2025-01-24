

import Input from '../UI/Input/Input'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className='bg-[#131416] text-white pb-[150px] pt-[48px]'>
        <div className='app-container'>
            <h3 className='text-[24px] mb-[15px]'>Поиск по сайту</h3>
           
            <p className='w-[385px] mb-[60px]'> На нашем сайте вы найдете подходящие вам фильмы и сериалы
            </p>

            <div className='flex items-center rounded-[10px] pr-[20px]  bg-[#1A1A1A]'>
                <Input hintText="Поиск..."  />
                <CiSearch color='red' className='text-[33px] cursor-pointer' />
            </div>
            
        </div>
    </div>
  )
}

export default Search