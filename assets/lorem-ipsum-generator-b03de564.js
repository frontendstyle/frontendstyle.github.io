import{ci as x,d as y,n as c,b as j,s as k,c as C,w as o,v as L,o as A,i as a,h as i,x as d,f as I,j as U,cj as b,y as $,m as S}from"./index-d4d1dfb2.js";import{_ as T}from"./Slider-24ca20e1.js";import{_ as B}from"./FormItem-cc07462d.js";import{_ as N}from"./Switch-041764a1.js";import"./use-form-item-d41cebbd.js";const P=["a","ac","accumsan","ad","adipiscing","aenean","aliquam","aliquet","amet","ante","aptent","arcu","at","auctor","bibendum","blandit","class","commodo","condimentum","congue","consectetur","consequat","conubia","convallis","cras","cubilia","cum","curabitur","curae","dapibus","diam","dictum","dictumst","dignissim","dolor","donec","dui","duis","egestas","eget","eleifend","elementum","elit","enim","erat","eros","est","et","etiam","eu","euismod","facilisi","faucibus","felis","fermentum","feugiat","fringilla","fusce","gravida","habitant","habitasse","hac","hendrerit","himenaeos","iaculis","id","imperdiet","in","inceptos","integer","interdum","ipsum","justo","lacinia","lacus","laoreet","lectus","leo","ligula","litora","lobortis","lorem","luctus","maecenas","magna","magnis","malesuada","massa","mattis","mauris","metus","mi","molestie","mollis","montes","morbi","mus","nam","nascetur","natoque","nec","neque","netus","nisi","nisl","non","nostra","nulla","nullam","nunc","odio","orci","ornare","parturient","pellentesque","penatibus","per","pharetra","phasellus","placerat","platea","porta","porttitor","posuere","potenti","praesent","pretium","primis","proin","pulvinar","purus","quam","quis","quisque","rhoncus","ridiculus","risus","rutrum","sagittis","sapien","scelerisque","sed","sem","semper","senectus","sit","sociis","sociosqu","sodales","sollicitudin","suscipit","suspendisse","taciti","tellus","tempor","tempus","tincidunt","torquent","tortor","turpis","ullamcorper","ultrices","ultricies","urna","varius","vehicula","vel","velit","venenatis","vestibulum","vitae","vivamus","viverra","volutpat","vulputate"],V="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";function W(f){const n=Array.from({length:f}).map(()=>x(P)).join(" ");return`${n.charAt(0).toUpperCase()+n.slice(1)}.`}function F({paragraphCount:f=1,sentencePerParagraph:n=3,wordCount:l=10,startWithLoremIpsum:u=!0,asHTML:r=!1}){const s=Array.from({length:f}).map(()=>Array.from({length:n}).map(()=>W(l)));return u&&(s[0][0]=V),r?`<p>${s.map(m=>m.join(" ")).join(`</p>

<p>`)}</p>`:s.map(m=>m.join(" ")).join(`

`)}const H={"mt-5":"",flex:"","justify-center":""},G=y({__name:"lorem-ipsum-generator",setup(f){const n=c(1),l=c([3,8]),u=c([8,15]),r=c(!0),s=c(!1),m=j(()=>F({paragraphCount:n.value,asHTML:s.value,sentencePerParagraph:b(l.value[0],l.value[1]),wordCount:b(u.value[0],u.value[1]),startWithLoremIpsum:r.value})),{copy:g}=k({source:m,text:"Lorem ipsum copied to the clipboard"});return(M,e)=>{const _=T,p=B,v=N,h=$,w=S,q=L;return A(),C(q,null,{default:o(()=>[a(p,{label:"Paragraphs","show-feedback":!1,"label-width":"200","label-placement":"left"},{default:o(()=>[a(_,{value:i(n),"onUpdate:value":e[0]||(e[0]=t=>d(n)?n.value=t:null),step:1,min:1,max:20},null,8,["value"])]),_:1}),a(p,{label:"Sentences per paragraph","show-feedback":!1,"label-width":"200","label-placement":"left"},{default:o(()=>[a(_,{value:i(l),"onUpdate:value":e[1]||(e[1]=t=>d(l)?l.value=t:null),range:"",step:1,min:1,max:50},null,8,["value"])]),_:1}),a(p,{label:"Words per sentence","show-feedback":!1,"label-width":"200","label-placement":"left"},{default:o(()=>[a(_,{value:i(u),"onUpdate:value":e[2]||(e[2]=t=>d(u)?u.value=t:null),range:"",step:1,min:1,max:50},null,8,["value"])]),_:1}),a(p,{label:"Start with lorem ipsum ?","show-feedback":!1,"label-width":"200","label-placement":"left"},{default:o(()=>[a(v,{value:i(r),"onUpdate:value":e[3]||(e[3]=t=>d(r)?r.value=t:null)},null,8,["value"])]),_:1}),a(p,{label:"As html ?","show-feedback":!1,"label-width":"200","label-placement":"left"},{default:o(()=>[a(v,{value:i(s),"onUpdate:value":e[4]||(e[4]=t=>d(s)?s.value=t:null)},null,8,["value"])]),_:1}),a(h,{value:i(m),multiline:"",placeholder:"Your lorem ipsum...",readonly:"","mt-5":"",rows:"5"},null,8,["value"]),I("div",H,[a(w,{autofocus:"",onClick:e[5]||(e[5]=t=>i(g)())},{default:o(()=>[U(" Copy ")]),_:1})])]),_:1})}}});export{G as default};
