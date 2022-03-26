const dbUrls = {
    baseUrl: `${process.env.REPLICA_URL}/base?replicaSet=${process.env.REPLICA_NAME}`,
    userUrl: `${process.env.REPLICA_URL}/user?replicaSet=${process.env.REPLICA_NAME}`,
}

console.log(dbUrls)

module.exports = dbUrls

