// Creating an element through react
const heading = React.createElement('h1',
{
    // this object sets the attrobutes of the element, in this case a h1 with id "heading" and class "heading". 
    id:'heading',
    className:'heading',
    style:{
        color:'red',
        fontSize:'20px'
    }
},
'hello world from React');
// if you want to create nested elements like this
{/* <div id='parent'>
    <div id='child'>
        <h1>this is h1</h1>
        <h2>this is h2</h2>
        
    </div>
</div> */}

// Creating an element through react with nesting 

const nestedElem=React.createElement('div',
{id:'parent'},

React.createElement('div',
{id:'child'},
[React.createElement('h1',{id:'h1',key:1},'this is h1'),
React.createElement('h2',{id:'h2',key:2},'this is h2')]))

console.log(heading,'heading React')

//  Appending the created element to root div in HTML through ReactDOM
const root  = ReactDOM.createRoot(document.getElementById('root'));
console.log(root,'ReactDom')
// rendering the element 
root.render(nestedElem)
