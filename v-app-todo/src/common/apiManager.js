class apiManager{
    #headers =  new Headers({'Content-Type': 'application/json'});
    #methods = {get: 'GET', put: 'PUT', post: 'POST'};

    async getData(url){
        var options = {
            method: this.#methods.get,
            headers: this.#headers
        };        
        var res = await fetch(url, options);
        if(res.ok){
            return await res.json()
        }
        throw new Error('Failed to fetch data');
    }
    async postData(url, payload){
        var options = {
            method: this.#methods.post,
            headers: this.#headers,
            body: JSON.stringify(payload)
        };        
        var res = await fetch(url, options);
        if(res.ok){
            return await res.json()
        }
        throw new Error('Failed to post data');
    }
    async putData(url, payload){
        var options = {
            method: this.#methods.put,
            headers: this.#headers,
            body: JSON.stringify(payload)
        };  
        var res = await fetch(`${url}/${payload.id}`, options);
        if(res.ok){
            return await res.json()                                                                                                                                                                                                                                                                                                                                                                                             
        }
        throw new Error('Failed to put data');
    }
}

export default new apiManager();