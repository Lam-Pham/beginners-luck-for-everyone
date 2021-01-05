export default function PostTitle({ children }) {
  return (
    <h1 className="mt-12 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tighter leading-tight md:leading-none mb-2 text-center">
      {children}
    </h1>
  )
}
