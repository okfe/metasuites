import '@common/styles/inject.common'
import { BLOCKSCOUT_PAGES } from '@common/constants'
import { isAllowed, getChainSimpleName, getPageName } from '@common/utils'
import { store } from '@src/store'
import { initTxPageScript, initAddressPageScript } from './page-scripts'
import './styles/index'

export const initBlockscout = async () => {
  if (window.self !== window.top) {
    return // This page is embedded in an iframe
  }
  /** get user options */
  const supportWebList = await store.get('supportWebList')

  /** check whether the script is allowed to run on the current page  */
  const allowed = isAllowed(Object.values(supportWebList))

  /** get the necessary parameters required by the extension */
  const chain: string | undefined = getChainSimpleName()

  console.log('__>__', { supportWebList, allowed, chain })

  if (!allowed || !chain) return

  const pageName = getPageName()

  switch (pageName) {
    case BLOCKSCOUT_PAGES.TX.name:
      initTxPageScript(chain)
      break
    case BLOCKSCOUT_PAGES.ADDRESS.name:
      initAddressPageScript(chain)
      break
  }
}
