let number = 123;
document.getElementById("cartValue").innerHTML = number;

// Initialize the lpTag namespace and the identity array, if the identity function is placed above the tag.
var lpTag = {};
lpTag.identities = [];


function identityFn(callback) {
    callback({
        iss: "https://xsol1827x.github.io/AuthPage.html",
        acr: "loa1",
        sub: "13214996910"
    });
}
lpTag.identities.push(identityFn);
var pageTitle = document.title;
lpTag.sdes = lpTag.sdes || [];
//send data using SDEs
lpTag.sdes.push(
    {
        "type": "ctmrinfo", //MANDATORY
        "info": {
            "userName": pageTitle
        }
    },
    {
        "type": "purchase",
        "total": number //MANDATORY
    }
);

//returns the sdes
lpTag.sdes.get("ctmrinfo", "purchase")


function LPJsMethodName(callback) {
    console.log("The Authenticated function has been called");
    const jwt = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY3IiOiJsb2ExIiwic3ViIjoiMTMyMTQ5OTY5MTAiLCJpc3MiOiJodHRwczovL3hzb2wxODI3eC5naXRodWIuaW8vQXV0aFBhZ2UuaHRtbCIsImF1ZCI6ImFjYzozNzY4NDMwNyIsImV4cCI6MTYzNDM0Njk2OSwiaWF0IjoxNjM0MTc0MjMyLCJnaXZlbl9uYW1lIjoiRWl0YW4ifQ.LjPqDhlPOqSAqOOjUUgYVwzHnvSjIr_X_YMaK5FV2aMN0pzPHzHcKFOrRlEHrtRmQw15r6BipJa4m6YW2BYWy8bOKCF9v5Zo2WQySvJ7tlZDL1YHPHqI3LhVc9TZBZQ5d9JcGVx3IQ355iwnOc4bXzgaFjc6FH4pDlQdLW-5zPHNWqfAEeBMPbB9wQqQAzGlUNSFo-sszMOhKw0ixLMf2QtSVCOwYH7q8pcPfyMsXwenpohwT41aoRw3cgqgcEUMOA5JlGz4UoBfTtYCFX236GlOSHHh42Op64_UfYp4-e24xPqV0y-p_ObwnMEUejTOT5dGnorArWyx66yMgArr2w"
    callback(jwt)
}