const login = require("facebook-chat-api");

login({email: "mitxit1234@gmail.com", password: "zsang2036"}, (err, api) => {
    if(err) return console.error(err);

    var yourID = "100008471400483";
    var msg = "Hey!";
    api.sendMessage(msg, yourID);
});