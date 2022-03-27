const dbUrls = {
    baseUrl: process.env.REPLICA_URL ? `${process.env.REPLICA_URL}/base?replicaSet=${process.env.REPLICA_NAME}` : "mongodb://127.0.0.1:27021,127.0.0.1:27022,127.0.0.1:27023/base?replicaSet=dbrs",
    userUrl: process.env.REPLICA_URL ? `${process.env.REPLICA_URL}/user?replicaSet=${process.env.REPLICA_NAME}` : "mongodb://127.0.0.1:27021,127.0.0.1:27022,127.0.0.1:27023/user?replicaSet=dbrs",
}

console.log(dbUrls)

module.exports = dbUrls

