const axiosMock = {
    get: () => {
        return Promise.resolve({
            data: { result: 'api call successful' }
        });
    }
};

export default axiosMock;