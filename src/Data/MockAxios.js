const axiosMock = {
    post: () => {
        return Promise.resolve({
            data: { result: 'api call successful' }
        });
    },
    get: () => {
        return Promise.resolve({
            data: { result: 'initial data loaded from the server' }
        })
    }
};

export default axiosMock;