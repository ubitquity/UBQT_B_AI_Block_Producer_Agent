from web3 import Web3
import requests

# Connect to BNB Chain RPC
web3 = Web3(Web3.HTTPProvider("https://bsc-dataseed.binance.org/"))

# Load UBQT_B token contract
UBQT_B_ABI = [...]  # Add full ABI here
UBQT_B_ADDRESS = "0x..."  # Contract address
contract = web3.eth.contract(address=UBQT_B_ADDRESS, abi=UBQT_B_ABI)

# Monitor Transfer Events
def handle_event(event):
    tx_hash = event['transactionHash'].hex()
    from_addr = event['args']['from']
    to_addr = event['args']['to']
    value = web3.fromWei(event['args']['value'], 'ether')
    print(f"Transfer: {value} UBQT_B from {from_addr} to {to_addr} in {tx_hash}")

event_filter = contract.events.Transfer.createFilter(fromBlock='latest')

while True:
    for event in event_filter.get_new_entries():
        handle_event(event)
