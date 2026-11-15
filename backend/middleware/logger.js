function logger(req,res,next)
{
    let newDate = new Date();
    req.user = {
        name: "Mg Ba"
    }
    console.log(`Custom logger ${newDate.toLocaleDateString()} ${newDate.toLocaleTimeString()} ${req.url}`);
    next();
}
module.exports = logger;