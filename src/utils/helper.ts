import jwt from 'jsonwebtoken';

export function formatError(error) {
    if (error instanceof Error) {
        return {
            status:400,
            error:error.toString()
        }
    }
    return error
}
export function createJWTToken(user){
    try {
        let token = jwt.sign(user, `${process.env.JWT_TOKEN_PRIVATE_KEY}`, {
            expiresIn: process.env.JWT_EXPIRATION,
        })
        return token
    }
    catch (error) {
        return formatError(error)
    }
}