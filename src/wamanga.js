class wamanga{
    constructor(){
        this.api = "https://wamanga.ru/api"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "xmlhttprequest","content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
    }
    async search_manga(q){
        let req=await fetch(`${this.api}/search/${q}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async comics_info(name){
        let req=await fetch(`${this.api}/comics/${name}?licensed=true`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async comics_list(){
        let req=await fetch(`${this.api}/comics`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {wamanga};