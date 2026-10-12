window.MyModule = window.MyModule || (function(){
    console.log('Initialzied');
    function api()
    {
        console.log('Api');
    }
    return{
        api
    }
}());