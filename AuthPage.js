let number = 123;
document.getElementById("cartValue").innerHTML = number;

// Initialize the lpTag namespace and the identity array, if the identity function is placed above the tag.
var lpTag = {};
lpTag.identities = [];

lpTag.identities.push(identityFn);
function identityFn(callback) {
    callback({
        iss: "https://idp.liveperson.net",
        acr: "loa1",
        sub: "+13214996910"
    });
}

function authenticate(callback) {
    console.log("The Authenticated function has been called");
    const jwt = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY3IiOiJsb2ExIiwic3ViIjoiKzEzMjE0OTk2OTEwIiwiaXNzIjoiaHR0cHM6Ly9pZHAubGl2ZXBlcnNvbi5uZXQiLCJhdWQiOiJhY2M6Mzc2ODQzMDciLCJleHAiOjE2MzQzNDY5NjksImlhdCI6MTYzNDE3NDIzMiwiZ2l2ZW5fbmFtZSI6IkVpdGFuIn0.WAkmN6PqLFlX5oEs0Tuc9VSKXSsAAi4iFj1_eLHWZ4UolVbYmonnuhnjFK6zmQHc121QFQEK5MtVaGsIx7i3NV9l161GG7ONrqxCOObQIGknIUPfwIsbXZ9IS8fMEC9HOxc-raWZCMWItk9Nkb8_THWh4GjhQgaQjfpNnv0tzYKaV41TCXIENk6qS5PTa6E_bnGkAyOqyZZDxgDly8PSz2pvdetgTrYoVGFHNgR9nilCB73D9MiaViYT4bedc9vRPNnHYwqiBDe8nBP8fPSlOoyIAWEEGS1NwFJg1-W4IHCkwYmEiAWGJXGjbiemneEQp72bXAYPugQf4gdux0D8pQ"
    callback(jwt)
}