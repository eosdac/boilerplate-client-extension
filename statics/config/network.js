export default {
  'dacId': 'light',

  'endpoints': [
    'https://jungle.eosdac.io',
    'https://api.jungle.alohaeos.com'
  ],

  'pricefeed': {
    api: 'newdex',
    newdex: { symbol: 'eosdactokens-eosdac-eos', endpoint: 'https://api.newdex.io/v1/ticker' }
  },

  'network': {
    'name': 'jungle',
    'blockchain': 'eos',
    'chainId': 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473'
  },

  'accounts': {
    'directory': 'dacdirectory'
  },

  'system_token': {
    'contract': 'eosio.token',
    'symbol': 'EOS',
    'precision': 4
  },

  'contracts': {
    'system_msig': {
      'name': 'eosio.msig'
    }
  },

  'financial_page_graphs': [
    {
      'account': 'eosdacserval',
      'contract': 'eosio.token',
      'symbol': 'EOS',
      'description':
            'The EOS Mainnet block producer account for eosDAC which receives Block Producer rewards.'
    },
    {
      'account': 'eosdacdoshhq',
      'contract': 'eosio.token',
      'symbol': 'EOS',
      'description':
            'The DAC owner account where DAC funds are secured and controlled by a 12-account multisig permission system of elected custodians.'
    },
    {
      'account': 'dacocoiogmbh',
      'contract': 'eosio.token',
      'symbol': 'EOS',
      'description':
            'The current eosDAC service provider account which manages payroll, employment contracts, and real-world interactions on behalf of the DAC.'
    },
    {
      'account': 'dacelections',
      'contract': 'kasdactokens',
      'symbol': 'KASDAC',
      'description': 'custodian contract description'
    }
  ],

  'api': {
    'dac_api': 'http://127.0.0.1:8383/v1/eosdac',
    'dac_ws': 'ws://api-jungle.eosdac.io:3030'
  },

  'external': {
    'homepage': 'https://eosdac.io',
    'explorer': 'https://jungle.bloks.io'
  }
}
