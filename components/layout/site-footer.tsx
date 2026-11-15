import { Container } from './container'

export function SiteFooter() {
  return (
    <footer>
      <Container className="py-14">
        {/* <--[Footer grid: brand block + 2 link columns]--> */}
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              {/* <--[Logo mark]--> */}
              {/* <--[Brand name]--> */}
            </div>
            <div className="mt-4 max-w-md">{/* <--[Description]--> */}</div>
            <div className="mt-5 flex gap-3">{/* <--[External link buttons]--> */}</div>
          </div>

          <div>
            {/* <--[Column heading]--> */}
            <ul className="mt-4 flex flex-col gap-2.5">{/* <--[Link items]--> */}</ul>
          </div>

          <div>
            {/* <--[Column heading]--> */}
            <ul className="mt-4 flex flex-col gap-2.5">{/* <--[Link items]--> */}</ul>
          </div>
        </div>

        {/* <--[Divider row]--> */}
        <div className="mt-12 flex items-center gap-2" aria-hidden="true">
          <span className="ml-2 flex-1" />
        </div>

        {/* <--[Credits row: attribution left, data sources right]--> */}
        <div className="mt-6 flex flex-col gap-2 md:flex-row md:justify-between">
          <p>{/* <--[Attribution]--> */}</p>
          <p>{/* <--[Data sources]--> */}</p>
        </div>
      </Container>
    </footer>
  )
}
