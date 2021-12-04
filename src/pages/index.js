import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Searchbar } from "../components/searchbar"
import { Table } from "../components/table"

const IndexPage = () => {
  const [asset, setAsset] = useState(10)
  const [plan, setPlan] = useState(null)

  useEffect(() => {
    const one = (asset * 0.003).toFixed(1)
    const two = (asset * 0.006).toFixed(1)
    const three = (asset * 0.013).toFixed(1)
    const four = (asset * 0.028).toFixed(1)
    const five = (asset * 0.058).toFixed(1)
    const six = (asset * 0.12).toFixed(1)
    const seven = (asset * 0.25).toFixed(1)
    const eight = (asset * 0.522).toFixed(1)

    const win1 = (one * 1.95).toFixed(3)
    const win2 = (two * 1.95).toFixed(3)
    const win3 = (three * 1.95).toFixed(3)
    const win4 = (four * 1.95).toFixed(3)
    const win5 = (five * 1.95).toFixed(3)
    const win6 = (six * 1.95).toFixed(3)
    const win7 = (seven * 1.95).toFixed(3)
    const win8 = (eight * 1.95).toFixed(3)

    setPlan([
      {
        trade: one,
        win: win1,
        net: (win1 - one).toFixed(3),
      },
      {
        trade: two,
        win: win2,
        net: (win2 - two - one).toFixed(3),
      },
      {
        trade: three,
        win: win3,
        net: (win3 - three - two - one).toFixed(3),
      },
      {
        trade: four,
        win: win4,
        net: (win4 - four - three - two - one).toFixed(3),
      },
      {
        trade: five,
        win: win5,
        net: (win5 - five - four - three - two - one).toFixed(3),
      },
      {
        trade: six,
        win: win6,
        net: (win6 - six - five - four - three - two - one).toFixed(3),
      },
      {
        trade: seven,
        win: win7,
        net: (win7 - seven - six - five - four - three - two - one).toFixed(3),
      },
      {
        trade: eight,
        win: win8,
        net: (
          win8 -
          eight -
          seven -
          six -
          five -
          four -
          three -
          two -
          one
        ).toFixed(3),
      },
    ])
  }, [asset])

  const updateTheAsset = event => {
    setAsset(event.target.value)
  }

  return (
    <Layout>
      <Seo title="HFC Pak table generator" />
      <Searchbar value={asset} setValue={updateTheAsset} />
      <Table amount={plan} asset={asset} />
    </Layout>
  )
}

export default IndexPage
