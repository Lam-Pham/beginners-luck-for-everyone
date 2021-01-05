import Container from './container'

export default function StaticFooter() {
  return (
    <footer className="static bottom-0 w-screen bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-4 flex flex-col lg:flex-row items-center">
          <h3 className="text-base lg:text-lg tracking-tighter leading-tight text-center lg:text-left">
            2020 | Beginner's Luck for Everyone
          </h3>
        </div>
      </Container>
    </footer>
  )
}