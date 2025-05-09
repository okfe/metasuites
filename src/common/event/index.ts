import { Event } from 'chrome-extension-core'

import { SCOPE } from '@common/constants'
import type {
  AddressMethodsReq,
  PostAddressParams,
  PostAddressesParams,
  AddressRiskScoreReq,
  ComprehensiveSearchReq,
  ApprovalsRiskReq,
  QueryPrivateVariableReq,
  PostPrivateVariablesParams,
  MarkGptTxExplainReq,
  GptTxExplainReq,
  GetContractByAddressReq,
  GetContractByABIReq,
  SimulateTxParams,
  PostSignatureReq,
  PostContractVariableLogsReq,
  FundFlowParams,
  SimulationFeesParams,
  PostAddressTagsReq
} from '@common/api/types'
import type {
  REFRESH,
  GET_ADDRESS_RISK_SCORE,
  GET_ADDRESS_LABELS,
  GET_ADDRESS_METHODS,
  GET_ADDRESS_FUND_FLOW,
  GET_ADDRESS_FUNDER_RISK,
  GET_COMPREHENSIVE_SEARCH_RESULTS,
  GET_APPROVAL_RISK,
  GET_PRIVATE_VARIABLES,
  QUERY_PRIVATE_VARIABLE,
  GET_TOKEN_MARKETPLACES,
  GET_GPT_TX_EXPLAIN,
  MARK_GPT_TX_EXPLAIN,
  GET_PROXY_CONTRACT_LOG,
  GET_IMPL_LABELS,
  GET_CONSERVATIVE_BLOCK,
  GET_CONTRACT_BY_ADDRESS,
  GET_CONTRACT_BY_ABI,
  SIMULATE_TRANSACTION,
  GET_SIGNATURE_BY_SELECTOR,
  GET_LATEST_BLOCK,
  GET_CONTRACT_VARIABLE_LOGS,
  GET_CREATION_BLOCK,
  GET_CONTRACT_VARIABLE_LIST,
  GET_SIMULATION_FEES,
  POST_ADDRESS_TAGS
} from '@common/constants/event'

export type EventInfo = {
  [REFRESH]: boolean
  [GET_ADDRESS_RISK_SCORE]: AddressRiskScoreReq
  [GET_ADDRESS_LABELS]: PostAddressesParams
  [GET_ADDRESS_METHODS]: AddressMethodsReq
  [GET_ADDRESS_FUND_FLOW]: FundFlowParams
  [GET_ADDRESS_FUNDER_RISK]: PostAddressParams
  [GET_COMPREHENSIVE_SEARCH_RESULTS]: ComprehensiveSearchReq
  [GET_APPROVAL_RISK]: ApprovalsRiskReq
  [GET_PRIVATE_VARIABLES]: PostPrivateVariablesParams
  [QUERY_PRIVATE_VARIABLE]: QueryPrivateVariableReq
  [GET_TOKEN_MARKETPLACES]: PostAddressParams
  [GET_GPT_TX_EXPLAIN]: GptTxExplainReq
  [MARK_GPT_TX_EXPLAIN]: MarkGptTxExplainReq
  [GET_PROXY_CONTRACT_LOG]: PostAddressParams
  [GET_IMPL_LABELS]: PostAddressesParams
  [GET_CONSERVATIVE_BLOCK]: string
  [GET_CONTRACT_BY_ADDRESS]: GetContractByAddressReq
  [GET_CONTRACT_BY_ABI]: GetContractByABIReq
  [SIMULATE_TRANSACTION]: SimulateTxParams
  [GET_SIGNATURE_BY_SELECTOR]: PostSignatureReq
  [GET_LATEST_BLOCK]: string
  [GET_CONTRACT_VARIABLE_LOGS]: PostContractVariableLogsReq
  [GET_CREATION_BLOCK]: PostAddressParams
  [GET_CONTRACT_VARIABLE_LIST]: PostPrivateVariablesParams
  [GET_SIMULATION_FEES]: SimulationFeesParams
  [POST_ADDRESS_TAGS]: PostAddressTagsReq
}

export const chromeEvent = new Event<EventInfo>(SCOPE)
