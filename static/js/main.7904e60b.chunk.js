(this.webpackJsonpflashcard_app=this.webpackJsonpflashcard_app||[]).push([[0],{24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(17),s=n.n(a),i=n(18),o=n(3),u=n(0);function d(e){var t=e.flashcard,n=Object(c.useState)(!1),r=Object(o.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)("initial"),d=Object(o.a)(i,2),j=d[0],l=d[1],f=Object(c.useRef)(),b=Object(c.useRef)();function h(){var e=f.current.getBoundingClientRect().height,t=b.current.getBoundingClientRect().height;l(Math.max(e,t,100))}return Object(c.useEffect)(h,[t.question,t.answer,t.options]),Object(c.useEffect)((function(){return window.addEventListener("resize",h),function(){return window.removeEventListener("resize",h)}}),[]),Object(u.jsxs)("div",{className:"card ".concat(a?"flip":""),style:{height:j},onClick:function(){return s(!a)},children:[Object(u.jsxs)("div",{className:"front",ref:f,children:[t.question,Object(u.jsx)("div",{className:"flashcard-options",children:t.options.map((function(e){return Object(u.jsx)("div",{className:"flashcard-option",children:e},e)}))})]}),Object(u.jsx)("div",{className:"back",ref:b,children:t.answer})]})}function j(e){var t=e.flashcards;return Object(u.jsx)("div",{className:"card-grid",children:t.map((function(e){return Object(u.jsx)(d,{flashcard:e},t.id)}))})}n(24);var l=n(8),f=n.n(l);var b=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(o.a)(a,2),d=s[0],l=s[1],b=Object(c.useRef)(),h=Object(c.useRef)();function m(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value}return Object(c.useEffect)((function(){f.a.get("https://opentdb.com/api_category.php").then((function(e){l(e.data.trivia_categories)}))}),[]),Object(c.useEffect)((function(){}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("form",{className:"header",onSubmit:function(e){e.preventDefault(),f.a.get("https://opentdb.com/api.php",{params:{amount:h.current.value,category:b.current.value}}).then((function(e){r(e.data.results.map((function(e,t){var n=m(e.correct_answer),c=[].concat(Object(i.a)(e.incorrect_answers.map((function(e){return m(e)}))),[n]);return{id:"".concat(t,"-").concat(Date.now()),question:m(e.question),answer:n,options:c.sort((function(){return Math.random()-.5}))}})))}))},children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"category",children:"Category"}),Object(u.jsx)("select",{id:"category",ref:b,children:d.map((function(e){return Object(u.jsxs)("option",{value:e.id,children:[e.name," "]},e.id)}))})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"amount",children:"Number Of Questions"}),Object(u.jsx)("input",{type:"number",id:"amount",min:"1",step:"1",defaultValue:10,ref:h})]}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("button",{className:"btn",children:"Generate"})})]}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(j,{flashcards:n})})]})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.7904e60b.chunk.js.map