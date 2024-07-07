# wamanga
JavaScript library for wamanga.ru
# main
```js
async function main(){
    const {wamanga} = require('./wamanga');
    const manga= new wamanga();
    let req=await manga.search_manga("blue")
    console.log(req)
}
main()
```
