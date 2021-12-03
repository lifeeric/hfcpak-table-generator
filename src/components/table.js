import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./table.css"

export const Table = ({ amount, asset }) => {
  return (
    <div class="limiter">
      <h2>{asset}</h2>
      <div class="container-table100">
        <div class="wrap-table100">
          <div class="table100">
            <table>
              <thead>
                <tr class="table100-head">
                  <th class="column1">Order</th>
                  <th class="column2">Trade Amount</th>
                  <th class="column3">Win Amount</th>
                  <th class="column4">Net Profit</th>
                </tr>
              </thead>
              <tbody>
                {amount?.map((p, i) => (
                  <tr>
                    <td class="column1">Stage {i + 1} </td>
                    <td class="trade">{p.trade}</td>
                    <td class="column3">{p.win}</td>
                    <td class="column4">{p.net}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
