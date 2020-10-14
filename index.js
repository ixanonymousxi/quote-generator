let counter = 0;

$(document).ready(function () {
    const $main = $("main");
    if ($main.width() <= 1050) {
        $main.css("background-image", "url('images/Four-Nations-Mobile.jpg')");
    } else {
        $main.css("background-image", "url('images/Four-Nations.jpg')");
    }
});

function changeQuote() {
    const quoteArr = [
        {
            author: "Iroh",
            quote: "Pride is not the opposite of shame, but its source.",
            color: "#89742f",
            image: "images/Iroh-3.jpg",
            mobile: "images/Iroh-Mobile.jpg"
        },
        {
            author: "Aang",
            quote: "It’s easy to do nothing, it’s hard to forgive.",
            color: "#c11205",
            image: "images/Aang-3.jpg",
            mobile: "images/Aang-Mobile.jpg"
        },
        {
            author: "Zuko",
            quote: "In the darkness, hope is something you give yourself.",
            color: "#631d11",
            image: "images/Zuko-3.jpg",
            mobile: "images/Zuko-Mobile.jpg"
        },
        {
            author: "Katara",
            quote: "Sometimes it hurts more to hope, and it hurts more to care",
            color: "#5277b6",
            image: "images/Katara-3.jpg",
            mobile: "images/Katara-Mobile.jpg"
        },
        {
            author: "Toph",
            quote: "I don't care what I look like. I'm not looking for anyone's approval. I know who I am.",
            color: "#91a051",
            image: "images/Toph-3.jpg",
            mobile: "images/Toph-Mobile.jpg"
        }];

    const $main = $("main");
    const $quote = $("#text");
    const $author = $("#author");
    const $button = $("#new-quote");

    $quote.text(quoteArr[counter].quote);
    $author.text(quoteArr[counter].author);

    $main.css("background-color", quoteArr[counter].color);
    $quote.css("color", quoteArr[counter].color);
    $author.css("color", quoteArr[counter].color);
    $button.css("background-color", quoteArr[counter].color);

    if($main.width() <= 1050){
        $main.css("background-image", "url('" + quoteArr[counter].mobile + "')");

    }else{
        $main.css("background-image", "url('" + quoteArr[counter].image + "')");
    }

    counter < 4 ? counter++ : counter = 0;
};
