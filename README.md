## MATIC-BlockchainAssignment1

# Backend Engineer
We would appreciate if you could take the time to work on a small project. This assignment will help us gauge
your programming skills. In addition to that and irrespective of the outcome, it will also be an interesting
exercise for you to get to know more about the ethereum blockchain.
Goal of the project
We are building a mobile wallet that users use to make / view transactions on the ethereum blockchain. This
wallet queries a backend API to retrieve the transactions for that user.
Some details about ethereum blockchain to provide context:
- The Ethereum blockchain has sequentially numbered blocks
- A single block contains a lot of transactions
- Running the blockchain entails running a ​ node ​ which is a piece of software that verifies and includes
user signed transactions. This node may be run locally but for a lot of tasks it is ok to use remote
(hosted) node.
- A valid user address ethereum is a 20 byte value that is generated from a 32 byte randomly generated
private key.

# Basic outline of the steps to follow:
- Connect to an Ethereum node (hosted by Infura) using ​ web3js​ on the Kovan testnet. ​ Reference​ .
- You can use this blockchain testnet API endpoint on Infura:
kovan.infura.io/v3/5e66f831443940ed88e9adca82578c2b
- For Go developers, refer ​ https://goethereumbook.org/en/​ for starters.
- It is possible to get a particular ethereum block, using​ the​ ​ getBlock​ API.
- Index the data in a database of your choice that will serve as the datastore for the API requests. Most
important fields in a transaction for the purpose of this assignment will be ​ from, to, blockNumber
and transactionHash​ .
- We would like you to index at least 10,000 recent blocks.
- Construct an API to retrieve the user transactions, given the user address.
- Push all the code you write in a github repository and share it with us. Please include the instructions to
run the server in the README. Cookie points for a clean commit history that reflects your progress.
- (Optional) Bonus points for including a docker file to spin up everything together.
