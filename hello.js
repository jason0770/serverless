exports.handler = async event => {
    const subject = event.queryringParameters.name || 'world'
    return {
        statusCode: 200,
        body: `Hello ${subject}`,
    }
}