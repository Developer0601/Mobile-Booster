!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){e.exports=n(7)},function(e,t){window.bindImageButtons=function(){for(var e=document.querySelectorAll(".mce-select_image"),t=0;t<e.length;t++)e[t].addEventListener("click",wpsc_upload_image)},window.wpsc_upload_image=function(e){var t;e.preventDefault();var n=!0;void 0===e.target.dataset.target?t=document.querySelector(".mce-image"):(t=document.getElementById("".concat(e.target.dataset.target)),n=!n);var a=wp.media.frames.file_frame=wp.media({title:"Add Image",button:{text:"Add Image"},multiple:!1});a.on("select",(function(){var e=a.state().get("selection").first().toJSON();n?t.value=e.id:t.innerHTML=e.id})),a.open()},window.datetimeLocalSupported=function(){var e=document.createElement("input");return e.setAttribute("type","datetime-local"),"datetime-local"===e.type},window.dateSupported=function(){var e=document.createElement("input");return e.setAttribute("type","date"),"date"===e.type},window.setHeight=function(e,t){"function"==typeof t&&(t=t()),e.style.height="string"==typeof t?t:t+"px"},window.insertAfter=function(e,t){t.parentNode.insertBefore(e,t.nextSibling)},window.createElementFromHTML=function(e){var t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild}},function(e,t,n){var a=n(3);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(5)(a,o);a.locals&&(e.exports=a.locals)},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,'.mce-window.mce-container.mce-sc-panel .mce-container-body.mce-abs-layout {\n    overflow: hidden;\n}\n\nform#sc-start-point fieldset {\n    padding-top: 15px;\n}\n\nform#sc-start-point fieldset input:not([type=checkbox]), form#sc-start-point fieldset select {\n    width: 69%;\n    display: block;\n    box-sizing: border-box;\n    margin-bottom: 15px;\n    height: 30px;\n    border: 1px solid #ddd;\n}\n\nform#sc-start-point fieldset label {\n    display: block;\n    margin-bottom: 5px;\n    margin-top: 5px;\n    width: 31%;\n    float: left;\n}\n\nform#sc-start-point fieldset div {\n    overflow: hidden;\n    clear: both;\n}\n\nform#sc-start-point fieldset div[name=imageID] {\n    width: 31%;\n    float: left;\n}\n\nform#sc-start-point fieldset div[name=imageID]:before {\n    content: "Bild ID: ";\n    pointer-events: none;\n}\n\nform#sc-start-point fieldset .mce-btn.long {\n    width: 100%;\n}\n\n#fields + .mce-btn.long {\n    width: 100%;\n    margin-top: 15px;\n}\n\nform#sc-start-point fieldset .mce-btn.removeLast {\n    display: none;\n}\n\nform#sc-start-point fieldset:last-of-type .mce-btn.removeLast {\n    display: table;\n}\n\nform#sc-start-point textarea {\n    white-space: normal;\n    border: 1px solid #ddd;\n    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.07);\n    background-color: #fff;\n    color: #32373c;\n    margin-bottom: 15px;\n    width: 69%;\n    display: block;\n    box-sizing: border-box;\n}\n\nform#sc-start-point #addOne {\n    width: 100%;\n}\n\nform#sc-start-point .sc-hr {\n    border: 0.5px solid #ddd;\n    margin: 10px 0;\n}',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var o=(r=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),l=a.sources.map((function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"}));return[n].concat(l).concat([o]).join("\n")}var r;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},o=0;o<this.length;o++){var l=this[o][0];"number"==typeof l&&(a[l]=!0)}for(o=0;o<e.length;o++){var r=e[o];"number"==typeof r[0]&&a[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},function(e,t,n){var a,o,l={},r=(a=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=a.apply(this,arguments)),o}),i=function(e,t){return t?t.querySelector(e):document.querySelector(e)},c=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var a=i.call(this,e,n);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}}(),s=null,d=0,u=[],p=n(6);function m(e,t){for(var n=0;n<e.length;n++){var a=e[n],o=l[a.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](a.parts[r]);for(;r<a.parts.length;r++)o.parts.push(g(a.parts[r],t))}else{var i=[];for(r=0;r<a.parts.length;r++)i.push(g(a.parts[r],t));l[a.id]={id:a.id,refs:1,parts:i}}}}function b(e,t){for(var n=[],a={},o=0;o<e.length;o++){var l=e[o],r=t.base?l[0]+t.base:l[0],i={css:l[1],media:l[2],sourceMap:l[3]};a[r]?a[r].parts.push(i):n.push(a[r]={id:r,parts:[i]})}return n}function h(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=u[u.length-1];if("top"===e.insertAt)a?a.nextSibling?n.insertBefore(t,a.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertAt.before,n);n.insertBefore(t,o)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var a=function(){0;return n.nc}();a&&(e.attrs.nonce=a)}return y(t,e.attrs),h(e,t),t}function y(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function g(e,t){var n,a,o,l;if(t.transform&&e.css){if(!(l="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=l}if(t.singleton){var r=d++;n=s||(s=v(t)),a=w.bind(null,n,r,!1),o=w.bind(null,n,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),h(e,t),t}(t),a=C.bind(null,n,t),o=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),a=S.bind(null,n),o=function(){f(n)});return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=r()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=b(e,t);return m(n,t),function(e){for(var a=[],o=0;o<n.length;o++){var r=n[o];(i=l[r.id]).refs--,a.push(i)}e&&m(b(e,t),t);for(o=0;o<a.length;o++){var i;if(0===(i=a[o]).refs){for(var c=0;c<i.parts.length;c++)i.parts[c]();delete l[i.id]}}}};var x,_=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function w(e,t,n,a){var o=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var l=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(l,r[t]):e.appendChild(l)}}function S(e,t){var n=t.css,a=t.media;if(a&&e.setAttribute("media",a),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function C(e,t,n){var a=n.css,o=n.sourceMap,l=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||l)&&(a=p(a)),o&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([a],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,a=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,l=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(l)?e:(o=0===l.indexOf("//")?l:0===l.indexOf("/")?n+l:a+l.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(e,t,n){"use strict";n.r(t);n(1);var a=function(e){return{text:"Single FAQ",tooltip:"Adds a FAQ block to the page.",onclick:function(){e.windowManager.open({title:"Featured Snippet FAQ",minWidth:500,height:500,autoScroll:!0,classes:"sc-panel",body:[{type:"checkbox",name:"giveHTML",label:"Render HTML",checked:!0},{type:"listbox",name:"sc_headline",label:"Headline-Tag",values:[{text:"h2",value:"h2"},{text:"h3",value:"h3"},{text:"h4",value:"h4"},{text:"h5",value:"h5"},{text:"h6",value:"h6"},{text:"p",value:"p"}],value:"h2"},{label:"Question",type:"textbox",name:"sc_question",value:"",placeholder:"Please enter your question here ...",multiline:!0},{type:"textbox",name:"sc_answer",label:"Answer",value:"",placeholder:"Please enter your answer here ...",multiline:!0,minHeight:100},{type:"textbox",name:"sc_img",label:"Image",value:"",classes:"image"},{type:"button",name:"select_image",label:" ",text:"Select Image",classes:"select_image"},{type:"textbox",name:"sc_img_description",label:"Image description",value:"",multiline:!0},{type:"textbox",name:"sc_css_classes",label:"CSS classes",value:""}],onsubmit:function(t){e.insertContent('[sc_fs_faq \n                        sc_id="'.concat("fs_faq"+Math.random().toString(36).substr(2,9),'"\n\t\t\t\t\t\thtml="').concat(t.data.giveHTML,'" \n                        headline="').concat(t.data.sc_headline,'" \n                        img="').concat(t.data.sc_img,'" \n                        question="').concat(t.data.sc_question,'" \n                        img_alt="').concat(t.data.sc_img_description,'" \n                        css_class="').concat(t.data.sc_css_classes,'"\n                    ]').concat(t.data.sc_answer,"[/sc_fs_faq]"))}}),bindImageButtons()}}},o=function(e){var t="",n=500;return dateSupported()||(t="(Format: 2019-08-22)",n=800),{text:"Job",tooltip:"Adds a JobPosting block to the page.",onclick:function(){e.windowManager.open({title:"Featured Snippet Job",minWidth:n,height:500,autoScroll:!0,classes:"sc-panel",body:[{type:"checkbox",name:"giveHTML",label:"Render HTML",checked:!0},{type:"listbox",name:"titleTag",label:"Headline-Tag",values:[{text:"h2",value:"h2"},{text:"h3",value:"h3"},{text:"h4",value:"h4"},{text:"h5",value:"h5"},{text:"h6",value:"h6"},{text:"p",value:"p"}],value:"h2"},{label:"Title",type:"textbox",name:"jobTitle",value:"",placeholder:"Please enter your job title here ...",multiline:!0},{type:"textbox",name:"description",label:"Description",value:"",placeholder:"Enter your job description here...",multiline:!0,minHeight:100},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">Company</h1>'},{type:"textbox",name:"companyName",label:"Name",value:"",placeholder:"Company Name",multiline:!0},{type:"textbox",name:"sameAs",label:"Same as (Website / Social Media)",value:"",placeholder:"https://example.com",multiline:!1},{type:"textbox",name:"sc_img",label:"Image",value:"",classes:"image"},{type:"button",name:"select_image",label:" ",text:"Select Image",classes:"select_image"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">Job Location</h1>'},{type:"textbox",name:"streetAddress",label:"Street",value:"",placeholder:"Any Street 3A"},{type:"textbox",name:"postalCode",label:"Postal Code",value:"",placeholder:"Any Postal Code"},{type:"textbox",name:"addressLocality",label:"Locality",value:"",placeholder:"Any City"},{type:"textbox",name:"addressCountry",label:"Country ISO Code",value:"",placeholder:"US"},{type:"textbox",name:"addressRegion",label:"Region ISO Code",value:"",placeholder:"CA"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">Salary</h1>'},{type:"listbox",name:"baseSalary",label:"Unit",values:[{text:"Hourly",value:"HOUR"},{text:"Daily",value:"DAY"},{text:"Weekly",value:"WEEK"},{text:"Monthly",value:"MONTH"},{text:"Yearly",value:"YEAR"}]},{type:"textbox",name:"currencyCode",label:"Currency ISO Code",value:"",placeholder:"USD"},{type:"textbox",name:"quantitativeValue",label:"Value",value:"",placeholder:"40.00"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">Job Meta</h1>'},{type:"listbox",name:"employmentType",label:"Employment Type",values:[{text:"Full Time",value:"FULL_TIME"},{text:"Part Time",value:"PART_TIME"},{text:"Contractor",value:"CONTRACTOR"},{text:"Temporary",value:"TEMPORARY"},{text:"Intern",value:"INTERN"},{text:"Volunteer",value:"VOLUNTEER"},{text:"Per Diem",value:"PER_DIEM"},{text:"Other",value:"OTHER"}]},{type:"textbox",name:"validThrough",label:"Valid Through ".concat(t),classes:"sc_valid_through"},{type:"textbox",name:"sc_cssClass",label:"CSS classes",value:""}],onsubmit:function(t){e.insertContent('[sc_fs_job \n\t\t\t\t\t\t\thtml="'.concat(t.data.giveHTML,'" \n\t\t\t\t\t\t\ttitle="').concat(t.data.jobTitle,'" \n\t\t\t\t\t\t\ttitle_tag="').concat(t.data.titleTag,'" \n\t\t\t\t\t\t\tvalid_through="').concat(t.data.validThrough,'" \n\t\t\t\t\t\t\temployment_type="').concat(t.data.employmentType,'" \n\t\t\t\t\t\t\tcompany_name="').concat(t.data.companyName,'" \n\t\t\t\t\t\t\tsame_as="').concat(t.data.sameAs,'" \n\t\t\t\t\t\t\tlogo_id="').concat(t.data.sc_img,'"\n\t\t\t\t\t\t\tstreet_address="').concat(t.data.streetAddress,'"\n\t\t\t\t\t\t\taddress_locality="').concat(t.data.addressLocality,'"\n\t\t\t\t\t\t\taddress_region="').concat(t.data.addressRegion,'"\n\t\t\t\t\t\t\tpostal_code="').concat(t.data.postalCode,'"\n\t\t\t\t\t\t\taddress_country="').concat(t.data.addressCountry,'"\n\t\t\t\t\t\t\tcurrency_code="').concat(t.data.currencyCode,'"\n\t\t\t\t\t\t\tquantitative_value="').concat(t.data.quantitativeValue,'"\n\t\t\t\t\t\t\tbase_salary="').concat(t.data.baseSalary,'"\n\t\t\t\t\t\t\tcss_class="').concat(t.data.sc_cssClass,'"\n\t\t\t\t\t\t]').concat(t.data.description,"[/sc_fs_job]"))}}),dateSupported()&&(document.querySelector(".mce-sc_valid_through").type="date"),bindImageButtons()}}},l=(n(2),function(e){return{text:"Multi FAQ",tooltip:"Adds a FAQ block to the page.",onclick:function(){e.windowManager.open({title:"Featured Snippet FAQ",minWidth:500,autoScroll:!0,classes:"sc-panel",body:[{type:"checkbox",name:"giveHTML",label:"Render HTML",checked:!0},{type:"textbox",name:"sc_css_classes",label:"CSS classes",value:""},{type:"container",name:"container",label:"",html:' \n                                    <form id="sc-start-point">\n                                    <div id="fields">\n                                        <fieldset id="fieldset-0" data-key="0">\n                                            <hr class="sc-hr">\n                                            <div>\n                                                <label>Headline-Tag</label>\n                                                <select name="headlineTag" id="headlineTag-0">\n                                                    <option value="h2">h2</option>\n                                                    <option value="h3">h3</option>\n                                                    <option value="h4">h4</option>\n                                                    <option value="h5">h5</option>\n                                                    <option value="h6">h6</option>\n                                                    <option value="p">p</option>\n                                                </select>\n                                            </div>\n                                            <div>\n                                                <label>Frage</label>\n                                                <input type="text" id="question-0" name="question">\n                                            </div>\n                                            <div>\n                                                <label>Antwort</label>\n                                                <textarea id="answer-0" rows="5" name="answer"></textarea>\n                                            </div>\n                                            <div>\n                                                <div type="text" id="imageID-0" name="imageID"></div>\n                                                <div class="mce-btn">\n                                                    <button type="button" class="mce-select_image" data-target="imageID-0">Select Image</button>\n                                                </div>\n                                            </div> \n                                        </fieldset>\n                                    </div>\n                                    <div class="mce-btn long">\n                                        <button id="addOne" type="button">+ Add One</button>\n                                    </div>\n                                </form>'}],onsubmit:function(t){e.insertContent(createShortcode(t))}}),document.getElementById("addOne").addEventListener("click",(function(){var e=document.querySelectorAll("#fields fieldset").length,t=document.querySelector("#fields #fieldset-".concat(e-1)).offsetHeight,n=1===e?t+30:t-30,a=document.querySelector(".mce-container > .mce-container-body.mce-abs-layout"),o=document.querySelector("#fields #fieldset-".concat(e-1)),l='\n                    <fieldset id="fieldset-'.concat(e,'" data-key="').concat(e,'">\n                        <hr class="sc-hr">\n                        <div>\n                            <label>Headline-Tag</label>\n                            <select name="headlineTag" id="headlineTag-').concat(e,'">\n                                <option value="h2">h2</option>\n                                <option value="h3">h3</option>\n                                <option value="h4">h4</option>\n                                <option value="h5">h5</option>\n                                <option value="h6">h6</option>\n                                <option value="p">p</option>\n                            </select>\n                        </div>\n                        <div>\n                            <label>Frage</label>\n                            <input type="text" id="question-').concat(e,'" name="question">\n                        </div>\n                        <div>\n                            <label>Antwort</label>\n                            <textarea id="answer-').concat(e,'" rows="5" name="answer"></textarea>\n                        </div>\n                        <div>\n                            <div type="text" id="imageID-').concat(e,'" name="imageID"></div>\n                            <div class="mce-btn">\n                                <button type="button"  class="mce-select_image" data-target="imageID-').concat(e,'">Select Image</button>\n                            </div>\n                        </div>\n                        <div class="mce-btn removeLast">\n                            <button type="button" onclick="removeLastFAQ()" data-target="bild-').concat(e,'">- Remove Last One</button>\n                        </div>\n                    </fieldset>\n                ');setHeight(a,a.offsetHeight+n),insertAfter(createElementFromHTML(l),o),bindImageButtons()})),bindImageButtons()}}});window.createShortcode=function(e){for(var t="[sc_fs_multi_faq ",n=document.querySelectorAll("#sc-start-point fieldset"),a=0;a<n.length;a++){var o=n[a].dataset.key,l=document.getElementById("headlineTag-"+o).value,r=document.getElementById("question-"+o).value,i=document.getElementById("answer-"+o).value,c=document.getElementById("imageID-"+o).innerHTML;t+="headline-".concat(o,'="').concat(l,'" question-').concat(o,'="').concat(r,'" answer-').concat(o,'="').concat(i,'" image-').concat(o,'="').concat(c,'" ')}return t+=' count="'.concat(n.length,'" html="').concat(e.data.giveHTML,'" css_class="').concat(e.data.sc_css_classes,'"]')},window.removeLastFAQ=function(){document.querySelector("#sc-start-point fieldset:last-of-type").remove()};var r=function(e){var t="",n=500;return datetimeLocalSupported()||(t="(Format: 2019-08-22T10:25)",n=800),{text:"Event",tooltip:"Adds a Event block to the page.",onclick:function(){e.windowManager.open({title:"Featured Snippet Event",minWidth:n,height:500,autoScroll:!0,classes:"sc-panel",body:[{type:"checkbox",name:"giveHTML",label:"Render HTML",checked:!0},{type:"listbox",name:"titleTag",label:"Headline-Tag",values:[{text:"h2",value:"h2"},{text:"h3",value:"h3"},{text:"h4",value:"h4"},{text:"h5",value:"h5"},{text:"h6",value:"h6"},{text:"p",value:"p"}],value:"h2"},{label:"Title",type:"textbox",name:"title",value:"",placeholder:"Enter Your Event Title...",multiline:!0},{type:"textbox",name:"description",label:"Description",value:"",placeholder:"Enter your Event Description here...",multiline:!0,minHeight:100},{type:"textbox",name:"image_id",label:"Image",value:"",classes:"image"},{type:"button",name:"select_image",label:" ",text:"Select Image",classes:"select_image"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">Company</h1>'},{type:"textbox",name:"eventLocation",label:"Name",value:"",placeholder:"Event Location Name",multiline:!0},{type:"textbox",name:"startDate",label:"Start Date ".concat(t),classes:"sc_start_date"},{type:"textbox",name:"endDate",label:"End Date ".concat(t),classes:"sc_end_date"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">Event Location</h1>'},{type:"textbox",name:"streetAddress",label:"Street",value:"",placeholder:"Any Street 3A"},{type:"textbox",name:"postalCode",label:"Postal Code",value:"",placeholder:"Any Postal Code"},{type:"textbox",name:"addressLocality",label:"Locality",value:"",placeholder:"Any City"},{type:"textbox",name:"addressCountry",label:"Country ISO Code",value:"",placeholder:"US"},{type:"textbox",name:"addressRegion",label:"Region ISO Code",value:"",placeholder:"CA"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">Performer</h1>'},{type:"listbox",name:"performer",label:"Performer Type",values:[{text:"Performing Group",value:"PerformingGroup"},{text:"Person",value:"Person"}]},{type:"textbox",name:"performerName",label:"Performer",value:"",placeholder:"John Doe"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">Offer</h1>'},{type:"listbox",name:"offerAvailability",label:"Availability",values:[{text:"In Stock",value:"InStock"},{text:"Sold Out",value:"SoldOut"},{text:"Pre Order",value:"PreOrder"}]},{type:"textbox",name:"offerUrl",label:"Ticket Website",value:"",placeholder:"https://example.com",multiline:!1},{type:"textbox",name:"currencyCode",label:"Currency ISO Code",value:"",placeholder:"USD"},{type:"textbox",name:"price",label:"Price",value:"",placeholder:"40.00"},{type:"textbox",name:"offerValidFrom",label:"Valid From ".concat(t),classes:"sc_valid_from"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">Additional</h1>'},{type:"textbox",name:"cssClass",label:"CSS classes",value:""}],onsubmit:function(t){e.insertContent('[sc_fs_event \n                            html="'.concat(t.data.giveHTML,'" \n                            title="').concat(t.data.title,'" \n                            title_tag="').concat(t.data.titleTag,'"\n                            event_location="').concat(t.data.eventLocation,'"\n                            start_date="').concat(t.data.startDate,'"\n                            end_date="').concat(t.data.endDate,'"\n                            street_address="').concat(t.data.streetAddress,'"\n                            address_locality="').concat(t.data.addressLocality,'"\n                            address_region="').concat(t.data.addressRegion,'"\n                            postal_code="').concat(t.data.postalCode,'"\n                            address_country="').concat(t.data.addressCountry,'"\n                            image_id="').concat(t.data.image_id,'"\n                            performer="').concat(t.data.performer,'"\n                            performer_name="').concat(t.data.performerName,'"\n                            offer_availability="').concat(t.data.offerAvailability,'"\n                            offer_url="').concat(t.data.offerUrl,'"\n                            currency_code="').concat(t.data.currencyCode,'"\n                            price="').concat(t.data.price,'"\n                            offer_valid_from="').concat(t.data.offerValidFrom,'"\n                            css_class="').concat(t.data.cssClass,'"\n                ]\n                ').concat(t.data.description,"\n                [/sc_fs_event]"))}}),datetimeLocalSupported()&&(document.querySelector(".mce-sc_start_date").type="datetime-local",document.querySelector(".mce-sc_end_date").type="datetime-local",document.querySelector(".mce-sc_valid_from").type="datetime-local"),bindImageButtons()}}},i=function(e){return{text:"Person",tooltip:"Adds a Person block to the page.",onclick:function(){e.windowManager.open({title:"Featured Snippet Person",minWidth:500,height:500,autoScroll:!0,classes:"sc-panel",body:[{type:"checkbox",name:"giveHTML",label:"Render HTML",checked:!0},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">Personal</h1>'},{label:"Name",type:"textbox",name:"personName",value:"",placeholder:"Please enter your Name here ...",multiline:!0},{label:"Job Title",type:"textbox",name:"jobTitle",value:"",placeholder:"Please enter your job title here ...",multiline:!0},{type:"textbox",name:"sc_img",label:"Image",value:"",classes:"image"},{type:"button",name:"select_image",label:" ",text:"Select Image",classes:"select_image"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">Contact</h1>'},{type:"textbox",name:"email",label:"E-Mail",value:"",placeholder:"jane-doe@xyz.edu",multiline:!1},{type:"textbox",name:"homepage",label:"URL",value:"",placeholder:"https://example.com",multiline:!1},{type:"textbox",name:"telephone",label:"Telephone",value:"",placeholder:"(425) 123-4567",multiline:!1},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">Address</h1>'},{type:"textbox",name:"streetAddress",label:"Street",value:"",placeholder:"Any Street 3A"},{type:"textbox",name:"postalCode",label:"Postal Code",value:"",placeholder:"Any Postal Code"},{type:"textbox",name:"addressLocality",label:"Locality",value:"",placeholder:"Any City"},{type:"textbox",name:"addressCountry",label:"Country ISO Code",value:"",placeholder:"US"},{type:"textbox",name:"addressRegion",label:"Region ISO Code",value:"",placeholder:"CA"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">Colleague</h1>'},{type:"textbox",name:"colleague",label:"Colleague",value:"",placeholder:"Comma seperated URLs"},{type:"textbox",name:"sc_cssClass",label:"CSS classes",value:"",default:""}],onsubmit:function(t){e.insertContent('[sc_fs_person \n                            html="'.concat(t.data.giveHTML,'"\n                            person_name="').concat(t.data.personName,'" \n                            job_title="').concat(t.data.jobTitle,'" \n                            image_id="').concat(t.data.sc_img,'"\n                            street_address="').concat(t.data.streetAddress,'"\n                            address_locality="').concat(t.data.addressLocality,'"\n                            address_region="').concat(t.data.addressRegion,'"\n                            postal_code="').concat(t.data.postalCode,'"\n                            address_country="').concat(t.data.addressCountry,'"\n                            email="').concat(t.data.email,'"\n                            url="').concat(t.data.homepage,'"\n                            telephone="').concat(t.data.telephone,'"\n                            css_class="').concat(t.data.sc_cssClass,'"\n                            colleague="').concat(t.data.colleague,'"\n                        ]'))}}),bindImageButtons()}}},c=function(e){return{text:"Course",tooltip:"Adds a Course block to the page.",onclick:function(){e.windowManager.open({title:"Featured Snippet Course",minWidth:500,height:500,autoScroll:!0,classes:"sc-panel",body:[{type:"checkbox",name:"giveHTML",label:"Render HTML",checked:!0},{type:"listbox",name:"titleTag",label:"Headline-Tag",values:[{text:"h2",value:"h2"},{text:"h3",value:"h3"},{text:"h4",value:"h4"},{text:"h5",value:"h5"},{text:"h6",value:"h6"},{text:"p",value:"p"}],value:"h2"},{label:"Title",type:"textbox",name:"title",value:"",placeholder:"Enter Your Course Title...",multiline:!0},{type:"textbox",name:"description",label:"Description",value:"",placeholder:"Enter your Course Description here...",multiline:!0,minHeight:100},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">Provider</h1>'},{type:"textbox",name:"providerName",label:"Name",value:"",placeholder:"Provider Name",multiline:!1},{type:"textbox",name:"providerSameAs",label:"Same As",value:"",placeholder:"https://example.com",multiline:!1},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">Additional</h1>'},{type:"textbox",name:"cssClass",label:"CSS classes",value:""}],onsubmit:function(t){e.insertContent('[sc_fs_course \n                            html="'.concat(t.data.giveHTML,'" \n                            title="').concat(t.data.title,'" \n                            title_tag="').concat(t.data.titleTag,'"\n                            provider_name="').concat(t.data.providerName,'"\n                            provider_same_as="').concat(t.data.providerSameAs,'"\n                            css_class="').concat(t.data.cssClass,'"\n                ]\n                ').concat(t.data.description,"\n                [/sc_fs_course]"))}})}}};"undefined"!=typeof tinymce&&tinymce.PluginManager.add("structured_content_dropdown",(function(e,t){e.addButton("structured_content_dropdown",{icon:"structured-content",type:"menubutton",menu:[a(e),l(e),o(e),r(e),i(e),c(e)]})}))}]);