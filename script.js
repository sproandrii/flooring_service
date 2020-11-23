document.body.innerHTML = '<h1>Hello from JS</h1>'
console.log('Test from VS code')
function minSum(arr) {
    return arr.sort( (a,b) => a-b )
    .slice(0, arr.length/2)
    .reduce( (acc,item,index) => acc += item * arr[ arr.length - index - 1 ], 0 )
    }

console.log(minSum([3,1,10,8]))
console.log('That is working')