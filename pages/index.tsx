import Link from 'next/link'
import Head from 'next/head'
import { ChangeEvent, useState } from 'react'
import { mockSearch, TableData } from '../services/mock'
import CustomInput from '../components/CustomInput'
import CustomTable from '../components/CustomTable'
import Container from '../components/Container'

const Home = () => {
  const [keyword, setKeyword] = useState<string>('')
  const [data, setData] = useState<TableData[] | null>([])

  const handleKeywordChange = async (ev: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = ev
    setData(null)
    const data = await mockSearch(value)
    setData(data)
    setKeyword(value)
  }

  return (
    <>
      <Head>
        <title>Optimization | EGANY x 200Lab</title>
      </Head>
      <Container>
        <Link href="/test">Go to Test page</Link>
        <label className="db mb1" htmlFor="search">
          Search
        </label>
        <CustomInput
          id="search"
          className="mb2"
          value={keyword}
          onChange={handleKeywordChange}
        />
        <br />
        <CustomTable data={data} />
      </Container>
    </>
  )
}

export default Home
