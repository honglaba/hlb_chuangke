export const ENV = process.env.NODE_ENV === 'development'

export const Domain = process.env.NODE_ENV === 'production' ? 'http://api.hlbck.com' : '/api_proxy'
