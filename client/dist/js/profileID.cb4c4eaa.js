(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profileID"],{"587c":function(t,s,e){"use strict";var a=e("a9dd"),i=e.n(a);i.a},8946:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.user&&t.user.username?e("div",{staticClass:"profile_page box",class:t.darkMode?"bg-dark":""},[e("div",{staticClass:"profile_header",staticStyle:{position:"relative"},style:"background-image: url("+t.user.preferences.profile_cover+")"},[e("div",{staticClass:"profile_picture"},[t.$store.state.PPloading?e("div",{staticClass:"pp_loader"},[e("QSpinnerInfinity",{staticStyle:{color:"hotpink"}})],1):t._e(),e("img",{staticClass:"profile_picture_img",attrs:{alt:t.user.username,src:t.user.preferences.profile_picture}})]),e("div",{staticClass:"profile_props"},[e("p",{staticClass:"my-2 text-bold profile_name",staticStyle:{"font-size":"16px",display:"inline-block",cursor:"default"}},[t._v(" "+t._s(t.user.username))]),e("ul",{staticClass:"profile_stats"},[e("li",{staticClass:"stat_box"},[e("div",{staticClass:"stat text-bold"},[e("i",{staticClass:"fas fa-heart",staticStyle:{color:"deeppink"}}),e("span",{staticClass:"mt-1"},[t._v(t._s(t.user.favourites.length))])]),e("br")]),e("li",{staticClass:"stat_box"},[e("div",{staticClass:"stat text-bold",attrs:{type:"is-primary"}},[e("i",{staticClass:"fas fa-users",staticStyle:{color:"deeppink"}}),e("span",{staticClass:"mt-1"},[t._v(t._s(t.user.followers.length))])])])])])]),e("div",{staticClass:"profile_content"},[e("b-tabs",{attrs:{type:"is-toggle is-warning",expanded:""}},[e("b-tab-item",{attrs:{label:"Favourites","icon-pack":"fa",icon:"heart"}},[e("Photos",{attrs:{name:"profileID",userPhotos:t.user.favourites}})],1),e("b-tab-item",{attrs:{label:"Followers","icon-pack":"fa",icon:"users"}}),e("b-tab-item",{attrs:{label:"Following","icon-pack":"fa",icon:"user"}})],1)],1)]):t._e()},i=[],r=e("5fed"),o=e("7338"),l=e.n(o),n={name:"Profile",components:{Photos:r["a"]},data(){return{user:null}},computed:{notBusy(){return this.$store.state.PPloading},darkMode(){return this.$store.getters["getNightMode"]}},async created(){const t=this.$route.params.username;if(t){const{data:s}=await l.a.get("/api/user/getbyusername/"+t);this.user=s,console.log(s),this.$store.commit("hideLoader")}}},c=n,p=(e("587c"),e("2877")),u=Object(p["a"])(c,a,i,!1,null,null,null);s["default"]=u.exports},a9dd:function(t,s,e){}}]);
//# sourceMappingURL=profileID.cb4c4eaa.js.map