import InvokeApi from '../../invokeApi'

export const getTodo = async () => {
    let requestObject = {
        method: 'GET',
        path: 'todos/1'
    };
    const result = await InvokeApi(requestObject);
    return result.data
};