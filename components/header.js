import Link from 'next/link'

// export default function Header() {
//   return (
//     <section className="flex-col md:flex-row flex items-center md:justify-center mt-8 mb-16 md:mb-4">
//       <Link href="/">
//         <img className="w-20 h-24 transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110"src="https://www.datocms-assets.com/39720/1609012456-kobejumpshot.png"></img>
//       </Link>
//       <Link href="/">     
//         <h4 className="">Power Rankings</h4>     
//       </Link>
//       <Link href="/">     
//         <h4 className="">Meet the Owners</h4>     
//       </Link>
//     </section>
//   )
// }

export default function Header() {
  return (
    <div className="flex-col flex items-center sm:grid sm:grid-cols-7 sm:mb-24">
      <div className="sm:col-start-1 sm:col-span-1 mt-10">
        <Link href="/">
          <img className="cursor-pointer w-20 h-24 transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110"src="https://www.datocms-assets.com/39720/1609114449-kobejumpshot-removebg-preview.png"></img>
        </Link>
      </div>
      <div className="sm:cursor-pointer font-bold underline sm:col-start-2 sm:col-span-1 mt-10 sm:mt-10 transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110">
        <Link href="/posts/power-rankings">     
          <h2 className="">POWER RANKINGS</h2>     
        </Link>
      </div>
      <div className="sm:cursor-pointer font-bold underline sm:col-start-3 sm:col-span-1 sm:ml-1 mt-5 sm:mt-10 transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110">
        <Link href="/posts/gm-of-the-week">     
          <h2 className="">GM OF THE WEEK</h2>     
        </Link>
      </div>
      <div className="cursor-pointer font-bold underline sm:col-start-4 sm:col-span-1 mt-5 sm:mt-10 transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110">
        <Link href="/posts">     
          <h2 className="">ALL POSTS</h2>     
        </Link>
      </div>
    </div>
  )
}
