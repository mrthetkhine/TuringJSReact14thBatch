console.log('Module initialized');
function inner()
{
    console.log('inner');
}
exports.api = function()
{
    inner();
    console.log('Module API');
}