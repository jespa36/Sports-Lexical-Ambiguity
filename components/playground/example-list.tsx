export function ExampleList({ onPick }: { onPick: (text: string) => void }) {
  void onPick

  return (
    <div className="flex flex-col gap-3 p-4 md:p-6">
      {/* <--[Heading]--> */}
      <h2 />
      {/* <--[Example buttons × N]--> */}
      <ul className="flex flex-col gap-3">
        {[0, 1, 2, 3].map((i) => (
          <li key={i}>
            <button type="button" className="flex w-full flex-col gap-1 p-3">
              {/* <--[Example text]--> */}
              <span />
              {/* <--[Example tags]--> */}
              <span />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
