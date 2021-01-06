import Link from 'next/link'

export default function Header() {
  return (

    <div className="flex-col flex items-center md:grid md:grid-cols-6 md:mb-24">
       <div className="md:col-start-1 md:col-span-1 mt-10">
         <Link href="/">
           <img className="cursor-pointer w-20 h-24 transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110"src="https:www.datocms-assets.com/39720/1609114449-kobejumpshot-removebg-preview.png"></img>
         </Link>
       </div>
       <div className="md:cursor-pointer font-bold underline md:col-start-2 md:col-span-1 mt-10 md:mt-10 transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110">
         <Link href="/posts/power-rankings">     
           <h2 className="">POWER RANKINGS</h2>     
         </Link>
       </div>
       <div className="md:cursor-pointer font-bold underline md:col-start-3 md:col-span-1 md:ml-1 mt-5 md:mt-10 transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110">
         <Link href="/posts/gm-of-the-week">     
           <h2 className="">GM OF THE WEEK</h2>     
         </Link>
       </div>
       <div className="md:cursor-pointer font-bold underline md:col-start-4 md:col-span-1 md:ml-1 mt-5 md:mt-10 transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110">
         <Link href="/posts/league-records">     
           <h2 className="">LEAGUE RECORDS</h2>     
         </Link>
       </div>
       <div className="cursor-pointer font-bold underline md:col-start-5 md:col-span-1 mt-5 md:mt-10 transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110">
         <Link href="/posts">     
           <h2 className="">ALL POSTS</h2>     
         </Link>
       </div>
     </div> 
  )
}
