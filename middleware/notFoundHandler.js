import createError from 'http-errors'

const notFoundError = (req, res, next) => {
    next(createError(404, 'Error route not found'))
}

export default notFoundError