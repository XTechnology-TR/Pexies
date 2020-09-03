(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profileID"],{2352:function(t,e,s){"use strict";var i=s("ec72"),o=s.n(i);o.a},"32fe":function(t,e,s){},"45e7":function(t,e,s){"use strict";var i=s("32fe"),o=s.n(i);o.a},"587c":function(t,e,s){"use strict";var i=s("a9dd"),o=s.n(i);o.a},"5fed":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.transition,expression:"!$store.state.transition"}],staticClass:"photos",attrs:{id:"intersection"}},[s("div",{staticStyle:{display:"flex","flex-wrap":"wrap","align-items":"center","justify-content":"center",height:"100%",width:"100%"}},t._l(t.photos,(function(e,i){return s("div",{key:i+""+Math.random(),staticClass:"photo",class:[t.lightMode?"dark_shadows":"light",i<t.perPage?"":"intersect",t.isPhotoLikeable(e)?"":"disable_grayscale"],staticStyle:{width:"200px",height:"200px"},style:{visibility:i<t.perPage?"":"hidden",opacity:i<t.perPage?1:0}},[s("lazy-component",{staticStyle:{height:"100%",width:"100%","z-index":"1"}},[s("img",{staticStyle:{width:"100%",height:"100%","object-fit":"cover"},attrs:{src:e.src.medium?e.src.medium:e.src.small}})]),s("div",{staticStyle:{"z-index":"2",background:"transparent"}},[s("Photo",{attrs:{photo:e},on:{like:function(e){return t.callbackFunc()}}})],1)],1)})),0),t.photos&&0==t.photos.length||!t.photos?s("b-message",{key:"message",staticClass:"my-2",staticStyle:{"animation-duration":"100ms"},attrs:{type:"is-danger"}},[t._v("There is nothing here... ")]):t._e()],1)},o=[],a=s("7856"),r={props:["name","userPhotos","pageStart","pageEnd"],data(){return{offsetTop:0,currentPage:1,total:null,loaded:!1}},watch:{photos(){this.callbackFunc()},offsetTop(t){this.callbackFunc()}},components:{Photo:a["a"]},computed:{likedImgs(){const t=localStorage.getItem("likedPhotos"),e=this.$store.getters.getCurrentUsersFavourites;return e?e&&t?[...JSON.parse(t),...e]:[]:JSON.parse(t)},perPage(){return window.innerWidth>=1920?24:window.innerWidth>=1440?16:window.innerWidth>=1280||window.innerWidth>=768?12:8},lightMode(){return this.$store.getters["getNightMode"]},photos(){if("curated"==this.$props.name)return console.log(this.pageStart,this.pageEnd),this.$store.getters.getCuratedPhotos.slice(this.pageStart,this.pageEnd);if("random"==this.$props.name)return this.$store.getters.getRandomPhotos;if("user"==this.$props.name){const t=this.$store.getters.getCurrentUsersFavourites.slice(this.pageStart,this.pageEnd);return t||[]}if("guest"==this.$props.name){const t=this.$store.getters.getFavourites.slice(this.pageStart,this.pageEnd);return t||[]}if("search"==this.$props.name)return this.$store.getters.getSearchResults;if("profile"==this.$props.name){const t=this.$store.getters.getCurrentUsersFavourites;return t.reverse()}if("profileID"==this.$props.name){const t=this.$props.userPhotos;return t.reverse()}return"dashboard"==this.$props.name?this.$store.getters.getDashboard.slice(this.pageStart,this.pageEnd):[]}},methods:{isPhotoLikeable(t){const e=this.likedImgs.find(e=>e.url==t.url);return!e},onScroll(t){console.log("scrolling");const e=document.getElementById("intersection");this.offsetTop=e.scrollTop},isElementInViewport(t){const e=document.getElementById("intersection"),s=t.getBoundingClientRect();return s.top>=-100&&s.bottom<=(e.innerHeight||e.clientHeight)+400},callbackFunc(){const t=document.querySelectorAll(".intersect");for(let e=0;e<t.length;e++)this.isElementInViewport(t[e])?t[e].classList.add("in-view"):t[e].classList.remove("in-view")}},async mounted(){const t=this,e=document.getElementById("intersection");switch(e.addEventListener("scroll",this.onScroll),this.$store.commit("showLoader"),this.$props.name){case"curated":this.$store.dispatch("getCuratedPexels",this.$buefy);break;case"random":setTimeout(()=>{t&&t.$store.dispatch("getRandomPexels",this.$buefy)},300);break;case"user":break;case"guest":this.$store.dispatch("loadFavourites",this.$buefy);break}this.callbackFunc(),setTimeout(()=>{t&&(t.loaded=!0)},2e3)},destroyed(){const t=document.getElementById("intersection");t.removeEventListener("scroll",this.onScroll)}},n=r,l=(s("45e7"),s("2877")),c=Object(l["a"])(n,i,o,!1,null,null,null);e["a"]=c.exports},7856:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.propCopy?s("div",{staticClass:"photo_link_wrapper"},[s("b-tag",{staticClass:"photographer",attrs:{type:"is-primary"}},[t.propCopy.photographer_url?s("a",{staticStyle:{color:"white"},attrs:{target:"_blank",href:t.propCopy.photographer_url}},[t._v(" "+t._s(t.propCopy.photographer&&t.propCopy.photographer.length>15?t.propCopy.photographer.substring(0,15)+"...":t.propCopy.photographer+"unknown")+" ")]):t._e()]),s("transition-group",{staticClass:"like_button",attrs:{tag:"div",name:"fade",mode:"out-in"}},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.isPhotoLikeable(t.propCopy)&&"/favourites"!==t.path,expression:"isPhotoLikeable(propCopy) && path !== '/favourites'"}],key:"like",on:{click:function(e){return t.like(t.propCopy)}}},[s("i",{staticClass:"fa fa-heart btn_icon"})]),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.isPhotoLikeable(t.propCopy),expression:"!isPhotoLikeable(propCopy)"}],key:"dislike",on:{click:function(e){return t.dislike(t.propCopy)}}},[s("i",{staticClass:"fa fa-times btn_icon"})])]),s("span",{staticClass:"expand_button",on:{click:t.expand}},[s("i",{staticClass:"fa fa-expand btn_icon"})]),s("span",{staticClass:"visit_button",on:{click:t.visit}},[s("i",{staticClass:"fa fa-search btn_icon"})])],1):t._e()},o=[],a=s("9ab4"),r=s("2b0e"),n=r["a"].extend({props:["photo"],data:function(){return{propCopy:{}}},created:function(){this.propCopy=JSON.parse(JSON.stringify(this.photo)),this.$emit("like")},mounted:function(){this.$emit("like")},methods:{expand:function(t){this.$store.commit("showLoader");var e=document.createElement("img");e.src=this.propCopy.src.original,e.onload=function(t){if(t.path&&t.path[0]){var e=t.path[0].naturalWidth/t.path[0].naturalHeight;i(e)}};var s=this;function i(t){var e;e=t<.5?"4by3":"16by9";var i=s.$createElement,o=i("p",{class:"image modal_image is-"+e},[i("img",{attrs:{src:s.propCopy.src.original}})]);s.$store.dispatch("expandPhoto",{$el:o,$buefy:s.$buefy})}},visit:function(){window.open(this.propCopy.url,"_blank")},like:function(t){this.isPhotoLikeable(t)?(this.propCopy.liked=!0,this.$store.dispatch("likePhoto",{photo:t,username:this.$store.state.auth.user.username,$buefy:this.$buefy}),this.$emit("like")):this.$buefy.toast.open({message:"You already liked this photo.",type:"is-danger"})},dislike:function(t){var e=this.$store.getters.getCurrentUser.username;this.$store.dispatch("dislikePhoto",{photo:t,username:e,$buefy:this.$buefy}),this.$emit("like")},isPhotoLikeable:function(t){var e=this.likedImgs.find((function(e){return e.url==t.url}));return!e}},computed:{path:function(){return this.$route.path},likedImgs:function(){var t=localStorage.getItem("likedPhotos"),e=this.$store.getters.getCurrentUsersFavourites;return!e&&t?JSON.parse(t):t&&e?Object(a["c"])(JSON.parse(t),e):[]}}}),l=n,c=(s("2352"),s("2877")),p=Object(c["a"])(l,i,o,!1,null,null,null);e["a"]=p.exports},8946:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.user&&t.user.username?s("div",{staticClass:"profile_page box",class:t.darkMode?"bg-dark":""},[s("div",{staticClass:"profile_header",staticStyle:{position:"relative"},style:"background-image: url("+t.user.preferences.profile_cover+")"},[s("div",{staticClass:"profile_picture"},[t.$store.state.PPloading?s("div",{staticClass:"pp_loader"},[s("QSpinnerInfinity",{staticStyle:{color:"hotpink"}})],1):t._e(),s("img",{staticClass:"profile_picture_img",attrs:{alt:t.user.username,src:t.user.preferences.profile_picture}})]),s("div",{staticClass:"profile_props"},[s("p",{staticClass:"my-2 text-bold profile_name",staticStyle:{"font-size":"16px",display:"inline-block",cursor:"default"}},[t._v(" "+t._s(t.user.username))]),s("ul",{staticClass:"profile_stats"},[s("li",{staticClass:"stat_box"},[s("div",{staticClass:"stat text-bold"},[s("i",{staticClass:"fas fa-heart",staticStyle:{color:"deeppink"}}),s("span",{staticClass:"mt-1"},[t._v(t._s(t.user.favourites.length))])]),s("br")]),s("li",{staticClass:"stat_box"},[s("div",{staticClass:"stat text-bold",attrs:{type:"is-primary"}},[s("i",{staticClass:"fas fa-users",staticStyle:{color:"deeppink"}}),s("span",{staticClass:"mt-1"},[t._v(t._s(t.user.followers.length))])])])])])]),s("div",{staticClass:"profile_content"},[s("b-tabs",{attrs:{type:"is-toggle is-warning",expanded:""}},[s("b-tab-item",{attrs:{label:"Favourites","icon-pack":"fa",icon:"heart"}},[s("Photos",{attrs:{name:"profileID",userPhotos:t.user.favourites}})],1),s("b-tab-item",{attrs:{label:"Followers","icon-pack":"fa",icon:"users"}},[s("p",{staticStyle:{"text-align":"center",width:"50%",margin:"0 auto"}},[t._v("This feature is not available right now. Come back soon:)")])]),s("b-tab-item",{attrs:{label:"Following","icon-pack":"fa",icon:"user"}},[s("p",{staticStyle:{"text-align":"center",width:"50%",margin:"0 auto"}},[t._v("This feature is not available right now. Come back soon:)")])])],1)],1)]):t._e()},o=[],a=s("5fed"),r=s("bc3a"),n=s.n(r),l={name:"Profile",components:{Photos:a["a"]},data(){return{user:null}},computed:{notBusy(){return this.$store.state.PPloading},darkMode(){return this.$store.getters["getNightMode"]}},async created(){const t=this.$route.params.username;if(t){const{data:e}=await n.a.get("/api/user/getbyusername/"+t);this.user=e,console.log(e),this.$store.commit("hideLoader")}}},c=l,p=(s("587c"),s("2877")),h=Object(p["a"])(c,i,o,!1,null,null,null);e["default"]=h.exports},a9dd:function(t,e,s){},ec72:function(t,e,s){}}]);
//# sourceMappingURL=profileID.1e909627.js.map