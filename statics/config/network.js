export default {
  'dacName': 'Example DAC',
  'dacId': 'eos.dac',

  'network': {
    'name': 'jungle',
    'blockchain': 'eos',
    'host': 'jungle2.cryptolions.io',
    'port': 443,
    'protocol': 'https',
    'chainId': 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473'
  },

  'accounts': {
    'directory': 'dacdirectory',
    'treasuryAccount': {
      'name': 'eosdacdoshhq'
    },
    'authAccount': {
      'name': 'dacauthority'
    }
  },

  'contracts': {
    'token': {
      'name': 'kasdactokens',
      'symbol': 'KASDAC'
    },
    'system_token': {
      'name': 'eosio.token',
      'symbol': 'EOS',
      'decimals': 4
    },
    'custodian': {
      'name': 'dacelections',
      'memo': 'dacelections',
      'enable_voting': true
    },
    'bot': {
      'name': 'piecesnbitss'
    },
    'system_msig': {
      'name': 'eosio.msig'
    },
    'dac_msig': {
      'name': 'dacmultisigs'
    },
    'wpproposal': {
      'name': 'dacproposals'
    },
    'escrow': {
      'name': 'eosdacescrow'
    },
    'directory': {
      'name': 'dacdirectory'
    },
    'referendum': {
      'name': 'eosdacvoices'
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
    'default_eos_node': 'https://jungle2.cryptolions.io:443',
    'bpnodes': 'https://eosdac.io/topnodes.json',
    'dac_api': 'http://127.0.0.1:8383/v1/eosdac'

  },

  'external': {
    'homepage': 'https://eosdac.io',
    'explorer': 'https://jungle.bloks.io'
  }
}
