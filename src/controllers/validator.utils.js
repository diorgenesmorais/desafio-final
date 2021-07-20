import validator from 'express-validator';

export const validation = (req) => {
    const erros = validator.validationResult(req);
    if (!erros.isEmpty()) {
        req.statusCode = 400;
        const details = erros.array().reduce((acc, { msg, location }) => {
            return `${acc}${location} - ${msg}, `
        }, '');
        throw new Error(details);
    }
}
