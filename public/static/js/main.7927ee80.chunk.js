(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,a,r){e.exports=r.p+"static/media/bork2.eee0a500.png"},28:function(e,a,r){e.exports=r.p+"static/media/doggo.1cc251c2.png"},29:function(e,a,r){e.exports=r.p+"static/media/curve.d5059e72.svg"},44:function(e,a,r){e.exports=r.p+"static/media/blob.6f177e3b.svg"},45:function(e,a,r){e.exports=r.p+"static/media/doghouse.a245741d.png"},54:function(e,a,r){e.exports=r(76)},66:function(e,a,r){},76:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),o=r(43),l=r.n(o),i=r(15),s=r(6),c=r(19),d=r.n(c),u=r(23),m=r(30),k=r(14),g=r(16),P=r(17),h=r.n(P),p=r(77),b=r(27),f=r.n(b),v=function(e){var a=e.numDogs,r=e.dogPark,t=parseInt(a);return n.a.createElement("div",{className:"bg-dark main-header"},n.a.createElement("div",{className:"container px-4 py-6 mx-auto text-white relative"},n.a.createElement("p",{className:"leading-none"},"There ",n.a.createElement("span",null,1===t?"is ":"are ")," ","currently"),n.a.createElement("p",{className:"font-black uppercase text-5xl leading-none"},"1",t," dog",1===t?"":"s"),n.a.createElement("p",{className:"text-right leading-none "},"at ",r),n.a.createElement("img",{src:f.a,alt:"BORK sound",className:"bork"})))},y=r(44),E=r.n(y),S=r(45),N=r.n(S);function x(){var e=Object(g.a)(["\n\tmutation createDogMutation($id: String!) {\n\t\tremoveDog(id: $id)\n\t}\n"]);return x=function(){return e},e}var B=h()(x()),R=function(e){var a=e.id,r=e.name,o=e.breed,l=e.dogPark,i=Object(t.useState)(!1),s=Object(k.a)(i,2),c=s[0],m=s[1],g=j(l),P=Object(p.a)(B,{update:function(e,a){var r=a.data.removeDog,t=e.readQuery({query:g}).dogs;e.writeQuery({query:g,data:{dogs:t.filter((function(e){return e.id!==r}))}})}}),h=Object(k.a)(P,1)[0],b=function(){return m(!1)},f=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h({variables:{id:a}});case 2:b();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"flex justify-between items-center py-2"},n.a.createElement("div",null,n.a.createElement("h3",{className:"leading-none font-extrabold text-xl text-dark"},r),n.a.createElement("h5",{className:"text-gray-700 -mt-1"},"the ",n.a.createElement("span",{className:"capitalize"},o))),n.a.createElement("button",{className:"relative",onClick:function(){return m(!0)}},n.a.createElement("img",{src:E.a,alt:"blob button",className:"blob-btn relative"}),n.a.createElement("h5",{className:"uppercase font-black text-dark text-xs blob-btn-text"},"Leave?"))),c&&n.a.createElement("div",{className:"overlay z-20 flex items-center justify-center"},n.a.createElement("div",{className:"modal z-30 relative bg-white rounded-md"},n.a.createElement("div",{className:"bg-primary px-2 py-2 text-dark font-extrabold uppercase text-sm rounded-tops"},"Just to confirm..."),n.a.createElement("div",{className:"px-2 flex justify-between items-center"},n.a.createElement("p",null,"Is ",r," leaving the dog park?"),n.a.createElement("img",{src:N.a,alt:"Cartoon dog in doghouse",className:"w-1/3"})),n.a.createElement("div",{className:"flex justify-between px-2 pb-4 mt-2"},n.a.createElement("button",{className:"block h-10 items-center justify-center rounded-md primary-btn w-48p",onClick:b},n.a.createElement("h2",{className:"uppercase text-dark font-black"},"No")),n.a.createElement("button",{className:"bg-primary block h-10 items-center justify-center rounded-md primary-btn w-48p",onClick:f},n.a.createElement("h2",{className:"uppercase text-dark font-black"},"Yes"))))))},C=r(28),w=r.n(C),D=r(29),T=r.n(D),W=function(e){var a=e.dogs,r=e.dogPark;return n.a.createElement("div",{className:"relative"},n.a.createElement("img",{src:T.a,alt:"smooth curve",className:"absolute lg:hidden"}),n.a.createElement("div",{className:"container px-4 mx-auto py-6 relative"},n.a.createElement("h2",{className:"fancy-underline inline-block z-10 relative text-lg mb-6 mt-2"},"Meet the dogs:"),n.a.createElement("img",{src:w.a,alt:"Dog Cartoon",className:"doggo"}),a.map((function(e){return n.a.createElement(R,{id:e.id,name:e.name,breed:e.breed,key:e.id,dogPark:r})}))))};function M(){var e=Object(g.a)(["\n\tsubscription {\n\t\tdogRemoved {\n\t\t\tid\n\t\t}\n\t}\n"]);return M=function(){return e},e}function H(){var e=Object(g.a)(["\n\tsubscription {\n\t\tdogAdded {\n\t\t\tid\n\t\t\tname\n\t\t\tbreed\n\t\t}\n\t}\n"]);return H=function(){return e},e}function G(){var e=Object(g.a)(['\n\t\t{\n\t\t\tdogs(dogPark: "','"){\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tbreed\n\t\t\t}\n\t\t}\n\t']);return G=function(){return e},e}var j=function(e){return h()(G(),e)},O=h()(H()),A=h()(M()),K=function(){var e=Object(s.g)().dogPark,a=decodeURIComponent(e),r=j(a),t=Object(p.b)(r),o=t.loading,l=t.error,c=t.data,d=t.subscribeToMore;if(!c&&o)return"Loading";if(l)return console.log("error",l),"Error";!function(e){e({document:O,updateQuery:function(e,a){var r=a.subscriptionData;if(!r.data)return e;var t=r.data.dogAdded;return e.dogs.find((function(e){return e.id===t.id}))?e:{dogs:[].concat(Object(m.a)(e.dogs),[t])}}})}(d),function(e){e({document:A,updateQuery:function(e,a){var r=a.subscriptionData;if(!r.data)return e;var t=r.data.dogRemoved.id;return e.dogs.find((function(e){return e.id===t}))?{dogs:e.dogs.filter((function(e){return e.id!==t}))}:e}})}(d);var u=c.dogs,k=c.dogs.length;return n.a.createElement("div",{className:"bg-neutralgray h-screen"},n.a.createElement(v,{numDogs:k,dogPark:a}),!!k&&n.a.createElement(W,{dogs:u,dogPark:a}),n.a.createElement("div",{className:"container px-4 mx-auto pb-4 mt-4 bg-neutralgray"},n.a.createElement(i.b,{to:"/add-dog/".concat(e,"/").concat(k),className:"bg-primary flex h-12 items-center justify-center rounded-md primary-btn"},n.a.createElement("h2",{className:"uppercase text-dark font-black"},"Doggo Check In")),n.a.createElement(i.b,{to:"/"},n.a.createElement("p",{className:"underline mt-2"},"Or choose another dog park"))))},F=["Affenpinscher","Airedale","Akita","Appenzeller","Australian Shepherd","Basenji","Beagle","Bluetick","Borzoi","Bouvier","Boxer","Brabancon","Briard","Norwegian Buhund","Boston Bulldog","English Bulldog","French Bulldog","Staffordshire Bullterrier","Cairn","Australian Cattledog","Chihuahua","Chow","Clumber","Cockapoo","Border Collie","Coonhound","Corgi","Cotondetulear","Dachshund","Dalmatian","Great Dane","Scottish Deerhound","Dog","Dhole","Dingo","Doberman","Norwegian Elkhound","Entlebucher","Eskimo","Finnish Lapphund","Bichon Frise","German Shepherd","Greyhound","Italian Greyhound","Groenendael","Havanese","Afghan Hound","Basset Hound","Blood Hound","English Hound","Ibizan Hound","Plott Hound","Walker Hound","Husky","Keeshond","Kelpie","Komondor","Kuvasz","Labrador","Leonberg","Lhasa","Malamute","Malinois","Maltese","Bull Mastiff","English Mastiff","Tibetan Mastiff","Mexican Hairless","Mixed Breed","Bernese Mountain Dog","Swiss Mountain Dog","Newfoundland","Otterhound","Caucasian Ovcharka","Papillon","Pekinese","Pembroke","Miniature Pinscher","Pitbull","German Short Hair Pointer","German Long Hair Pointer","Pomeranian","Poodle","Pug","Puggle","Pyrenees","Redbone","Chesapeake Retriever","Curly Retriever","Flatcoated Retriever","Golden Retriever","Rhodesian Ridgeback","Rottweiler","Saluki","Samoyed","Schipperke","Schnauzer","English Setter","Gordon Setter","Irish Setter","English Sheepdog","Shetland Sheepdog","Shiba","Shihtzu","Blenheim Spaniel","Brittany Spaniel","Cocker Spaniel","Irish Spaniel","Japanese Spaniel","Sussex Spaniel","Welsh Spaniel","Springer Spaniel","Stbernard","American Terrier","Australian Terrier","Bedlington Terrier","Border Terrier","Dandie Terrier","Fox Terrier","Irish Terrier","Kerryblue Terrier","Lakeland Terrier","Norfolk Terrier","Norwich Terrier","Patterdale Terrier","Russell Terrier","Scottish Terrier","Sealyham Terrier","Silky Terrier","Tibetan Terrier","Toy Terrier","Westhighland Terrier","Wheaten Terrier","Yorkshire Terrier","Vizsla","Spanish Waterdog","Weimaraner","Whippet","Irish Wolfhound"];function z(){var e=Object(g.a)(["\n\tmutation createDogMutation(\n\t\t$name: String!\n\t\t$breed: String!\n\t\t$dogPark: String!\n\t) {\n\t\tcreateDog(name: $name, breed: $breed, dogPark: $dogPark) {\n\t\t\tid\n\t\t\tname\n\t\t\tbreed\n\t\t\tdogPark\n\t\t}\n\t}\n"]);return z=function(){return e},e}var I=h()(z()),L=function(){var e=Object(s.g)(),a=e.numDogs,r=e.dogPark,o=decodeURIComponent(r),l=j(o),i=Object(t.useState)(""),c=Object(k.a)(i,2),g=c[0],P=c[1],h=Object(t.useState)(""),b=Object(k.a)(h,2),f=b[0],y=b[1],E=Object(p.a)(I,{update:function(e,a){var r=a.data.createDog,t=e.readQuery({query:l}).dogs;e.writeQuery({query:l,data:{dogs:[].concat(Object(m.a)(t),[r])}})}}),S=Object(k.a)(E,1)[0],N=Object(s.f)(),x=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S({variables:{name:g||"dog",breed:f||"dog",dogPark:o}}).then((function(){N.push("/".concat(r))})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"bg-neutralgray h-screen"},n.a.createElement(v,{numDogs:a,dogPark:o}),n.a.createElement("div",{className:"relative"},n.a.createElement("img",{src:T.a,alt:"smooth curve",className:"absolute lg:hidden"}),n.a.createElement("div",{className:"container px-4 mx-auto py-6 relative"},n.a.createElement("h2",{className:"fancy-underline inline-block z-10 relative text-lg mb-6 mt-2"},"Doggo Check-in:"),n.a.createElement("img",{src:w.a,alt:"Dog Cartoon",className:"doggo"}),n.a.createElement("div",{className:"mb-4"},n.a.createElement("label",{className:"uppercase text-dark text-xs font-extrabold",htmlFor:"dogName"},"Dog name:"),n.a.createElement("input",{type:"text",id:"dogName",onChange:function(e){return P(e.target.value)},placeholder:"E.g. Weasley",className:"h-12 rounded-md px-4 w-full border-dark bg-white"})),n.a.createElement("div",{className:"mb-6"},n.a.createElement("label",{className:"uppercase text-dark text-xs font-extrabold",htmlFor:"dogName"},"Dog breed:"),n.a.createElement("select",{onChange:function(e){return y(e.target.value)},defaultValue:"dog",className:"block w-full h-12 border-dark rounded-md px-4 custom-select"},n.a.createElement("option",{disabled:!0,value:"dog"},"Select a breed"),F.sort().map((function(e){return n.a.createElement("option",{value:e,className:"capitalize",key:e},e)})))),n.a.createElement("button",{className:"bg-primary block h-12 items-center justify-center rounded-md primary-btn w-full",onClick:x},n.a.createElement("h2",{className:"uppercase text-dark font-black"},"Add Dog")),n.a.createElement("button",{className:"underline mt-2",onClick:function(){return N.goBack()}},"Go Back"))))},J=["Chermside - 7th Brigade Park","Upper Mount Gravatt - Abbeville Street Park","Nundah - Albert Bishop Park","Gordon Park - Amelia Park","Toowong - Anzac Park","Ferny Grove - Arbor Street Park","Gordon Park - Archer Street Park","Ascot - Ascot Park","Darra - Ashridge Road Park","Kelvin Grove - Bancroft Park","Westlake - Barcoorah Street Park","Bracken Ridge - Barrett Street Reserve","Bald Hills - Barungwarra Bushland Reserve","Wishart - Berkshire Crescent Park","Coopers Plains - Beryl Roberts Park","Fitzgibbon - Bill Brown Sports Reserve","Lota - Bill Lamond Park","Brookfield - Blackbutt Place Park","Zillmere - Blue Gum Park","Bellbowrie - Booker Place Park","Boondall - Boondall Park","Wishart - Boorabbin Picnic Ground","Nundah - Boyd Park","Kedron - Bradbury Park","Bulimba - Bulimba Riverside Park","Chermside - Burnie Brae Park","Windsor - Byrnes Paddock Park","Richlands - C.J. Greenfield Complex Park","Calamvale - Calamvale District Park","Bald Hills - Canterbury Park","Carindale - Carindale Recreation Reserve","Morningside - Colmslie Reserve","The Gap - Corramulling Park","Albion - Crosby Park","Chapel Hill - Cubberla Creek Reserve","Sandgate - Curlew Park","Macgregor - D.M. Henderson Park","Keperra - Dash Street Park","Brighton - Decker Park","Seventeen Mile Rocks - Delapine Place Park","Calamvale - Doulton Street Park","Geebung - Downfall Creek Reserve","Darra - Ducie Street Park","Durack - Durella Street Park","Dutton Park - Dutton Park","Seventeen Mile Rocks - Edenbrooke Park","Greenslopes - Ekibin Park East","Wynnum - Elanora Park","Algester - Endiandra Street Park","Oxley - Englefield Road Park","Wynnum West - Evelyn Road Park","Murarrie - Evergreen Place Park","Fairfield - Fairfield Park","Graceville - Faulkner Park","Rocklea - Fauna Parade Park","Stafford Heights - Flockton Street Park","Forest Lake - Forest Lake Sports Fields","Rocklea - Freney Street Park","Corinda - George Scarlett Park","Red Hill - Gilbert Park","Runcorn - Glenefer Street Park","Grange - Grange Forest Park","Chapel Hill - Green Hill Reservoir Park","Parkinson - Greenways Esplanade Park","Stafford Heights - Grey Gum Park","Bald Hills - Gus Davies Park","Kedron - Gympie Road Park","Hamilton - Hercules Street Park","Stafford - Hickey Park","Eight Mile Plains - Holmead Park","Yeronga - Hyde Road Park","Sunnybank Hills - Jack Pyle Park","Bridgeman Downs - Jim Wilding Reserve ","Jindalee - Jindalee Boat Ramp Park","Ellen Grove - Julie Road Park","Kalinga - Kalinga Park","Chermside West - Kenna Street Park","Morningside - Keralgerie Park","Keperra Keryn - Place Park","Inala - Kev Hooper Memorial Park","Tingalpa - Kianawah Park","Gordon Park - Kokoda Park","Karana Downs - Kookaburra Park","Carseldine - Lacey Road Park","Fig Tree Pocket - Mactier Street Park","Aspley - Marchant Park","Acacia Ridge - Marnham Street Park","Chermside West - Martindale Street Park","Chapel Hill - Merri Merri Park","Milton - Milton Park","Acacia Ridge - Mortimer Road Park","Wakerley - Moss Road","Chuwar - Mt Crosby Sportsground","Boondall - Mulbeam Park","Runcorn - Nathan Road Park","Paddington - Neal Macrossan Playground Park","Carindale - Newbury Place Park","Windsor - Northey Street Park","Northgate - Northgate Reserve","Boondall - Northumbria Road Park","Nudgee - Nudgee Waterhole Reserve","Hamilton - Old Shoreline Park","West End - Orleigh Park","Willawong - Pallara Park","Rochedale - Pask Family Park","Carseldine - Pat Rafter Park","The Gap - Paten Park","Hemmant - Paul Conti Park","Toowong - Perrin Park Toowong","Camp Hill - Perth Street Park","Jamboree Heights - Phil Denman Park","Wakerley - Phillips Place Park","Bellbowrie - Pioneer Crescent Park","New Farm - Powerhouse Park","Carina - Preston Road Park","Balmoral - Quinns Street Park","Kangaroo Point - Raymond Park","East Brisbane - Real Park","Inala - Richlands Depot Park","Tingalpa - Robinson Park","Mansfield - Ron Woolley Place","Stafford - Roy Harvey Park","Salisbury - Salisbury Recreation Reserve","Alderley - Sedgley Park","Tarragindi - Shaftesbury Street Park","Stafford - Shand Street Park","Wavell - Heights Shaw Estate Park","Wakerley - Sheriff Park","Indooroopilly - Sir John Chandler Park","South Brisbane - Riverside Lands Park","Manly West - Stannard Road Park","Bardon - Sunset Park","Everton Park - Teralba Park","Gordon Park - Thistle Street Park","Sinnamon Park - Thomas Macleod Park","Riverhills - Tigris Street Park","Nudgee - Tuckeroo Park","Wavell Heights - Turquoise Place Park","Kenmore - Twilight Street Park","Upper Kedron - Recreation Reserve","Norman Park - Vectis Street Park","Herston - Victoria Park","Gordon Park - Wally Bourke Park","Runcorn - Wally Tate Park","Newstead - Waterfront Park","Stafford Heights - Webster Road Park","Coorparoo - Wembley Park","Camp Hill - Whites Hill Reserve","The Gap - Wittonga Park","Riverhills - Wolston Creek Bushland Reserve","Forest Lake - Woogaroo Reserve","East Brisbane - Woolloongabba Rotary Park","Yeronga - Yeronga Memorial Park","Sunnybank - Yimbun Park"],$=function(){var e=Object(s.f)(),a=Object(t.useState)(),r=Object(k.a)(a,2),o=r[0],l=r[1];return n.a.createElement("div",null,n.a.createElement("div",{className:"bg-dark choose-dog-park"},n.a.createElement("div",{className:"container px-4 py-8 mx-auto text-white relative"},n.a.createElement("p",{className:"leading-none font-extrabold text-lg lg:text-4xl"},"Who's at the dog park?"),n.a.createElement("p",{className:"opacity-50 leading-tight lg:text-xl"},"A tool for Brisbane dog lovers"),n.a.createElement("img",{src:f.a,alt:"BORK sound",className:"bork"}))),n.a.createElement("div",{className:"container px-4 mx-auto"},n.a.createElement("h2",{className:"fancy-underline inline-block z-10 relative mb-6 mt-6"},"Select your dog park:"),n.a.createElement("select",{name:"dogParks",id:"dogPark",value:o,className:"block w-full h-12 border-dark rounded-md px-4 custom-select",onChange:function(a){l(a.target.value);var r=encodeURIComponent(a.target.value);e.push("/".concat(r))},defaultValue:""},n.a.createElement("option",{value:"",disabled:!0},"Please Select a Dog Park"),J.sort().map((function(e){return n.a.createElement("option",{value:e,key:e},e)}))),n.a.createElement("h2",{className:"fancy-underline inline-block z-10 relative mb-6 mt-6"},"Use this app to:"),n.a.createElement("ul",{className:"list-disc list-inside text-sm"},n.a.createElement("li",null,"Check your dog in;"),n.a.createElement("li",null,"View dogs at the dog park;"),n.a.createElement("li",null,"See how busy a dog park is."))))},q=function(){return n.a.createElement(i.a,null,n.a.createElement(s.c,null,n.a.createElement(s.a,{path:"/add-dog/:dogPark/:numDogs"},n.a.createElement(L,null)),n.a.createElement(s.a,{path:"/:dogPark"},n.a.createElement(K,null)),n.a.createElement(s.a,{path:"/"},n.a.createElement($,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=r(9),U=r(18),V=r(51),Y=r(52),Z=r(10),X=r(53),_=r(2),ee=(r(66),Object(V.a)({uri:"https://dogpark-app.herokuapp.com/graphql"})),ae=new X.a({uri:"wss://dogpark-app.herokuapp.com/graphql",options:{reconnect:!0}}),re=Object(Z.d)((function(e){var a=e.query,r=Object(_.l)(a),t=r.kind,n=r.operation;return"OperationDefinition"===t&&"subscription"===n}),ae,ee),te=new U.a({link:re,cache:new Y.a});l.a.render(n.a.createElement(Q.a,{client:te},n.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.7927ee80.chunk.js.map