/**
 * Created by tarva on 31.10.2017.
 */
export default class HttpCall {

    static get(url, callback) {
        this.apiCall(url, "GET", callback, null);
    }

    static post(url, callback, data) {
        this.apiCall(url, "POST", callback, data);
    }

    static put(url, callback, data) {
        this.apiCall(url, "PUT", callback, data);
    }

    static delete(url, callback) {
        this.apiCall(url, "DELETE", callback);
    }

    static apiCall(url, method, callback, data){
        //Log.logJSFProd("A.apiCall"); // does this need anything else? depends

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let init = {method: method, headers: headers};
        if (data !== null){
            init.body = JSON.stringify(data);
        }

        let req = new Request(url, init);

        fetch(req).then(response => {
            if (method === "DELETE") return response;
            return response.json();
        }).then(data => {
            callback(data);
        });
    }
}