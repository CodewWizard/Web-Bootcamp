console.log("Hello world")

console.log($);

// syntax of an event action
// $('selector').action();

// $('button').click(()=>{
//     console.log("clicked on btn");
// });

// when you click on h1 element in dom log will be print and hide
$('h1').click(()=>{
    console.log('this');
    $('h1').hide();
});


$('p').click(()=>{
    //when you click on any p element in dom it will hide that element only
    $('#d').hide();
    console.log('p');

})


// multiple event listeners

$('div').on(
    {
        click: ()=>{
            console.log('div is clicked');
        },
        mouseleave:()=>{
            console.log('hovering div');
        },
        mouseenter:()=>{
            console.log('entering the div');
        },
        mousedown:()=>{
            console.log('down the div');
        },
        mouseup:()=>{
            console.log('up the div');
        }
    }
)