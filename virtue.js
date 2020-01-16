//// Variables
var virtMatchElemClass, virtMatchElemClassExact, virtThisText, virtThisColour, virtThisBgColour, virtImgSrc, virtElemClass,
virtNewBgColour, virtNewColour, virtNewText, virtIsUpper, virtIsLower, virtNewElemClass, virtThisElem, virtIsElemCapsFullWord,
virtCSSstyle, newVirtCSSstyle = "";

var virtInit, virtTemp, virtThisHeight, virtThisWidth, virtLastScrollTop, virtNewHeight, virtNewWidth, virtInc, virtNewInc,
virtElemLen, newVirtElemLen = 0;


var newVirtElemHiddenBool = undefined;
var virtElemHiddenBool = false;
var virtIsPressed = false;


// Will only work if tag/class is nested inside. Will not work if a sibling
function sliderChild(element, findChild, slideSpeed, activeClass) {
    $(element).each(function () {
        $(this).click(function () {
            virtThisElem = $(this);
            $(this).find(findChild).slideToggle(slideSpeed).closest(element).addClass(activeClass);
            $(element).not(this).find(findChild).slideUp(slideSpeed).closest(element).removeClass(activeClass);
        });
    });
}

function isElemHidden(element, userFunc, elseFunc) {
    $(element).each(function () {
        virtThisElem = $(this);
        if ($(element).is(":hidden") || $(element).css("visibility") == "hidden") {
            if (typeof userFunc != 'function' && typeof elseFunc != 'function'){ 
                alert("Element is hidden");
                virtElemHiddenBool = true;
                return virtElemHiddenBool;
            }
            else if (typeof userFunc == 'function' && typeof elseFunc != 'function') {
                userFunc();
                virtElemHiddenBool = true;
                return virtElemHiddenBool;
            }
        }
        else {
            if (typeof userFunc != 'function' && typeof elseFunc == 'function'){ 
                elseFunc();
                virtElemHiddenBool = false;
                return virtElemHiddenBool;
            }
            else {
                alert("Element is not hidden");
                virtElemHiddenBool = false;
                return virtElemHiddenBool;
            }
        }
    });
}

function elementIsHidden() {
    newVirtElemHiddenBool = virtElemHiddenBool;
    return newVirtElemHiddenBool;
}

function getElemLength(element) {
    virtElemLen = $(element).length;
    return virtElemLen;
}

function elementLength() {
    newVirtElemLen = virtElemLen;
    return newVirtElemLen;
}

function ifElemExists(element, userFunc, elseFunc) {
    if ($(element).length > 0) {
        if (typeof userFunc != 'function' && typeof elseFunc != 'function'){ 
            alert("Element exists");
            userFunc = undefined;
       }
       else if (typeof userFunc == 'function' && typeof elseFunc != 'function' || typeof userFunc == 'function' && typeof elseFunc == 'function') {
            userFunc();
        }
    }
    else {
        if (typeof userFunc != 'function' && typeof elseFunc != 'function'){ 
            alert("Element doesn't exist");
            elseFunc = undefined;
       }
       else if (typeof userFunc != 'function' && typeof elseFunc == 'function' || typeof userFunc == 'function' && typeof elseFunc == 'function') {
            elseFunc();
       }
    }
}

function getText(element) {
    $(element).each(function () {
        $(this).click(function () {
            virtThisElem = $(this);
            virtThisText = $(this).text();
            return virtThisText;
        });
    });
}

function elementText() {
    virtNewText = virtThisText;
    return virtNewText;
}

function settingHeightToBiggest(element) {
    $(element).each(function () {
        virtTemp = jQuery(this).height();

        if (virtTemp > virtInit) {
            virtInit = virtTemp;
        }
    });
    jQuery(element).css("height", virtInit);
}


//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 
//Commented out due to function downwards getting all CSS styles
// getCSSstyle();

// function getColour(element) {
//     $(element).each(function () {
//         $(this).click(function () {
//             virtThisElem = $(this);
//             virtThisColour = $(this).css("color");
//             return virtThisColour;
//         });
//     });
// }

// function elementColour() {
//     virtNewColour = virtThisColour;
//     return virtNewColour;
// }

// function getBackgroundColour(element) {
//     $(element).each(function () {
//         $(this).click(function () {
//             virtThisElem = $(this);
//             virtThisBgColour = $(this).css("background-color");
//             return virtThisBgColour;
//         });
//     });
// }

// function elementBackgroundColour() {
//     virtNewBgColour = virtThisBgColour;
//     return virtNewBgColour;
// }

function getHeight(element) {
    $(element).each(function () {
        $(this).click(function () {
            virtThisElem = $(this);
            virtThisHeight = $(this).height();
            return virtThisHeight;
        });
    });
}

function elementHeight() {
    virtNewHeight = virtThisHeight;
    return virtNewHeight;
}

function getWidth(element) {
    $(element).each(function () {
        $(this).click(function (){
            virtThisElem = $(this);
            virtThisWidth = $(this).width();
            return virtThisWidth;
        });
    });
}

function elementWidth() {
    virtNewWidth = virtThisWidth;
    return virtNewWidth;
}

function backToTop(element, speed) {
    $(element).click(function () {
        $('html, body').animate({ scrollTop: 0 }, speed);
    });
}

function imageChange(element, mainElem) {
    $(element).each(function () {
        $(this).click(function () {
            virtThisElem = $(this);
            virtImgSrc = $(this).attr("src");
            $(mainElem).attr("src", virtImgSrc);
        });
    });
}

function isDragging(element, userFunc) {
    $(element).mousedown(function () { 
        virtThisElem = $(this);
        virtIsPressed = true;
    });

    $(document).mouseup(function () {
        virtIsPressed = false;
    });

    $(document).mousemove(function () {
        if (virtIsPressed) {
            if (typeof userFunc != 'function') { 
                alert("Dragging");
                virtIsPressed = false;
           }
           else if (typeof userFunc == 'function') {
                userFunc();
                virtIsPressed = false;
           }
        }
    });
}

// Nav needs to have an attribute type E.G (id, data-id....) matching the actual body attribute for both functions to work. Doesn't need to be the same attr type. Just matching
/* 
    Example 

    <ul>
        <li id="navOne">Nav 1</li>
        <li id="navTwo">Nav 2</li>
        <li id="navThree">Nav 3</li>
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

function scrollToElem(element, attrType, tag, dataAttr, scrollSpeed) {
    $(element).each(function () {
        $(this).click(function () {
            virtThisElem = $(this);
            var virtThisID = $(this).attr(attrType);          
            var virtPosTop =  $(`body ${tag}[${dataAttr}="${virtThisID}"]`).position().top;
            $("html, body").animate({ scrollTop: virtPosTop }, scrollSpeed);
        });
    });
}

function hrefMatchURL(element, userFunc, elseFunc) {
    $(element).each(function () {
        virtThisElem = $(this);
        var hrefURL = window.location.href;
        if ($(this).attr("href") == hrefURL) {
            if (typeof userFunc != 'function' && typeof elseFunc != 'function'){ 
                alert("Matching Href");
                userFunc = undefined;
           }
           else if (typeof userFunc == 'function' && typeof elseFunc != 'function' || typeof userFunc == 'function' && typeof elseFunc == 'function') {
                userFunc();
            }
        }
        else {
            if (typeof userFunc != 'function' && typeof elseFunc != 'function'){ 
                alert("Doesn't match Href");
                elseFunc = undefined;
           }
           else if (typeof userFunc != 'function' && typeof elseFunc == 'function' || typeof userFunc == 'function' && typeof elseFunc == 'function') {
                elseFunc();
           }
        }
    });
}

function detectScroll(element, scrollClass, userFunc, elseFunc) {
    $(window).bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            $(element).removeClass(scrollClass);
            if (typeof userFunc != 'function' && typeof elseFunc != 'function'){ 
                alert("Scrolling");
                userFunc = undefined;
           }
           else if (typeof userFunc == 'function' && typeof elseFunc != 'function' || typeof userFunc == 'function' && typeof elseFunc == 'function') {
                elseFunc();
            }
        }
        else {
            $(element).addClass(scrollClass);
            if (typeof userFunc != 'function' && typeof elseFunc != 'function'){ 
                alert("Scrolling");
                elseFunc = undefined;
           }
           else if (typeof userFunc != 'function' && typeof elseFunc == 'function' || typeof userFunc == 'function' && typeof elseFunc == 'function') {
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
            virtThisElem = $(this);
            virtElemClass = $(this).attr(attrType).split(/\s+/);
           if (virtElemClass != "" || virtElemClass != null || virtElemClass != undefined) {
                return virtElemClass;
           }
        });
    });
}

function elementClasses() {
    virtNewElemClass = virtElemClass;
    return virtNewElemClass;
}

function matchingElementsClass(element, attrType, matchingAttr, userFunc) {
    $(element).each(function () {
        $(this).click(function () {
            virtThisElem = $(this);
            virtMatchElemClass = $(this).attr(attrType).split(/\s+/);
            if (virtMatchElemClass != "" || virtMatchElemClass != null || virtMatchElemClass != undefined) {
                if ($(this).hasClass(matchingAttr)) {
                    if (typeof userFunc != 'function' && typeof elseFunc != 'function'){ 
                        alert("Contains");
                   }
                   else if (typeof userFunc == 'function' && typeof elseFunc != 'function' || typeof userFunc == 'function' && typeof elseFunc == 'function') {
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
            virtThisElem = $(this);
            virtMatchElemClassExact = $(this).attr(attrType).split(/\s+/);
            if (virtMatchElemClassExact != "" || virtMatchElemClassExact != null || virtMatchElemClassExact != undefined) {
                if (virtMatchElemClassExact == matchingAttr) {
                    if (typeof userFunc != 'function' && typeof elseFunc != 'function'){ 
                        alert("Matching attribute");
                        userFunc = undefined;
                   }
                   else if (typeof userFunc == 'function' && typeof elseFunc != 'function' || typeof userFunc == 'function' && typeof elseFunc == 'function') {
                    userFunc();
                    }
                }
                else {
                    if (typeof userFunc != 'function' && typeof elseFunc != 'function'){ 
                        alert("No matching attribute");
                        elseFunc = undefined;
                   }
                   else if (typeof userFunc != 'function' && typeof elseFunc == 'function' || typeof userFunc == 'function' && typeof elseFunc == 'function') {
                        elseFunc();
                    }
                }
            }
        });
    });
}

function incrementer(element, incValue) {
    $(element).each(function () {
        $(this).click(function () {
            virtThisElem = $(this);
            virtInc += incValue;
            return virtInc;
        });
    });
}

function elementIncrementer() {
    virtNewInc = virtInc;
    return virtNewInc;
}

function isElemUpper(element, userFunc, elseFunc) {
    $(element).each(function () {
        $(this).click(function () {
            virtThisElem = $(this);
            virtIsUpper = $(this).text();
            if(virtIsUpper == virtIsUpper.toUpperCase()) {             
                if (typeof userFunc != 'function' && typeof elseFunc != 'function'){ 
                    alert("Upper");
                    userFunc = undefined;
               }
               else if (typeof userFunc == 'function' && typeof elseFunc != 'function' || typeof userFunc == 'function' && typeof elseFunc == 'function') {
                    userFunc();
                }
            }
            else {
                if (typeof userFunc != 'function' && typeof elseFunc != 'function'){ 
                    alert("Not upper");
                    elseFunc = undefined;
               }
               else if (typeof userFunc != 'function' && typeof elseFunc == 'function' || typeof userFunc == 'function' && typeof elseFunc == 'function') {
                    elseFunc();
                }
            }
        });
    });
}

//Only works with one worded sentences
/*
    $(document).click(function () { 
        if(virtIsElemCapsFullWord) {
            virtThisElem.css("color", "blue");
        }
        else if (virtIsElemCapsFullWord == false) {
            virtThisElem.css("color", "red");
        }
    }); 

    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

*/
function isElemCaps(element, userFunc, elseFunc) {
    $(element).each(function () {
        $(this).click(function () {
            virtThisElem = $(this);
            firstLetter = $(this).text().substring(0, 1);
            textLen = $(this).text().length;
            restOfString = $(this).text().substring(1, textLen);
            virtIsElemCapsFullWord = firstLetter == firstLetter.toUpperCase() && restOfString == restOfString.toLowerCase();

            //↑↑↑↑ Returns True if Capitalized and False if not Capitalized

            if(firstLetter == firstLetter.toUpperCase() && restOfString == restOfString.toLowerCase()) {
                if (typeof userFunc != 'function' && typeof elseFunc != 'function'){ 
                    alert("Capitalized");
                    userFunc = undefined;
                 }
               else if (typeof userFunc == 'function' && typeof elseFunc != 'function' || typeof userFunc == 'function' && typeof elseFunc == 'function') {
                    userFunc();
                }
            }
            else {
                if (typeof userFunc != 'function' && typeof elseFunc != 'function'){ 
                    alert("Not capitalized");
                    elseFunc = undefined;
               }
               else if (typeof userFunc != 'function' && typeof elseFunc == 'function' || typeof userFunc == 'function' && typeof elseFunc == 'function') {
                    elseFunc();
                }
            }
            
        });
    });
}

function isElemLower(element, userFunc, elseFunc) {
    $(element).each(function () {
        $(this).click(function () {
            virtThisElem = $(this);
            virtIsLower = $(this).text();
            if(virtIsLower == virtIsLower.toLowerCase()) {             
                if (typeof userFunc != 'function' && typeof elseFunc != 'function'){ 
                    alert("Lower");
                    userFunc = undefined;
               }
               else if (typeof userFunc == 'function' && typeof elseFunc != 'function' || typeof userFunc == 'function' && typeof elseFunc == 'function') {
                    userFunc();
                }
            }
            else {
                if (typeof userFunc != 'function' && typeof elseFunc != 'function'){ 
                    alert("Not lower");
                    elseFunc = undefined;
               }
               else if (typeof userFunc != 'function' && typeof elseFunc == 'function' || typeof userFunc == 'function' && typeof elseFunc == 'function') {
                    elseFunc();
               }
            }
        });
    });
}

function getCSSstyle(element, CSSstyle) {
    $(element).each(function () {
        $(this).click(function () {
            virtCSSstyle = $(this).css(CSSstyle);
            return virtCSSstyle;     
        });
    });
}

function elementCSSstyle() {
    newVirtCSSstyle = virtCSSstyle;
    return newVirtCSSstyle;
}
