process.on("message", message => {
    console.log('received ',message);
    process.send(message.toUpperCase());
});