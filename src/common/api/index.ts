import qs from 'qs'

import request, { type BscResponse } from './request'
import type {
  AddressMethodsReq,
  RiskScore,
  PostAddressParams,
  AddressRiskScoreReq,
  AddressLabel,
  MethodLabel,
  FundFlowRes,
  AddressFunderRiskRes,
  ComprehensiveSearchReq,
  SearchResultItem,
  ApprovalsRiskReq,
  ApprovalRisk,
  PostAddressesParams,
  PrivateVariableArgument,
  QueryPrivateVariableReq,
  PrivateVariablesRes,
  PostPrivateVariablesParams,
  TokenMarketplacesRes,
  GptTxExplainRes,
  MarkGptTxExplainReq,
  ProxyContractLog,
  GptTxExplainReq,
  VerifiedContractData,
  SimulateTxParams,
  GetContractByAddressReq,
  GetContractByABIReq,
  PostSignatureReq,
  CreationBlock,
  PostContractVariableLogsReq,
  ContractVariableLog,
  ContractVariableListItem,
  SimulationFeesParams,
  PostAddressTagsReq
} from './types'

export default {
  getAddressRiskScore: (params: AddressRiskScoreReq) =>
    request
      .post('api/v1/address-risk-score', { json: params })
      .json<BscResponse<RiskScore[]>>(),
  getAddressLabels: (params: PostAddressesParams) =>
    request
      .post('api/v1/address-label', { json: params })
      .json<BscResponse<AddressLabel[]>>(),
  getAddressMethods: (params: AddressMethodsReq) =>
    request
      .post('api/v1/address-method', { json: params })
      .json<BscResponse<MethodLabel[]>>(),
  getAddressFundFlow: (params: PostAddressParams) =>
    request
      .post('api/v1/fund-flow', {
        json: params
      })
      .json<BscResponse<FundFlowRes>>(),
  getAddressFunderRisk: (params: PostAddressParams) =>
    request
      .post('api/v1/address-funder-risk', { json: params })
      .json<BscResponse<AddressFunderRiskRes>>(),
  getComprehensiveSearchResults: (params: ComprehensiveSearchReq) =>
    request
      .post('api/v1/comprehensive-search', { json: params })
      .json<BscResponse<SearchResultItem[]>>(),
  getApprovalRisk: (params: ApprovalsRiskReq) =>
    request
      .post('api/v1/approve-risk', { json: params })
      .json<BscResponse<ApprovalRisk[]>>(),
  getPrivateVariables: (params: PostPrivateVariablesParams) =>
    request
      .post('api/v1/private-variable/list', { json: params })
      .json<BscResponse<PrivateVariablesRes>>(),
  queryPrivateVariable: (params: QueryPrivateVariableReq) =>
    request
      .post('api/v1/private-variable/query', { json: params })
      .json<BscResponse<PrivateVariableArgument>>(),
  getTokenMarketplaces: (params: PostAddressParams) =>
    request
      .post('api/v1/token-market/list', { json: params })
      .json<BscResponse<TokenMarketplacesRes>>(),
  getGptTxExplain: (params: GptTxExplainReq) =>
    request
      .post('api/v1/explain/tx', { json: params })
      .json<BscResponse<GptTxExplainRes>>(),
  markGptTxExplain: (params: MarkGptTxExplainReq) =>
    request
      .post('api/v1/gpt-explain/mark', { json: params })
      .json<BscResponse<GptTxExplainRes>>(),
  getProxyContractLog: (params: PostAddressParams) =>
    request
      .post('api/v1/contract/upgrades', { json: params })
      .json<BscResponse<ProxyContractLog[]>>(),
  getImplLabels: (params: PostAddressesParams) =>
    request
      .post('api/v1/address/impl-label', { json: params })
      .json<BscResponse<AddressLabel[]>>(),
  /** The supported blocks by evm.storage may experience delays, so the latest block cannot be obtained. */
  getConservativeBlock: (chain: string) =>
    request.get(`api/v1/${chain}/block`).json<BscResponse<{ block: number }>>(),
  getContractByAddress: ({
    address,
    chain,
    callData
  }: GetContractByAddressReq) =>
    request
      .post('api/v1/simulation/verify', {
        json: { address, chain, callData }
      })
      .json<BscResponse<VerifiedContractData>>(),
  getContractByABI: ({ abi, callData }: GetContractByABIReq) =>
    request
      .post('api/v1/simulation/decode', {
        json: { abi, callData }
      })
      .json<BscResponse<VerifiedContractData>>(),
  /** 模拟交易api post */
  simulateTransaction: (params: SimulateTxParams) =>
    request
      .post('api/v1/simulation/simulator', { json: params })
      .json<BscResponse<{ key: string }>>(),
  getSignatureBySelector: (params: PostSignatureReq) =>
    request
      .post('api/v1/simulation/sig', {
        json: params
      })
      .json<BscResponse<{ sig: string }>>(),
  getLatestBlock: (chain: string) =>
    request
      .get(`api/v1/${chain}/latest-block`)
      .json<BscResponse<{ block: number }>>(),
  getCreationBlock: ({ chain, address }: PostAddressParams) =>
    request
      .get(`api/v1/${chain}/${address}/creation`)
      .json<BscResponse<CreationBlock>>(),
  getContractVariableLogs: ({
    chain,
    address,
    ...rest
  }: PostContractVariableLogsReq) =>
    request
      .post(`api/v1/${chain}/${address}/variable-logs`, {
        json: rest
      })
      .json<BscResponse<ContractVariableLog[]>>(),
  getContractVariableList: (params: PostPrivateVariablesParams) =>
    request
      .post('api/v1/variable/list', {
        json: params
      })
      .json<BscResponse<ContractVariableListItem[]>>(),
  getSourceCodeMD5: (code: string) =>
    request
      .post('api/v1/source-code/hash', {
        json: { code }
      })
      .json<BscResponse<string>>(),
  getSimulationFees: ({
    chain,
    isPrerun = true,
    blockNumber
  }: SimulationFeesParams) => {
    const queryString = qs.stringify(
      { isPrerun, blockNumber: isPrerun ? null : blockNumber },
      {
        skipNulls: true
      }
    )
    return request
      .get(`api/v1/simulation/${chain}/base-fee?${queryString}`)
      .json<BscResponse<{ baseFee: string }>>()
  },
  postAddressTags: (params: PostAddressTagsReq) =>
    request
      .post('api/v1/address-tags', { json: params })
      .json<BscResponse<void>>()
}
