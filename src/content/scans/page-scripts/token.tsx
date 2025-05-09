import { ETHERSCAN_PAGES } from '@common/constants'
import { store } from '@src/store'
import { isSupportSimulator } from '@common/utils'

import {
  genCopyIconBtn,
  genEnhancedLabels,
  convertUTC2locale,
  genEnhancedSignatures,
  genDownloadSourceCodeBtn,
  genQuickViewSourceCodeBtn,
  genExportTableDataBtn,
  genContractPrivateVariables,
  formatWriteContractParams,
  genDecompileInDedaubBtn,
  genDecompileInEthervmBtn,
  genProxyContractLog,
  genSimulateBtn,
  genContractVariableLogsBtn,
  genDedaubStorageShortcut,
  genTransactionHashPhalconLink
} from '../feat-scripts'

const initTokenPageScript = async (chain: string) => {
  const {
    showCopyIcon,
    enhancedLabels,
    utc2locale,
    enhancedSignatures,
    contractSourcecode,
    dethCode,
    exportTableData,
    privateVariables,
    formatContractParams,
    decompileInDedaub,
    decompileInEthervm,
    proxyLogs,
    txSimulator,
    variableLogs,
    dedaubStorage,
    quick2Parsers
  } = await store.get('options')
  if (showCopyIcon) genCopyIconBtn(ETHERSCAN_PAGES.TOKEN.name)
  if (enhancedLabels) genEnhancedLabels(chain)
  if (utc2locale) convertUTC2locale(ETHERSCAN_PAGES.TOKEN.name)
  if (enhancedSignatures) genEnhancedSignatures(chain)
  if (contractSourcecode) genDownloadSourceCodeBtn(chain)
  if (dethCode) genQuickViewSourceCodeBtn(chain)
  if (exportTableData) genExportTableDataBtn(chain, ETHERSCAN_PAGES.TOKEN.name)
  if (privateVariables) genContractPrivateVariables(chain)
  if (formatContractParams) formatWriteContractParams()
  if (decompileInDedaub) genDecompileInDedaubBtn(chain)
  if (decompileInEthervm) genDecompileInEthervmBtn(chain)
  if (proxyLogs) genProxyContractLog(chain)
  if (dedaubStorage) genDedaubStorageShortcut(chain)
  if (txSimulator && isSupportSimulator(chain)) genSimulateBtn(chain)
  if (variableLogs) genContractVariableLogsBtn(chain)
  if (quick2Parsers) genTransactionHashPhalconLink(ETHERSCAN_PAGES.TOKEN.name)
}

export default initTokenPageScript
