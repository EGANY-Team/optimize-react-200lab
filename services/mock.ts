export type TableData = {
  id: string
  title: string
  description: string
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function mockSearch(keyword: string): Promise<TableData[]> {
  const delay = Math.ceil(Math.random() * 1000)

  console.log(
    '[mockSearch] Search for ',
    keyword || '<blank>',
    ' with ',
    delay,
    'ms delay'
  )

  await sleep(delay)

  if (!keyword) return []

  return Array.from({ length: 50 }).map((_, index) => {
    const count = index + 1

    return {
      id: 'item' + count,
      title: keyword + ' ' + count,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus sem tincidunt, elementum orci id, gravida metus.<br/><br/>Vivamus vehicula nulla sed elit vulputate egestas. Etiam sit amet varius erat, eu sodales ipsum.',
    }
  })
}
