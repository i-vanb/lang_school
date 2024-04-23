/**
 * @description Public routes
 * An array of public routes that can be accessed without authentication
 * @type {Array<string>}
 */
export const publicRoutes = [
  ""
]


/**
 * @description Auth routes
 * An array of routes that used for authentication
 * @type {Array<string>}
 */
export const authRoutes = [
  "/auth/signin", "/auth/signup"
]


/**
 * @description API prefix for auth
 * A string that represents the prefix for the auth API
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"


/**
 * @description default redirect after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard"

