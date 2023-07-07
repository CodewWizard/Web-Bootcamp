console.log("Hello world")

console.log($);

$(document).ready(()=>{
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
    
    });
    
    
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
    );

    //it will take 1000 ms to hide
    // $('#demo-text').hide(1000, ()=>{
    //     console.log('hidden the demo-text');
    // });

    // $("#toggle-para").click(()=>{
    //     $("#demo-text").toggle(1000);
    // });

    $("#fade").click(()=>{
        // $("#demo-text").fadeIn();
        // $("#demo-text").fadeIn("slow");
        $("#demo-text").fadeIn(3000);
    });


    $("#slideUpBtn").click(()=>{
        // $("#slideUpPara").slideUp();
        $("#slidePara").slideUp(1000);
    });

    $("#slideDownBtn").click(()=>{
        $("#slidePara").slideDown(1000);  
    });

    $("#slideToggleBtn").click(()=>{
        $("#slidePara").slideToggle(1000);
    })

});
