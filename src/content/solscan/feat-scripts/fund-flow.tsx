import { createRoot } from 'react-dom/client'
import $ from 'jquery'

import { FundFlowButton } from '../components'

const renderFundFlowButton = async () => {
  $('#__metadock-modal-fund-flow__, #__metadock-fund-flow-btn__').remove()
  const mainAddressEl = $(
    '#__next > div:nth-of-type(1) > div:nth-of-type(3) > div:first-child > div:first-child > div:last-child > div:first-child > div:first-child > div'
  )
  if (mainAddressEl[0]) {
    const mainAddress = mainAddressEl[0].innerText.trim()
    const btnRootEl = $('<div id="__metadock-fund-flow-btn__"></div>')
    btnRootEl.css({ display: 'inline-block', verticalAlign: 'middle' })
    mainAddressEl?.append(btnRootEl)
    createRoot(btnRootEl[0]).render(
      <FundFlowButton chain="solana" mainAddress={mainAddress} />
    )
  }
}

export default renderFundFlowButton
