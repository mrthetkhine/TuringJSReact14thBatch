function compose(...fns)
{
    return function(x)
    {
        return fns.reduceRight((input,fn)=>fn(input),x);
    }
}
function pipe(...fns)
{
    return function(x)
    {
        return fns.reduce((input,fn)=>fn(input),x);
    }
}
function curry(fn)
{
    return function(x)
    {
        return fn.length == 1 ? fn(x) : fn.bind(fn,x);  
    }
}