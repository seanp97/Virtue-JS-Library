//// Variables
var matchElemClass = "";
var matchElemClassExact = "";
var thisText = "";
var thisColour = "";
var thisBgColour = "";
var Init = 0;
var Temp = 0;
var imgSrc = "";
var isPressed = false;
var thisHeight = 0;
var thisWidth = 0;
var lastScrollTop = 0;
var elemClass = "";
var newHeight = 0;
var newWidth = 0;
var newBgColour = "";
var newColour = "";
var newText = "";
var inc = 0;
var newInc = 0;
var isUpper = "";
newElemClass = "";

function sliderChild(element, findChild, slideSpeed, activeClass) {
    $(element).each(function () {
        $(this).click(function () {
            $(this).find(findChild).slideToggle(slideSpeed).closest(element).addClass(activeClass);
            $(element).not(this).find(findChild).slideUp(slideSpeed).closest(element).removeClass(activeClass);
        });
    });
}

function isElemHidden(element, userFunc, elseFunc) {
    $(element).each(function () {
        $(this).click(function () {
            if ($(element).is(":hidden")) {
                if (typeof userFunc != 'function'){ 
                    alert("No function found");
               }
               else {
                    userFunc();
               }
            }
            else {
                if (typeof userFunc != 'function'){ 
                    alert("No function found");
               }
               else {
                    elseFunc();
               }
            }
        }); 
    });
}

function ifElemExists(element, userFunc) {
    if ($(element).length > 0) {
        if (typeof userFunc != 'function'){ 
            alert("No function found");
       }
       else {
            userFunc();
       }
    }
}

function getText(element) {
    $(element).each(function () {
        $(this).click(function () {
            thisText = $(this).text();
            return thisText;
        });
    });
}

function elementText() {
    newText = thisText;
    return newText;
}

function settingHeightToBiggest(element) {
    $(element).each(function () {
        Temp = jQuery(this).height();

        if (Temp > Init) {
            Init = Temp;
        }
    });
    jQuery(element).css("height", Init);
}

function getColour(element) {
    $(element).each(function () {
        $(this).click(function () {
            thisColour = $(this).css("color");
            return thisColour;
        });
    });
}

function elementColour() {
    newColour = thisColour;
    return newColour;
}

function getBackgroundColour(element) {
    $(element).each(function () {
        $(this).click(function () {
            thisBgColour = $(this).css("background-color");
            return thisBgColour;
        });
    });
}

function elementBackgroundColour() {
    newBgColour = thisBgColour;
    return newBgColour;
}

function getHeight(element) {
    $(element).each(function () {
        $(this).click(function (){
            thisHeight = $(this).height();
            return thisHeight;
        });
    });
}

function elementHeight() {
    newHeight = thisHeight;
    return newHeight;
}

function getWidth(element) {
    $(element).each(function () {
        $(this).click(function (){
            thisWidth = $(this).width();
            return thisWidth;
        });
    });
}

function elementWidth() {
    newWidth = thisWidth;
    return newWidth;
}

function backToTop(element, speed) {
    $(element).click(function () {
        $('html, body').animate({ scrollTop: 0 }, speed);
    });
}

function imageChange(element, mainElem) {
    $(element).each(function () {
        $(this).click(function () {
            imgSrc = $(this).attr("src");
            $(mainElem).attr("src", imgSrc);
        });
    });
}

function isDragging(element, userFunc) {
    $(element).mousedown(function () { 
        isPressed = true;
    });

    $(document).mouseup(function () {
        isPressed = false;
    });

    $(document).mousemove(function (event) {
        if (isPressed) {
            if (typeof userFunc != 'function'){ 
                alert("No function found");
           }
           else {
                userFunc();
           }
        }
    });
}

// Nav needs to have an attribute type E.G (id, data-id....) matching the actual body attribute for both functions to work. Doesn't need to be the same attr type. Just matching
/* 
    Example 

    <ul class="navLink">
        <li id="navOne">Nav 1</li>
        <li id="navTwo">Nav 2</li>
        <li id="navThree">Nav 3</li>
        <li id="navFour">Nav 4</li>
        <li id="navFive">Nav 5</li>
    </ul>

        <section data-href="navOne">
            One
        </section>

        <section data-href="navTwo">
            Two
        </section>

        <section data-href="navThree">
            Three
        </section>

        <section data-href="navFour">
            Four
        </section>

        <section data-href="navFive">
            Five
        </section>

        Needs to be executed on scroll
*/

// ScrollInPos: Recommended is 250
function navHighlight(element, navLink, sectionClass, navActiveClass, scrollInPos) {
    var scrollTop = $(document).scrollTop();
    $(element).each(function () {
        var xPos = $(this).position();
        var sectionPos = xPos.top;
        var sectionHeight = $(this).height();
        var overall = scrollTop + sectionHeight;

        if ((scrollTop + scrollInPos) >= sectionPos && scrollTop < overall) {
            $(this).addClass(sectionClass);
            $(this).prevAll().removeClass(sectionClass);
        }

        else if (scrollTop <= overall) {
            $(this).removeClass(sectionClass);
        }

        var xIndex = $("." + sectionClass).index();
        var accIndex = xIndex;

        $(navLink + ":nth-of-type(" + accIndex + ")").addClass(navActiveClass).siblings().removeClass(navActiveClass) || $("." + navLink + ":nth-of-type(" + accIndex + ")").addClass(navActiveClass).siblings().removeClass(navActiveClass);
    });
}

function scrollToElem(element, attrType, dataAttr) {
    $(element).each(function () {
        $(this).click(function () {
            var thisID = $(this).attr(attrType);          
            var x =  $(`body section[${dataAttr}="${thisID}"]`).position().top;
            $("html, body").animate({ scrollTop: x }, 1000);
        });
    });
}

function hrefMatchURL(element, userFunc, elseFunc) {
    $(element).each(function () {
        var hrefURL = window.location.href;
        if ($(this).attr("href") == hrefURL) {
            if (typeof userFunc != 'function'){ 
                alert("Matching Href");
           }
           else {
                userFunc();
           }
        }
        else {
            if (typeof userFunc != 'function'){ 
                alert("Doesn't match Href");
           }
           else {
                elseFunc();
           }
        }
    });
}

function detectScroll(element, scrollClass, userFunc, elseFunc) {
    $(window).bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            $(element).removeClass(scrollClass);
            if (typeof userFunc != 'function'){ 
                alert("No function found");
           }
           else {
                elseFunc();
           }
        }
        else {
            $(element).addClass(scrollClass);
            if (typeof userFunc != 'function'){ 
                alert("No function found");
           }
           else {
                userFunc();
           }
        }
    });
}

/*
  (element) {visibility:hidden;}
  fadeInClass {
    animation-name: slide;
    animation-duration: 1s;
    visibility: visible;
  }
  @keyframes slide {
    0% {
      opacity: 0;
      transform: translateY(70%);
    } 
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  }
*/

// fadeInHeight : Recommended is 600

function fadeInOnScroll(element, fadeInHeight, fadeInClass) {
    $(element).each(function(){
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + fadeInHeight) {
            $(this).addClass(fadeInClass);
        }
    });
}

//Finds classes, id's and attributes

function getElementsClass(element, attrType) {
    $(element).each(function () {
        $(this).click(function () {
            elemClass = $(this).attr(attrType).split(/\s+/);
           if (elemClass != "" || elemClass != null || elemClass != undefined) {
                return elemClass;
           }
        });
    });
}

function elementClasses() {
    newElemClass = elemClass;
    return newElemClass;
}

function matchingElementsClass(element, attrType, matchingAttr, userFunc) {
    $(element).each(function () {
        $(this).click(function () {
            matchElemClass = $(this).attr(attrType).split(/\s+/);
            if (matchElemClass != "" || matchElemClass != null || matchElemClass != undefined) {
                if ($(this).hasClass(matchingAttr)) {
                    if (typeof userFunc != 'function'){ 
                        alert("Contains");
                   }
                   else {
                        userFunc();
                   }
                }
            }
            else {
                alert("No match");
            }
        });
    });
}

function matchingElementsClassExactly(element, attrType, matchingAttr, userFunc, elseFunc) {
    $(element).each(function () {
        $(this).click(function () {
            matchElemClassExact = $(this).attr(attrType).split(/\s+/);
            if (matchElemClassExact != "" || matchElemClassExact != null || matchElemClassExact != undefined) {
                if (matchElemClassExact == matchingAttr) {
                    if (typeof userFunc != 'function'){ 
                        alert("Matching attribute");
                   }
                   else {
                        userFunc();
                   }
                }
            }
            else {
                if (typeof elseFunc != 'function'){ 
                    alert("No match");
               }
               else {
                    elseFunc();
               }
            }
        });
    });
}

function incrementer(element, incValue) {
    $(element).each(function () {
        $(this).click(function () {
            inc += incValue;
            return inc;
        });
    });
}

function elementIncrementer() {
    newInc = inc;
    return newInc;
}

function isElemUpper(element, userFunc, elseFunc) {
    $(element).each(function () {
        $(this).click(function () {
            isUpper = $(this).text();
            if(isUpper == isUpper.toUpperCase()) {             
               if (typeof userFunc != 'function'){ 
                    alert("Upper");
               }
               else {
                    userFunc();
               }
            }
            else {
                elseFunc() || alert("Lower");
            }
        });
    });
}

function isElemCaps(element, userFunc, elseFunc) {
    $(element).each(function (){
        $(this).click(function () {
            firstLetter = $(this).text().substring(0, 1);
            textLen = $(this).text().length;
            restOfString = $(this).text().substring(1, textLen);
            if(firstLetter == firstLetter.toUpperCase() && restOfString == restOfString.toLowerCase()) {
                if (typeof userFunc != 'function'){ 
                    alert("Capitalized");
               }
               else {
                    userFunc();
               }
            }
            else {
                if (typeof elseFunc != 'function'){ 
                    alert("Not capitalized");
               }
               else {
                    elseFunc();
               }
            }
            
        });
    });
}
