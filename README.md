# accordion 
# How to use
accordion on jq

create index.html
whrite this tags

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/main.css">    
    <title>Document</title>
</head>
<body>

    <div class="accordion">
        <div><a href="#">tab 1</a></div>
        <div id="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatum dolore neque deleniti quidem quas!</p>
        </div>
        <div><a href="#">tab 1</a></div>
        <div id="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatum dolore neque deleniti quidem quas!</p>
        </div>
        <div><a href="#">tab 1</a></div>
        <div id="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatum dolore neque deleniti quidem quas!</p>
        </div>
    </div>


/*ADD STYLE*/
<style>
.accordion{
  width: 250px;
}

.accordion a{
    border: 1px solid #000;
    padding: 5px 0;
    text-align: center;
    margin: 0;
    display: block;
    text-decoration: none;
}

.accordion p {
    padding: 10px 15px;
    margin: 0px;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
}

#text{
  display: none;
}

#text:last-child{
  border-bottom: 1px solid #000;
}
</style>
</body>
</html>


/*Add Script jq*/

$(function(){
    var text = $('.accordion > #text').hide(); //hide all content
    text.first().show();  //show first content

    $('.accordion > div > a').click(function(e){
        e.preventDefault();
        var $this = $(this);

        text.slideUp();
        $this.parent().next().slideDown();
        
        return false;
    });
});
