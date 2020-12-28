exports.handler = async event => {
    const subject = event.queryringStringParameters.name || 'world'
    return {
        statusCode: 200,
        body: `Hello ${subject}`,
    }
}