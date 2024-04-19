import{_ as a}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-d637a71a.js";import{J as r}from"./index-d4e515d0.js";import{w as s}from"./defaults-4d6daddf.js";import{d as i,c as l,o as p}from"./index-d4d1dfb2.js";import"./TextareaCopyable-762809f4.js";import"./Copy-750171ce.js";import"./Scrollbar-8fa0a765.js";const u=`{
	"hello": [
		"world"
	]
}`,h=i({__name:"json-minify",setup(m){const t=o=>s(()=>JSON.stringify(r.parse(o),null,0),""),e=[{validator:o=>o===""||r.parse(o),message:"Provided JSON is not valid."}];return(o,f)=>{const n=a;return p(),l(n,{"input-label":"Your raw JSON","input-default":u,"input-placeholder":"Paste your raw JSON here...","output-label":"Minified version of your JSON","output-language":"json","input-validation-rules":e,transformer:t})}}});export{h as default};
