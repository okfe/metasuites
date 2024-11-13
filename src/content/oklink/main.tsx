import '@common/styles/inject.common'
import { store } from '@src/store'
import { isAllowed } from '@common/utils'
import CHAIN from './constant/chain'
import GLOBAL from './constant/global'
import {
  initAddressPageScript,
  initAddressTxnsPageScript,
  initCommonPageScript,
  initTxPageScript
} from './page-scripts'

const execute = async () => {
  const supportWebList = await store.get('supportWebList')
  const allowed = isAllowed(Object.values(supportWebList))
  if (!allowed) return
  if (CHAIN.isETH || CHAIN.isBSC) {
    initCommonPageScript()
    if (GLOBAL.isAddress) {
      initAddressPageScript()
    }
    if (GLOBAL.isAddressTxns) {
      initAddressTxnsPageScript()
    }
  }
  if (GLOBAL.isTx) {
    initTxPageScript()
  }
}

export default execute