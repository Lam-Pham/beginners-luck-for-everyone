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
    <div className="grid grid-cols-8 mt-8 mb-24">
      <div className="col-start-1 col-span-1">
        <Link href="/">
          <img className="cursor-pointer w-20 h-24 transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110"src="https://www.datocms-assets.com/39720/1609012456-kobejumpshot.png"></img>
        </Link>
      </div>
      <div className=" cursor-pointer font-bold underline col-start-4 col-span-1 mt-10 transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110">
        <Link href="/">     
          <h3 className="">POWER RANKINGS</h3>     
        </Link>
      </div>
      <div className="cursor-pointer font-bold underline col-start-5 col-span-2 ml-5 mt-10 transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110">
        <Link href="/">     
          <h3 className="">MEET THE OWNERS</h3>     
        </Link>
      </div>

    </div>
  )
}
