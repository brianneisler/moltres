import workerThreads from 'worker_threads'

const getWorkerId = () => workerThreads.threadId

export default getWorkerId
