(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"062b":function(e,t,i){"use strict";i("3e35")},"076e":function(e,t,i){"use strict";i("aa0b")},"0dda":function(e,t,i){"use strict";i("c36b")},"29db":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],ref:"container",staticClass:"TheHome-container",on:{wheel:e.handleWheel}},[i("ul",{staticClass:"carousel-container",style:e.carouselContainerStyleObj,on:{transitionend:e.handleTransitionend}},e._l(e.banners,(function(e){return i("li",{key:e.id,staticClass:"item"},[i("CarouselItemVue",{attrs:{carouselItemData:e}})],1)})),0),i("div",{staticClass:"arrow-container"},[i("div",{directives:[{name:"show",rawName:"v-show",value:0!==e.index,expression:"index !== 0"}],staticClass:"arrow arrow-up",on:{click:function(t){e.index--}}},[i("BaseIcon",{attrs:{type:"arrowUp"}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:e.index!==e.totalCount-1,expression:"index !== totalCount - 1"}],staticClass:"arrow arrow-down",on:{click:function(t){e.index++}}},[i("BaseIcon",{attrs:{type:"arrowUp"}})],1)]),i("ul",{staticClass:"indicator-container"},e._l(e.banners,(function(t,n){return i("li",{key:t.id,staticClass:"indicator",class:{active:n===e.index},on:{click:function(t){e.index=n}}})})),0)])},s=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"outerContainer",staticClass:"CarouselItem-container",on:{mousemove:e.handleMouseMove,mouseleave:e.setMousePosCenter}},[i("div",{ref:"innerContainer",staticClass:"img-container",style:e.imgPos},[i("ImageLoader",{attrs:{placeholderSrc:e.carouselItemData.midImg,originalSrc:e.carouselItemData.bigImg,duration:3e3},on:{load:e.handleLoaded}})],1),i("div",{staticClass:"text-container"},[i("p",{staticClass:"wrap"},[i("span",{ref:"title",staticClass:"title"},[e._v(e._s(e.carouselItemData.title))])]),i("p",{staticClass:"wrap"},[i("span",{ref:"des",staticClass:"des"},[e._v(e._s(e.carouselItemData.description))])])])])},o=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"imageLoader-container"},[i("img",{staticClass:"original",style:e.originalStyle,attrs:{src:e.originalSrc},on:{load:e.handleLoad}}),i("img",{ref:"placeholder",staticClass:"placeholder",attrs:{src:e.placeholderSrc}})])},h=[],d={data(){return{isOriginalLoaded:!1}},props:{originalSrc:{type:String},placeholderSrc:{type:String,required:!0},duration:{type:Number,default:500}},computed:{originalStyle(){return{opacity:this.isOriginalLoaded?1:0,transition:this.duration+"ms"}}},methods:{handleLoad(){this.isOriginalLoaded=!0,setTimeout(()=>{var e;null===(e=this.$refs.placeholder)||void 0===e||e.remove(),this.$emit("load")},this.duration)}}},l=d,c=(i("076e"),i("2877")),u=Object(c["a"])(l,r,h,!1,null,"54d988e4",null),g=u.exports,m=i("ed08");const C=m["a"].debounce;var p={name:"CarouselItem",props:["carouselItemData"],components:{ImageLoader:g},computed:{imgPos(){const e={width:this.innerContainerSize.width-this.outerContainerSize.width,height:this.innerContainerSize.height-this.outerContainerSize.height},t=-e.width*(this.mousePos.x/this.outerContainerSize.width)+"px",i=-e.height*(this.mousePos.y/this.outerContainerSize.height)+"px";return{transform:`translate(${t}, ${i})`}}},data(){return{titleWidth:0,desWidth:0,mousePos:{x:0,y:0},outerContainerSize:{width:0,height:0},innerContainerSize:{height:0,width:0}}},mounted(){this.titleWidth=this.$refs.title.clientWidth,this.desWidth=this.$refs.des.clientWidth,this.getSize(),this.setMousePosCenter(),this.getSizeDebounce=C(this.getSize),window.addEventListener("resize",this.getSizeDebounce)},beforeDestroy(){window.removeEventListener("resize",this.getSizeDebounce)},methods:{setMousePosCenter(){this.mousePos.x=this.outerContainerSize.width/2,this.mousePos.y=this.outerContainerSize.height/2},handleMouseMove(e){const t=this.$refs.outerContainer.getBoundingClientRect();this.mousePos={x:e.clientX-t.left,y:e.clientY-t.top}},getSize(){const e=this.$refs.outerContainer.getBoundingClientRect(),t=this.$refs.innerContainer.getBoundingClientRect();this.outerContainerSize={height:e.height,width:e.width},this.innerContainerSize={height:t.height,width:t.width}},handleLoaded(){const e=this.$refs.title,t=this.$refs.des;e.style.width=0,e.clientHeight,e.style.transition="1s",e.style.opacity=1,e.style.width=this.titleWidth+"px",e.style.letterSpacing=".5em",t.style.width=0,t.clientHeight,t.style.transition="2s 1s",t.style.opacity=1,t.style.width=this.desWidth+"px",t.style.letterSpacing=".5em"}}},w=p,f=(i("0dda"),Object(c["a"])(w,a,o,!1,null,"2d86e2f8",null)),v=f.exports,S=i("8bac"),y=i("2f62");const x=m["a"].debounce;var b={name:"TheHome",data(){return{index:0,containerHeight:0,isChanging:!1}},components:{CarouselItemVue:v,BaseIcon:S["a"]},computed:{...Object(y["d"])("Home",["banners","isLoading"]),carouselContainerStyleObj(){return{marginTop:-this.index*this.containerHeight+"px"}},totalCount(){return this.banners.length}},created(){this.fetchData()},mounted(){this.containerHeight=this.$refs.container.clientHeight,window.addEventListener("resize",this.handleSize)},destroyed(){window.removeEventListener("resize",this.handleSize)},methods:{...Object(y["c"])("Home",["fetchData"]),handleWheel(e){if(this.isChanging)return;const t=e.deltaY;t>5&&this.index<this.totalCount-1?(this.isChanging=!0,this.index++):t<-5&&this.index>0&&(this.isChanging=!0,this.index--)},handleTransitionend(){this.isChanging=!1},handleSize(){const e=x(()=>{this.containerHeight=this.$refs.container.clientHeight},200);e()}}},z=b,I=(i("062b"),Object(c["a"])(z,n,s,!1,null,"00d1fe0e",null));t["default"]=I.exports},"3e35":function(e,t,i){},aa0b:function(e,t,i){},c36b:function(e,t,i){}}]);