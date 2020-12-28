exports.handler = async event => {
    const subject = event.queryringParameters.name
    return {
        statusCode: 200,
        body: `Hello ${subject}`
    }
}