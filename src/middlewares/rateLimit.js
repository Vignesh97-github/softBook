import { rateLimit } from "express-rate-limit";

const authRateLimit = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    message:'Too many login attempts please try after 15 minutes',
	standardHeaders: true, // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    statusCode:429, // default 429
    handle: () => {
        // this function runs after limit is reached
    }
})

const globalRateLimit = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    message:'Too many attempts',
	standardHeaders: true, // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    statusCode:429, // default 429
    handle: () => {
        // this function runs after limit is reached
    }
})

export {authRateLimit, globalRateLimit}