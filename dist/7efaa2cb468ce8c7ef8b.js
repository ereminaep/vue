(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{148:function(e,t,a){},155:function(e,t,a){"use strict";a(148)},163:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"drop display-inline align-center",class:{error:e.errorMessage},on:{dragover:function(e){e.preventDefault()},drop:e.onDrop}},[e.image?a("div",{staticClass:"hidden display-inline align-center",class:{image:!0}},[a("img",{staticClass:"img",attrs:{src:e.image,alt:""}}),a("appButton",{staticClass:"btn",attrs:{title:"Удалить"},on:{click:e.removeFile}})],1):a("div",{staticClass:"drop-text"},[e.errorMessage?a("span",[e._v(e._s(e.errorMessage)+" ")]):a("span",[e._v("Перетащите или загрузите для загрузки изображения")]),a("appButton",{attrs:{typeAttr:"file",name:"image",title:"Загрузить",errorMessage:e.errorMessage},on:{change:e.onChange}})],1)])])};i._withStripped=!0;var n=a(12),s=a(10),r={props:{photo:{type:File},errorMessage:{type:String,default:""}},components:{appInput:n.a,appButton:s.a},data:function(){return{image:""}},methods:{onDrop:function(e){e.stopPropagation(),e.preventDefault();var t=e.dataTransfer.files;this.createFile(t[0])},onChange:function(e){var t=e.target.files;this.createFile(t[0]),this.$emit("load",t[0])},createFile:function(e){if(e.type.match("image.*")){new Image;var t=new FileReader,a=this;t.onload=function(e){a.image=e.target.result},t.readAsDataURL(e)}else alert("Select an image")},removeFile:function(){this.image="",this.$emit("removeImg")}},created:function(){this.photo&&(this.image="https://webdev-api.loftschool.com/"+this.photo)}},o=(a(155),a(2)),l=Object(o.a)(r,i,[],!1,null,"4c174e73",null);l.options.__file="src/admin/components/img-load/types/default/img-load.vue";t.default=l.exports}}]);