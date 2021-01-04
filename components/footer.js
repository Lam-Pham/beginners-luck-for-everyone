import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-6 flex flex-col lg:flex-row items-center">
          <h3 className="text-base lg:text-lg tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            2020 | Beginner's Luck for Everyone
          </h3>
        </div>
      </Container>
    </footer>
  )
}
