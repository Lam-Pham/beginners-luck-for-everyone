import Link from 'next/link'

export default function LogoHeader(current) {
  
  let pr = "hidden md:block cursor-pointer font-bold mt-10 hover:underline";
  let gm = "hidden md:block cursor-pointer font-bold md:ml-1 mt-5 md:mt-10 hover:underline";
  let lr = "hidden md:block cursor-pointer font-bold md:ml-1 mt-5 md:mt-10 hover:underline";
  let ap = "hidden md:block cursor-pointer font-bold mt-5 md:mt-10 hover:underline";
  
  switch(current.page) {
    case "pr":
      pr += " underline";
      break;
    case "gm":
      gm += " underline";
      break;
    case "lr":
      lr += " underline";
      break;
    case "ap":
      ap += " underline";
      break;
    default:
      break;
  }
  
  return (

    <div className="flex-col flex items-center md:grid md:grid-cols-6 md:mb-24">
       <div className="md:col-start-1 md:col-span-1 mt-10">
         <Link href="/">
           <img className="cursor-pointer w-20 h-24 transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110"src="https://www.datocms-assets.com/39720/1609114449-kobejumpshot-removebg-preview.png"></img>
         </Link>
       </div>
       <div className={pr}>
         <Link href="/posts/power-rankings">     
           <h2>POWER RANKINGS</h2>     
         </Link>
       </div>
       <div className={gm}>
         <Link href="/posts/gm-of-the-week">     
           <h2>GM OF THE WEEK</h2>     
         </Link>
       </div>
       <div className={lr}>
         <Link href="/posts/league-records">     
           <h2>LEAGUE RECORDS</h2>     
         </Link>
       </div>
       <div className={ap}>
         <Link href="/posts">     
           <h2>ALL POSTS</h2>     
         </Link>
       </div>
     </div> 
  )
}

// todo: consolidate functionality into other component using props