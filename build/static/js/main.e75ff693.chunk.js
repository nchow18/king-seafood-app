(this.webpackJsonpkingsseafood18=this.webpackJsonpkingsseafood18||[]).push([[0],{17:function(e,t,c){},41:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),n=c(33),i=c.n(n),o=(c(41),c(2)),s=c(10),l=c(3),d=c(0);var u=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"flex-c-column content",children:"ERROR PAGE NOT FOUND"})})};var j=function(e){var t=e.prod,c=Object(a.useState)(0),r=Object(o.a)(c,2),n=r[0],i=r[1],s=Object(a.useState)(!1),l=Object(o.a)(s,2),u=l[0],j=l[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{className:"product-card-img",onClick:function(){return j(!0)},alt:t.name,src:""+"/products/".concat(t.picture[n].trim())}),t.picture.length>1&&Object(d.jsx)("div",{className:"product-card-img-extra",children:t.picture.map((function(e,c){return Object(d.jsx)("img",{className:"product-card-img-small",onClick:function(){return i(c)},alt:c,src:""+"/products/".concat(t.picture[c].trim())},c)}))}),!0===u&&Object(d.jsx)("div",{onClick:function(){return j(!1)},className:"picture-modal",children:Object(d.jsx)("img",{alt:t.name,src:""+"/products/".concat(t.picture[n].trim())})})]})},p=c(12);var b=function(e){var t=e.prod,c=e.fav,r=e.setFav,n=e.cart,i=e.setCart,s=Object(a.useState)(1),l=Object(o.a)(s,2),u=l[0],j=l[1];return Object(d.jsxs)("div",{className:"add-cart-container",children:[Object(d.jsxs)("div",{className:"add-cart-counter-container",children:[Object(d.jsx)("div",{onClick:function(){return j(u+1)},children:"+"}),Object(d.jsx)("div",{className:"add-cart-counter",children:u}),Object(d.jsx)("div",{onClick:function(){1!==u&&j(u-1)},children:"-"})]}),Object(d.jsx)("div",{onClick:function(){return function(){var e="";if(0===c.length){var a=n;t.quantity=u;var r=[].concat(Object(p.a)(a),[t]);i(r)}else{for(var o=0;o<n.length;o++)n[o].name===t.name&&(alert("Product is already in your Cart"),e="duplicate");if("duplicate"!==e){var s=n;t.quantity=u;var l=[].concat(Object(p.a)(s),[t]);i(l)}}}()},className:"add-cart-button",children:"ADD TO CART"}),Object(d.jsx)("div",{onClick:function(){return function(){var e="";if(0===c.length){var a=c,n=[].concat(Object(p.a)(a),[t]);r(n)}else{for(var i=0;i<c.length;i++)c[i].name===t.name&&(alert("Product is already in your Favorites"),e="duplicate");if("duplicate"!==e){var o=c,s=[].concat(Object(p.a)(o),[t]);r(s)}}}()},className:"add-cart-button",children:"ADD TO FAVORITES"})]})};var h=function(e){var t=e.prod,c=e.fav,a=e.setFav,r=e.cart,n=e.setCart;return Object(d.jsxs)("div",{className:"product-card-container",children:[Object(d.jsx)("div",{className:"product-card-picture",children:Object(d.jsx)(j,{prod:t})}),Object(d.jsxs)("div",{className:"product-card-content",children:[Object(d.jsxs)("div",{className:"product-card-details",children:[Object(d.jsx)("li",{children:t.name}),Object(d.jsxs)("li",{children:["Price: RM ",t.price]}),""!==t.bulk_qty&&Object(d.jsxs)("li",{children:["Bundle Deal! Buy ",t.bulk_qty," or more for RM ",t.bulk_price," each"]}),""!==t.d1&&Object(d.jsxs)("li",{children:["\xbb ",t.d1]}),""!==t.d2&&Object(d.jsxs)("li",{children:["\xbb ",t.d2]}),""!==t.d3&&Object(d.jsxs)("li",{children:["\xbb ",t.d3]}),""!==t.d4&&Object(d.jsxs)("li",{children:["\xbb ",t.d4]})]}),Object(d.jsx)(b,{prod:t,fav:c,setFav:a,cart:r,setCart:n})]})]})};c(17);var m=function(e){var t=e.categories,c=e.products,r=e.fav,n=e.setFav,i=e.cart,s=e.setCart,l=Object(a.useState)(t),u=Object(o.a)(l,2),j=u[0],p=u[1],b=Object(a.useState)(c),m=Object(o.a)(b,2),O=m[0],f=m[1];return Object(d.jsxs)("div",{className:"products-container",children:[Object(d.jsx)("div",{className:"category-container",children:t.map((function(e){return Object(d.jsx)("li",{className:"category-icon ".concat(j===e&&"isCategoryActive"),onClick:function(){p(e),function(e){for(var t=[],a=0;a<c.length;a++)if(!1!==c[a].status)for(var r=0;r<c[a].category.length;r++)c[a].category[r].trim()===e.toLowerCase()&&!0===c[a].status&&t.push(c[a]);f(t)}(e)},children:e},e)}))}),Object(d.jsx)("div",{className:"products-list",children:O.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(h,{prod:e,fav:r,setFav:n,cart:i,setCart:s})},e.product_id)}))})]})};var O=function(){return Object(d.jsx)("div",{className:"home-page",children:Object(d.jsx)(s.b,{style:{textDecoration:"none"},to:"/products",children:Object(d.jsx)("img",{alt:"home-banner",className:"home-page-banner",src:"/images/homepage-without-bottom.png"})})})};var f=function(e){var t=e.cart,c=e.setCart,r=e.siteSale,n=e.item,i=e.index,s=e.removeItem,l=e.setTotal,u=(e.totalCart,e.getCartTotal,Object(a.useState)(n.quantity)),j=Object(o.a)(u,2),p=j[0],b=j[1],h=Object(a.useState)(),m=Object(o.a)(h,2);function O(){n.bulk_qty>=1&&n.bulk_qty<=n.quantity?n.new_price=n.bulk_price*n.quantity:""!==n.sale_price&&n.sale_price<n.price*(1-r/100)?n.new_price=n.sale_price*n.quantity:n.new_price=n.price*(1-r/100).toFixed(2)*n.quantity,t[i].new_price=n.new_price,t[i].quantity=p,c(t),localStorage.setItem("user_cart",JSON.stringify(t));for(var e="",a=0;a<t.length;a++)e=+e+ +t[a].new_price;l(e.toFixed(2))}return m[0],m[1],Object(a.useEffect)((function(){O()}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"cart-item-container",children:[Object(d.jsx)("img",{alt:n.name,src:""+"/products/".concat(n.picture[0])}),Object(d.jsxs)("div",{children:[Object(d.jsx)("li",{children:n.name}),Object(d.jsx)("li",{className:"cart-item-price",children:(n.bulk_qty>=1&&n.bulk_qty<=n.quantity?n.new_price=n.bulk_price*n.quantity:""!==n.sale_price&&n.sale_price<n.price*(1-r/100)?n.new_price=n.sale_price*n.quantity:n.new_price=n.price*(1-r/100).toFixed(2)*n.quantity,t[i].new_price=n.new_price,t[i].quantity=p,c(t),localStorage.setItem("user_cart",JSON.stringify(t)),"RM ".concat(n.new_price))}),Object(d.jsxs)("li",{className:"cart-qty-container",children:[Object(d.jsx)("div",{onClick:function(){b(p+1),n.quantity=p+1,t[i].quantity=p+1,c(t),O()},children:"+"}),Object(d.jsx)("div",{className:"add-cart-counter",children:p}),Object(d.jsx)("div",{onClick:function(){1!==p&&(b(p-1),n.quantity=p-1,t[i].quantity=p-1,c(t),O())},children:"-"})]})]}),Object(d.jsx)("div",{onClick:function(){return s(i)},className:"cart-button-delete",children:"X"})]},n.id)})};var x=function(e){var t=e.cart,c=e.setCart,r=e.sale,n=Object(a.useState)(!1),i=Object(o.a)(n,2),s=i[0],l=i[1],u=Object(a.useState)([]),j=Object(o.a)(u,2),p=j[0],b=j[1],h=[];function m(e){t.splice(e,1),localStorage.setItem("user_cart",JSON.stringify(t)),c(t.splice(0,e))}function O(){for(var e="",c=0;c<t.length;c++)e=+e+ +t[c].new_price,h.push(t[c].new_price);return e}return Object(a.useEffect)((function(){}),[t]),Object(d.jsxs)("div",{className:"cart-page",children:[t.map((function(e,a){return Object(d.jsx)("div",{children:Object(d.jsx)(f,{cart:t,setCart:c,siteSale:r,item:e,index:a,removeItem:m,setTotal:b,totalCart:p,getCartTotal:O,cartPriceArr:h})},e.name)})),Object(d.jsxs)("div",{className:"cart-total",children:["Your Total: RM ",p]}),Object(d.jsx)("div",{onClick:function(){l(!0)},className:"cart-checkout-button",children:"CHECKOUT ( GENERATE INVOICE )"}),!0===s&&Object(d.jsx)("div",{onClick:function(){return l(!1)},className:"invoice-modal",children:Object(d.jsxs)("div",{className:"invoice-content",children:[Object(d.jsx)("div",{children:"INVOICE"}),Object(d.jsx)("div",{className:"invoice-item-container",children:t.map((function(e){return Object(d.jsxs)("div",{className:"invoice-item",children:[Object(d.jsx)("li",{children:e.name}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("li",{children:["Qty: ",e.quantity]}),Object(d.jsxs)("li",{children:["RM ",e.new_price.toFixed(2)]})]})]})}))}),Object(d.jsxs)("div",{className:"invoice-total-price",children:[Object(d.jsx)("li",{children:"Your Total:"}),Object(d.jsxs)("li",{children:["RM ",p]})]})]})})]})},v=c(36),g=c(13),_=c(11),C=c(24),N=c.n(C),y=c(5),k=c.n(y);var S=function(e){var t=e.prod,c=e.prodTitle,r=(e.index,e.products),n=e.setProducts,i=Object(a.useState)(null),s=Object(o.a)(i,2),l=(s[0],s[1]),u=k.a.create({baseURL:"http://localhost:3001/api",timeout:1e3,headers:{"X-Customer-Header":"foobar"}}),j=k.a.create({baseURL:"https://kingsseafood18.com/api",timeout:1e3,headers:{"X-Customer-Header":"foobar"}});Object(a.useEffect)((function(){}),[]);var p=Object(a.useState)({product_id:t.product_id,category:t.category,name:t.name,d1:t.d1,d2:t.d2,d3:t.d3,d4:t.d4,price:t.price,bulk_qty:t.bulk_qty,bulk_price:t.bulk_price,featured:t.featured,status:t.status,picture:t.picture}),b=Object(o.a)(p,2),h=b[0],m=b[1],O=function(e){var t=e.target,c=t.name,a=t.value;m(Object(_.a)(Object(_.a)({},h),{},Object(g.a)({},c,a)))};function f(e){return Array.isArray(e)?e.join(", ").replaceAll(" ",""):e}var x=function(){var e=Object(v.a)(N.a.mark((function e(c){var a,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=window.location.href.search("localhost"),r={product_id:h.product_id,category:f(h.category),name:h.name,price:h.price,d1:h.d1,d2:h.d2,d3:h.d3,d4:h.d4,status:h.status,sale_price:h.sale_price,bulk_qty:h.bulk_qty,bulk_price:h.bulk_price,featured:h.featured,picture:f(h.picture),new_product:!0},console.log(r),a>=1?u.put("/products/".concat(t.product_id),r).then((function(e){l(e.data)})):j.put("/products/".concat(t.product_id),r).then((function(e){l(e.data)})),alert("".concat(h.name," has been updated!"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"dashboard-product-item",children:[Object(d.jsxs)("div",{className:"dashboard-product-titles",children:[c.map((function(e){return Object(d.jsx)("li",{children:e},e)})),Object(d.jsx)("li",{onClick:function(){!function(){if(window.confirm("Confirm removing product?")){for(var e=window.location.href,c=0;c<r.length;c++)r[c].product_id===t.product_id&&n(r.splice(0,c));e>=1?u.delete("/products/".concat(t.product_id),t.product_id).then((function(e){l(e.data)})):j.delete("/products/".concat(t.product_id),t.product_id).then((function(e){l(e.data)}))}}()},className:"dashboard-product-delete",children:"DELETE"})]}),Object(d.jsxs)("div",{className:"dashboard-product-input",children:[Object(d.jsx)("input",{id:"product_id",placeholder:t.product_id,onChange:O,value:h.product_id,name:"product_id"}),Object(d.jsx)("input",{id:"category",placeholder:t.category,onChange:O,value:h.category,name:"category"}),Object(d.jsx)("input",{id:"name",placeholder:t.name,onChange:O,value:h.name,name:"name"}),Object(d.jsx)("input",{id:"d1",placeholder:t.d1,onChange:O,value:h.d1,name:"d1"}),Object(d.jsx)("input",{id:"d2",placeholder:t.d2,onChange:O,value:h.d2,name:"d2"}),Object(d.jsx)("input",{id:"d3",placeholder:t.d3,onChange:O,value:h.d3,name:"d3"}),Object(d.jsx)("input",{id:"d4",placeholder:t.d4,onChange:O,value:h.d4,name:"d4"}),Object(d.jsx)("input",{id:"price",placeholder:t.price,onChange:O,value:h.price,name:"price"}),Object(d.jsx)("input",{id:"bulk_qty",placeholder:t.bulk_qty,onChange:O,value:h.bulk_qty,name:"bulk_qty"}),Object(d.jsx)("input",{id:"bulk_price",placeholder:t.bulk_price,onChange:O,value:h.bulk_price,name:"bulk_price"}),Object(d.jsx)("input",{id:"sale_price",placeholder:t.sale_price,onChange:O,value:h.sale_price,name:"sale_price"}),Object(d.jsx)("input",{id:"featured",placeholder:JSON.stringify(t.featured),onChange:O,value:h.featured,name:"featured"}),Object(d.jsx)("input",{id:"status",placeholder:JSON.stringify(t.status),onChange:O,value:h.status,name:"status"}),Object(d.jsx)("input",{id:"picture",placeholder:t.picture,onChange:O,value:h.picture,name:"picture"}),Object(d.jsx)("button",{onClick:function(){return x()},children:"UPDATE"})]})]})};var P=function(e){var t=e.products,c=e.setProducts,r=e.prodTitle,n=Object(a.useState)(null),i=Object(o.a)(n,2),s=(i[0],i[1]),l=Object(a.useState)({product_id:"",category:"",name:"",d1:"",d2:"",d3:"",d4:"",price:"",bulk_qty:"",bulk_price:"",featured:"",status:"",picture:""}),u=Object(o.a)(l,2),j=u[0],b=u[1],h=function(e){var t=e.target,c=t.name,a=t.value;b(Object(_.a)(Object(_.a)({},j),{},Object(g.a)({},c,a)))};return Object(d.jsx)("div",{className:"add-product-container",children:Object(d.jsxs)("div",{className:"dashboard-product-item",children:[Object(d.jsx)("div",{className:"dashboard-product-titles",children:r.map((function(e){return Object(d.jsx)("li",{children:e},e)}))}),Object(d.jsxs)("div",{className:"dashboard-product-input",children:[Object(d.jsx)("input",{id:"product_id",placeholder:"Product ID",onChange:h,value:j.product_id,name:"product_id"}),Object(d.jsx)("input",{id:"category",placeholder:"Category",onChange:h,value:j.category,name:"category"}),Object(d.jsx)("input",{id:"name",placeholder:"Product Name",onChange:h,value:j.name,name:"name"}),Object(d.jsx)("input",{id:"d1",placeholder:"Description 1",onChange:h,value:j.d1,name:"d1"}),Object(d.jsx)("input",{id:"d2",placeholder:"Description 2",onChange:h,value:j.d2,name:"d2"}),Object(d.jsx)("input",{id:"d3",placeholder:"Description 3",onChange:h,value:j.d3,name:"d3"}),Object(d.jsx)("input",{id:"d4",placeholder:"Description 4",onChange:h,value:j.d4,name:"d4"}),Object(d.jsx)("input",{id:"price",placeholder:"Price",onChange:h,value:j.price,name:"price"}),Object(d.jsx)("input",{id:"bulk_qty",placeholder:"Bulk Quantity",onChange:h,value:j.bulk_qty,name:"bulk_qty"}),Object(d.jsx)("input",{id:"bulk_price",placeholder:"Bulk Price",onChange:h,value:j.bulk_price,name:"bulk_price"}),Object(d.jsx)("input",{id:"sale_price",placeholder:"Sale Price",onChange:h,value:j.sale_price,name:"sale_price"}),Object(d.jsx)("input",{id:"featured",placeholder:"Featured (true / false)",onChange:h,value:j.featured,name:"featured"}),Object(d.jsx)("input",{id:"status",placeholder:"Status (true / false)",onChange:h,value:j.status,name:"status"}),Object(d.jsx)("input",{id:"picture",placeholder:"Picture (full picture name with extension)",onChange:h,value:j.picture,name:"picture"}),Object(d.jsx)("button",{onClick:function(){return function(){var e=window.location.href.replace("0/dashboard","1/api/products/"),a={product_id:j.product_id,category:j.category,name:j.name,price:j.price,d1:j.d1,d2:j.d2,d3:j.d3,d4:j.d4,status:j.status,sale_price:j.sale_price,bulk_qty:j.bulk_qty,bulk_price:j.bulk_price,featured:j.featured,picture:j.picture,new_product:!0};console.log(a),c([].concat(Object(p.a)(t),[a])),k.a.post(e,a).then((function(e){s(e.data)}))}()},children:"ADD PRODUCT"})]})]})})};var E=function(e){var t=e.promo,c=Object(a.useState)(null),r=Object(o.a)(c,2),n=(r[0],r[1]),i=Object(a.useState)(null),s=Object(o.a)(i,2),l=s[0],u=s[1],j=Object(a.useState)({promo_banner:t[0].promo_banner,promo_discount:t[0].promo_discount,promo_picture:t[0].promo_picture}),p=Object(o.a)(j,2),b=p[0],h=p[1],m=function(e){var t=e.target,c=t.name,a=t.value;h(Object(_.a)(Object(_.a)({},b),{},Object(g.a)({},c,a)))},O=k.a.create({baseURL:"http://localhost:3001/api",timeout:1e3,headers:{"X-Customer-Header":"foobar"}}),f=k.a.create({baseURL:"https://kingsseafood18.com/api",timeout:1e3,headers:{"X-Customer-Header":"foobar"}}),x=window.location.href.search("localhost");return Object(d.jsxs)("div",{className:"promo-page",children:[Object(d.jsxs)("div",{className:"dashboard-title",children:[Object(d.jsx)("li",{children:"IMAGE UPLOADER"}),Object(d.jsx)("input",{id:"image",type:"file",onChange:function(e){console.log(e.target.files[0]);var t=new FormData;t.append("my-image-file",e.target.files[0],e.target.files[0].name),u(t)}}),Object(d.jsx)("button",{onClick:function(){x>=1?(O.post("image-upload",l).then((function(e){console.log("Axios response: ",e)})),alert("Image uploaded successfully")):(f.post("image-upload",l).then((function(e){console.log("Axios response: ",e)})),alert("Image uploaded successfully"))},children:"UPLOAD IMAGE"})]}),Object(d.jsxs)("div",{className:"promo-container",children:[Object(d.jsx)("li",{children:"Promotion Banner Notification"}),Object(d.jsx)("input",{placeholder:"Promo Banner",id:"promo_banner",onChange:m,value:b.promo_banner,name:"promo_banner"}),Object(d.jsx)("li",{children:"Promotion Discount"}),Object(d.jsx)("input",{placeholder:"Promo Discount",id:"promo_discount",onChange:m,value:b.promo_discount,name:"promo_discount"}),Object(d.jsx)("li",{children:"Promotion Picture (full picture/file name)"}),Object(d.jsx)("input",{placeholder:"Promo Picture",id:"promo_picture",onChange:m,value:b.promo_picture,name:"promo_picture"}),Object(d.jsx)("button",{onClick:function(){x>=1?O.put("/details/1",b).then((function(e){n(e.data)})):f.put("/details/1",b).then((function(e){n(e.data)})),alert("Promotions updated")},children:"UPDATE PROMO"})]})]})};var w=function(e){var t=e.products,c=e.setProducts,r=e.promo,n=Object(a.useState)(!1),i=Object(o.a)(n,2),s=i[0],l=i[1],u=Object(a.useState)(["Products","Promotion"]),j=Object(o.a)(u,2),p=j[0],b=(j[1],Object(a.useState)("Products")),h=Object(o.a)(b,2),m=h[0],O=h[1],f=localStorage.getItem("ks-admin-dashboard"),x=Object(a.useState)(null),v=Object(o.a)(x,2),g=v[0],_=v[1],C=k.a.create({baseURL:"http://localhost:3001/api",timeout:1e3,headers:{"X-Customer-Header":"foobar"}}),N=k.a.create({baseURL:"https://kingsseafood18.com/api",timeout:1e3,headers:{"X-Customer-Header":"foobar"}}),y=window.location.href.search("localhost");Object(a.useEffect)((function(){null!==f&&"admin-logged-in"===f&&l(!0)}),[]);var w=["PROD ID","CATEGORY","NAME","DESC 1","DESC 2","DESC 3","DESC 4","PRICE","BULK QUANTITY","BULK PRICE","SALE PRICE","FEATURED (true or false)","STATUS (true or false)","PICTURE (name.jpg)"];return Object(d.jsx)("div",{className:"dashboard-page",children:s?Object(d.jsxs)("div",{className:"dashboard-logged-page",children:[Object(d.jsx)("div",{className:"dashboard-header",children:p.map((function(e){return Object(d.jsx)("div",{onClick:function(){O(e)},className:"dash-link",children:e},e)}))}),"Promotion"===m&&Object(d.jsx)(E,{promo:r}),"Products"===m&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"dashboard-title",children:"ADD NEW PRODUCT"}),Object(d.jsx)(P,{products:t,setProducts:c,prodTitle:w}),Object(d.jsxs)("div",{className:"dashboard-title",children:[Object(d.jsx)("li",{children:"IMAGE UPLOADER"}),Object(d.jsx)("input",{id:"image",type:"file",onChange:function(e){console.log("handleFileInput working!"),console.log(e.target.files[0]);var t=new FormData;t.append("my-image-file",e.target.files[0],e.target.files[0].name),_(t)}}),Object(d.jsx)("button",{onClick:function(){return y>=1?C.post("/image-upload",g).then((function(e){console.log("Axios response: ",e)})):N.post("/image-upload",g).then((function(e){console.log("Axios response: ",e)})),void alert("Image uploaded successfully")},children:"UPLOAD IMAGE"})]}),Object(d.jsx)("div",{className:"dashboard-title",children:"UPDATE, DELETE PRODUCTS"}),t.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})).map((function(e,a){return Object(d.jsx)("div",{children:Object(d.jsx)(S,{prod:e,prodTitle:w,index:a,products:t,setProducts:c})},e.product_id)}))]})]}):Object(d.jsx)("div",{className:"dashboard-notlogged-page",children:Object(d.jsxs)("div",{className:"dashboard-loggin-container",children:[Object(d.jsx)("div",{children:"Dashboard Log in"}),Object(d.jsx)("input",{id:"adminPW",placeholder:"Enter password"}),Object(d.jsx)("button",{onClick:function(){"admin123admin"===document.getElementById("adminPW").value?(l(!0),localStorage.setItem("ks-admin-dashboard","admin-logged-in")):alert("Incorrect Password")},children:"SUBMIT"})]})})})};var A=function(e){var t=e.fav,c=e.setFav,r=e.cart,n=e.setCart,i=Object(a.useState)(!1),s=Object(o.a)(i,2),l=s[0],u=s[1],j=Object(a.useState)(),b=Object(o.a)(j,2),h=b[0],m=b[1];return Object(d.jsxs)("div",{className:"favorites-page",children:[t.map((function(e,a){return Object(d.jsxs)("div",{className:"favorites-list",children:[Object(d.jsx)("img",{onClick:function(){m(e),u(!0)},alt:e.name,src:""+"/products/".concat(e.picture[0])}),Object(d.jsxs)("div",{className:"favorites-details",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("li",{children:e.name}),Object(d.jsxs)("li",{children:["Price: RM ",e.price]}),""!==e.d1&&Object(d.jsxs)("li",{children:["\xbb ",e.d1]}),""!==e.d2&&Object(d.jsxs)("li",{children:["\xbb ",e.d2]}),""!==e.d3&&Object(d.jsxs)("li",{children:["\xbb ",e.d3]}),""!==e.d4&&Object(d.jsxs)("li",{children:["\xbb ",e.d4]})]}),Object(d.jsxs)("div",{className:"favorites-button-container",children:[Object(d.jsx)("div",{onClick:function(){return function(e){var t=[];e.quantity=1,t=r.length>0?[].concat(Object(p.a)(r),[e]):[e],n(t)}(e)},className:"favorites-button",children:"ADD TO CART"}),Object(d.jsx)("div",{onClick:function(){return function(e){1===t.length?c([]):c(t.splice(0,e))}(a)},className:"favorites-button",children:"REMOVE FAVORITE"})]})]})]},e.product_id)})),!0===l&&Object(d.jsx)("div",{onClick:function(){return u(!1)},className:"picture-modal",children:Object(d.jsx)("img",{alt:h.name,src:""+"/products/".concat(h.picture[0])})})]})};var D=function(e){var t=e.fav,c=e.cart,r=e.promo,n=Object(a.useState)("HOME"),i=Object(o.a)(n,2),l=i[0],u=i[1],j=Object(a.useState)(!1),p=Object(o.a)(j,2),b=p[0],h=p[1],m=Object(a.useState)(),O=Object(o.a)(m,2);return O[0],O[1],Object(a.useEffect)((function(){}),[]),Object(d.jsxs)("div",{className:"header-container",children:[Object(d.jsx)("div",{children:"KINGS SEAFOOD 18"}),Object(d.jsxs)("div",{className:"header-icons",children:[Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{style:{textDecoration:"none"},onClick:function(){return u("HOME")},className:"header-button ".concat("HOME"===l&&"active"),to:"/",children:"HOME"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{style:{textDecoration:"none"},className:"header-button",to:"/products",children:"PRODUCTS"})}),Object(d.jsx)("li",{children:Object(d.jsxs)(s.b,{style:{textDecoration:"none"},className:"header-button",to:"/cart",children:["CART ( ",c.length," )"]})}),Object(d.jsx)("li",{children:Object(d.jsxs)(s.b,{style:{textDecoration:"none"},className:"header-button",to:"/favorites",children:["FAVORITES ( ",t.length," )"]})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{style:{textDecoration:"none"},className:"header-button header-lock",to:"/dashboard",children:"\ud83d\udd12"})})]}),!0===b&&Object(d.jsx)("div",{onClick:function(){return h(!1)},className:"promo-modal",children:Object(d.jsx)("div",{className:"promo-img-container",children:Object(d.jsx)("img",{alt:"banner",className:"promo-img",src:""+"/products/".concat(r[0].promo_picture)})})}),Object(d.jsx)("div",{onClick:function(){return h(!0)},className:"promo-icon",children:"\ud83c\udf81"})]})};var T=function(){return Object(d.jsxs)("div",{className:"footer-container",children:[Object(d.jsxs)("div",{className:"footer-left",children:[Object(d.jsx)("div",{className:"footer-title",children:"Address"}),Object(d.jsx)("div",{className:"footer-details",children:"205, Jalan Perak, 11600 Jelutong, Penang, Malaysia"}),Object(d.jsx)("div",{className:"footer-title",children:"Operating Hours"}),Object(d.jsx)("div",{className:"footer-details",children:"10:00AM - 5:30PM (Closed on Sundays & Public Holidays)"}),Object(d.jsx)("div",{className:"footer-title",children:"Contact Us"}),Object(d.jsx)("div",{className:"footer-details",children:"Joey 011-11264018"}),Object(d.jsx)("div",{className:"footer-details",children:"Kelvin 016-4849744"}),Object(d.jsx)("div",{className:"footer-title",children:"Follow Us"}),Object(d.jsx)("div",{className:"footer-details"})]}),Object(d.jsx)("div",{className:"footer-right",children:Object(d.jsx)("iframe",{title:"map",className:"king-map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.041964443941!2d100.31403875172646!3d5.410579936576945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac3b801b3cb3f%3A0x461457f2a8d2bd!2s205%2C%20Jln%20Perak%2C%20Jelutong%2C%2011600%20George%20Town%2C%20Pulau%20Pinang%2C%20Malaysia!5e0!3m2!1sen!2sca!4v1622922167047!5m2!1sen!2sca",width:"auto",height:"auto","aria-hidden":"false"})})]})};var I=function(e){var t=e.promoBanner;return Object(d.jsx)("div",{className:"top-promo",children:t})};c(70);var q=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)([]),i=Object(o.a)(n,2),j=i[0],p=i[1],b=Object(a.useState)([]),h=Object(o.a)(b,2),f=h[0],v=h[1],g=Object(a.useState)([]),_=Object(o.a)(g,2),C=_[0],N=_[1],y=Object(a.useState)(),S=Object(o.a)(y,2),P=S[0],E=S[1],q=Object(a.useState)(),R=Object(o.a)(q,2),F=R[0],U=R[1],M=localStorage.getItem("user_cart"),L=localStorage.getItem("user_fav"),J=window.location.href.search("localhost"),H=k.a.create({baseURL:"http://localhost:3001/api",timeout:1e3,headers:{"X-Customer-Header":"foobar"}}),B=k.a.create({baseURL:"http://kingsseafood18.com/api",timeout:1e3,headers:{"X-Customer-Header":"foobar"}}),G={"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, PUT, POST, DELETE, OPTIONS","Access-Control-Allow-Headers":"*"};function X(e){for(var t=e,c=0;c<e.length;c++)t[c].picture=JSON.stringify(t[c].picture).trim().replaceAll('"',"").split(","),t[c].category=JSON.stringify(t[c].category).trim().replaceAll('"',"").replaceAll("/","").split(",");return t}Object(a.useEffect)((function(){J>=1?(H.get("/products",{mode:"cors",headers:G}).then((function(e){r(X(e.data)),console.log(e.data)})).catch((function(e){console.log(e.response)})),H.get("/details",{mode:"cors",headers:G}).then((function(e){N(e.data),E(e.data[0].promo_discount),U(e.data[0].promo_banner),console.log(e.data)})).catch((function(e){console.log(e.response)}))):(B.get("/products",{mode:"cors",headers:G}).then((function(e){r(X(e.data)),console.log(e.data)})).catch((function(e){console.log(e.response)})),B.get("/details",{mode:"cors",headers:G}).then((function(e){N(e.data),E(e.data[0].promo_discount),U(e.data[0].promo_banner),console.log(e.data)})).catch((function(e){console.log(e.response)}))),null===M?(console.log("cart does not exist, creating new local cart"),localStorage.setItem("user_cart",JSON.stringify(j))):p(JSON.parse(M)),null===L?(console.log("favorites list does not exist, creating new local favorites"),localStorage.setItem("user_fav",JSON.stringify(f))):v(JSON.parse(L))}),[]);var V=["All","Fish","Scallops","Shellfish","Squid","Meat","Special","Vegetables","Fruits","Hotpot","Snacks","Sauces","Beverages","Noodles/Soup","Sale","Newest Products"];return 0!==j.length&&localStorage.setItem("user_cart",JSON.stringify(j)),0!==f.length&&localStorage.setItem("user_fav",JSON.stringify(f)),Object(d.jsxs)(s.a,{children:[Object(d.jsx)(I,{promoBanner:F}),Object(d.jsx)(D,{cart:j,fav:f,promo:C}),Object(d.jsx)("div",{className:"page-content",children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(d.jsx)(O,{promo:C})}}),Object(d.jsx)(l.a,{exact:!0,path:"/products",render:function(){return Object(d.jsx)(m,{categories:V,products:c,fav:f,setFav:v,cart:j,setCart:p})}}),Object(d.jsx)(l.a,{exact:!0,path:"/cart",render:function(){return Object(d.jsx)(x,{cart:j,setCart:p,sale:P})}}),Object(d.jsx)(l.a,{exact:!0,path:"/favorites",render:function(){return Object(d.jsx)(A,{fav:f,setFav:v,cart:j,setCart:p})}}),Object(d.jsx)(l.a,{exact:!0,path:"/dashboard",render:function(){return Object(d.jsx)(w,{products:c,setProducts:r,promo:C})}}),Object(d.jsx)(l.a,{component:u})]})}),Object(d.jsx)(T,{})]})},R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),r(e),n(e),i(e)}))};c.p,c.p,c.p,c.p,c.p;i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(q,{})}),document.getElementById("root")),R()}},[[71,1,2]]]);
//# sourceMappingURL=main.e75ff693.chunk.js.map