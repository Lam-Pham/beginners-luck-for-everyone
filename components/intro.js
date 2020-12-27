import Link from 'next/link'

export default function Intro() {
  return (
    <div>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-4">
        <h3 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
          Beginner's Luck for Everyone
        </h3>
        <Link href="/posts">
          <h4 className="underline text-center md:text-left text-lg mt-5 md:pl-8 transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110">
            meet the owners
          </h4>
        </Link>
        
      </section>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-4 mb-16 md:mb-32">
        <h4 className="text-base md:text-base italic tracking-tighter leading-tight md:pr-12">
          – a league built on filling the void of fantasy football
        </h4>
      </section>
    </div>
    
  )
}
