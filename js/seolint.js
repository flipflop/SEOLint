// create namespace
// @TODO: change to a module with a namespace export
// @TODO: add JSDocs
if (typeof chassis !== "object") { var chassis = {}; }

chassis.seoLint = (function($, win, doc, undefined) {

    var links,
        init = function () {
            $(function() {
                var domNodes = $("body a");
                //nodeIterator(domNodes, findBrokenReferences);
                //getLinks();
            });
        }(); // self invoking

    function nodeIterator (domNodes, callBack) {
        $(domNodes).each(function (i, domNode) {
            callBack(domNode, i);
        });
    }

    function createLabel (pos, index, linkWidth) {
        $('<div class="seolint-highlight">✖</div>', {
            "id": "seoLintLabel" + index,
        })
        .css({
            "position": "absolute",
            "pointer-events": "none",
            "color": "#fff",
            "font-size": "18px",
            "line-height": "22px",
            "padding-left": "5px",
            "border-radius": "5px",
            "border": "2px solid #f00",
            "width": linkWidth + "px",
            "height": "20px",
            "top": pos.top - 2,
            "left": pos.left  
        })
        /*
        .html('<div class="seolint-broken"></div>')
        .find("div")
        .css({
            "position": "relative",
            "top": "-2px",
            "left": "1px"
        })
        .end()
        */
        .appendTo("body");
    }    

    function findBrokenReferences (domNode, i) {
        // @TODO: change to a switch statement?
        var nodeSrc;
        if (domNode.nodeName === "A") {
            nodeSrc = domNode.href;
        } else if (domNode.nodeName === "IMG") {
            nodeSrc = domNode.src;
        }

        $.ajax({
            cache: 'false',
            url: nodeSrc,
            success: function(data, textStatus, xhr) {
                //console.log("success");
                //console.log(xhr.status);
                //console.log(linkElem[0].href);
            },
            error: function (xhr, textStatus, errorThrown) {
                if (xhr.status == 404) {
                    //console.log("404");
                    createLabel($(domNode).offset(), i, $(domNode).width());                   
                }
            }
        })
    }

    // SEO Console Wrangling
    function getImagesbyKeywordInAltText(keyword) {
        $("img").each(function(i) {
            if (this.alt.indexOf(keyword) != -1) {
                console.log("Images with alt '" + this.alt + "' contains the keyword '" + keyword + "'. Reference:", this);
            }
        });
    }

    // for example you can use: getImagesbyKeywordInAltText("bathroom");

    function getHeadingbyKeywordInText(keyword, headingType) {
        $(headingType).each(function(i) {
            if ($(this).text().indexOf(keyword) != -1) {
                console.log("Heading "+ headingType +" with text '" + $(this).text() + "' contains the keyword '" + keyword + "'. Reference:", this);
            }
        });
    }

    // for example you can use: getHeadingbyKeywordInText("bathroom", "h1");

    var contract = {
        getImagesbyKeywordInAltText: getImagesbyKeywordInAltText,
        getHeadingbyKeywordInText: getHeadingbyKeywordInText
    };

    return contract;

}(jQuery, window, document));