import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function Container({ children }: Props) {
  return (
    <main className="mw7 mt6 center-l sans-serif">
      <h1>Optimization | EGANY x 200Lab</h1>
      <section className="pa4 ba b--black-10 br2 overflow-y-auto wrapper">
        {children}
      </section>
      <style jsx>{`
        .wrapper {
          box-shadow: 0 0 13px rgba(127, 127, 127, 0.2);
        }
      `}</style>
    </main>
  )
}

export default Container
