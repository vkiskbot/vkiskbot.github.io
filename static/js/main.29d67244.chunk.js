(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(t,e,a){},139:function(t,e,a){t.exports=a.p+"static/media/persik.4e1ec840.png"},140:function(t,e,a){},141:function(t,e,a){"use strict";a.r(e);a(72),a(97);var s=a(0),r=a.n(s),n=a(33),o=a.n(n),i=a(17),l=a.n(i),c=a(35),h=a(62),u=a(63),v=a(69),d=a(64),m=a(70),p=a(6),_=a(1),S=(a(119),a(120),a(121),a(65)),b=a.n(S),y=(a(122),a(123),a(34),a(23),a(124),a(66)),E=a.n(y),f=(a(125),a(67)),g=a.n(f),w=(a(126),a(127),a(68)),k=a.n(w),P=(a(59),a(138),a(139),a(140),Object(_.platform)(),function(t){function e(t){var a;return Object(h.a)(this,e),(a=Object(v.a)(this,Object(d.a)(e).call(this,t))).checkInternet=function(){var t=a.state.status;t=window.navigator.onLine?"online":"offline",a.setState({status:t}),"offline"===t?a.setState({activePanel:"off",activeStory:"off"}):"online"===t&&"off"===a.state.activePanel&&a.setState({activePanel:"main",activeStory:"main"})},a.go=function(t){a.setState({activePanel:t.currentTarget.dataset.to}),a.setState({activePanel:t.currentTarget.dataset.to,activeStory:t.currentTarget.dataset.to}),window.history.pushState({panel:t.currentTarget.dataset.to},"".concat(t.currentTarget.dataset.to))},a.state={activePanel:"main",vkid:"",top_list:"",question:"",answers:"",cur_answer:"",cur_header:"",score:0,firststart:"Y",color_var1:"",color_var2:"",color_var3:"",color_var4:"",var1:"",var2:"",var3:"",var4:"",updatetop:"N",hash_var1:"",hash_var2:"",hash_var3:"",hash_var4:"",main_hash:"",fetchedUser:null,activeStory:"main",img_pic:"",time:{},seconds:0},a.timer=0,a.startTimer=a.startTimer.bind(Object(p.a)(Object(p.a)(a))),a.countDown=a.countDown.bind(Object(p.a)(Object(p.a)(a))),a.onStoryChange=a.onStoryChange.bind(Object(p.a)(Object(p.a)(a))),a.checkvar=a.checkvar.bind(Object(p.a)(Object(p.a)(a))),a.closePopout=a.closePopout.bind(Object(p.a)(Object(p.a)(a))),a.closePopoutNewQ=a.closePopoutNewQ.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"closePopout",value:function(){this.setState({popout:null})}},{key:"closePopoutNewQ",value:function(){this.setState({popout:null}),this.checkvar("timeout")}},{key:"gettop",value:function(t){if("Y"==t){var e=this;e.setState({activeStory:"spinner"});var a={action:"get_top",vkid:this.state.vkid},s=new FormData;s.append("json",JSON.stringify(a)),fetch("https://zakupi.club/telegram_bot/bot_iskustvoved/ajax_isk.php",{method:"POST",body:s}).then(function(t){200===t.status&&t.json().then(function(t){"Y"==t.success?(e.setState({top_list:t.top.vk}),e.setState({activeStory:"top"})):(e.setState({activeStory:"top"}),e.setState({popout:r.a.createElement(_.Alert,{actions:[{title:"OK",autoclose:!0}],onClose:e.closePopout},r.a.createElement("h2",null,"\u041e\u0448\u0438\u0431\u043a\u0430!"),r.a.createElement("h2",null,t.errors))}))})}),e.setState({updatetop:"N"})}}},{key:"checkvar",value:function(t,e){var a=this;if("start"!==t){var s={action:"check_answer",vkid:this.state.vkid,main_hash:this.state.main_hash,answer_hash:t},n=new FormData;n.append("json",JSON.stringify(s)),fetch("https://zakupi.club/telegram_bot/bot_iskustvoved/ajax_isk.php",{method:"POST",body:n}).then(function(e){200===e.status&&e.json().then(function(e){"Y"==e.success?("timeout"===t?a.setState({cur_header:"\u0412\u0440\u0435\u043c\u044f \u0432\u044b\u0448\u043b\u043e. \u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442:"}):a.setState({cur_header:e.answ_header}),a.setState({cur_answer:e.answer_full}),e.score&&a.setState({score:e.score}),"Y"==e.answer_good?(t===a.state.hash_var1&&(a.setState({color_var1:"green"}),a.setState({hash_var1:"disabled"})),t===a.state.hash_var2&&(a.setState({color_var2:"green"}),a.setState({hash_var2:"disabled"})),t===a.state.hash_var3&&(a.setState({color_var3:"green"}),a.setState({hash_var3:"disabled"})),t===a.state.hash_var4&&(a.setState({color_var4:"green"}),a.setState({hash_var4:"disabled"}))):(t===a.state.hash_var1&&(a.setState({color_var1:"red"}),a.setState({hash_var1:"disabled"})),t===a.state.hash_var2&&(a.setState({color_var2:"red"}),a.setState({hash_var2:"disabled"})),t===a.state.hash_var3&&(a.setState({color_var3:"red"}),a.setState({hash_var3:"disabled"})),t===a.state.hash_var4&&(a.setState({color_var4:"red"}),a.setState({hash_var4:"disabled"}))),a.state.hash_var1!==t&&"disabled"!==a.state.hash_var1&&a.setState({hash_var1:""}),a.state.hash_var2!==t&&"disabled"!==a.state.hash_var2&&a.setState({hash_var2:""}),a.state.hash_var3!==t&&"disabled"!==a.state.hash_var3&&a.setState({hash_var3:""}),a.state.hash_var4!==t&&"disabled"!==a.state.hash_var4&&a.setState({hash_var4:""})):a.setState({popout:r.a.createElement(_.Alert,{actions:[{title:"OK",autoclose:!0}],onClose:a.closePopoutNewQ},r.a.createElement("h2",null,"\u041e\u0448\u0438\u0431\u043a\u0430!"),r.a.createElement("h2",null,e.errors))})})})}}},{key:"get_question",value:function(t){var e=this;e.setState({activeStory:"spinner"}),e.setState({firststart:"N"}),e.setState({cur_answer:""}),e.setState({cur_header:""}),e.setState({color_var1:""}),e.setState({color_var2:""}),e.setState({color_var3:""}),e.setState({color_var4:""});var a={action:"get_question",vkid:this.state.vkid,sess:t},s=new FormData;s.append("json",JSON.stringify(a)),fetch("https://zakupi.club/telegram_bot/bot_iskustvoved/ajax_isk.php",{method:"POST",body:s}).then(function(t){200===t.status&&t.json().then(function(t){if("Y"==t.success){e.setState({img_pic:t.url}),e.setState({var1:t.answers[0].var1}),e.setState({var2:t.answers[1].var2}),e.setState({var3:t.answers[2].var3}),e.setState({var4:t.answers[3].var4}),e.setState({hash_var1:t.answers[0].hash_var1}),e.setState({hash_var2:t.answers[1].hash_var2}),e.setState({hash_var3:t.answers[2].hash_var3}),e.setState({hash_var4:t.answers[3].hash_var4}),e.setState({main_hash:t.main_hash}),t.score>0&&e.setState({score:t.score});try{document.getElementById(t.answers[0].hash_var1).style.borderColor="",document.getElementById(t.answers[0].hash_var1).style.borderWidth="",document.getElementById(t.answers[1].hash_var2).style.borderColor="",document.getElementById(t.answers[1].hash_var2).style.borderWidth="",document.getElementById(t.answers[2].hash_var3).style.borderColor="",document.getElementById(t.answers[2].hash_var3).style.borderWidth="",document.getElementById(t.answers[3].hash_var4).style.borderColor="",document.getElementById(t.answers[3].hash_var4).style.borderWidth=""}catch(a){}e.setState({seconds:60}),e.startTimer("new"),e.setState({activeStory:"game"})}else e.setState({activeStory:"game"}),e.setState({firststart:"Y"}),e.setState({popout:r.a.createElement(_.Alert,{actions:[{title:"OK",autoclose:!0}],onClose:e.closePopout},r.a.createElement("h2",null,"\u041e\u0448\u0438\u0431\u043a\u0430!"),r.a.createElement("h2",null,t.errors))})})})}},{key:"onStoryChange",value:function(t){"top"===t.currentTarget.dataset.story&&this.setState({updatetop:"Y"}),"game"===t.currentTarget.dataset.story&&"Y"==this.state.firststart&&this.get_question(),this.setState({activeStory:t.currentTarget.dataset.story}),"top"!=t.currentTarget.dataset.story&&window.scrollTo(0,0),"lk "==t.currentTarget.dataset.story&&window.scrollTo(0,0),"top"===this.state.activeStory&&"lk"===t.currentTarget.dataset.story&&window.scrollTo(0,0),"oferta"===this.state.activeStory&&"top"===t.currentTarget.dataset.story&&window.scrollTo(300,300),"pricelist"===this.state.activeStory&&"top"===t.currentTarget.dataset.story&&window.scrollTo(0,0)}},{key:"menu",value:function(t){"oferta"===this.state.activeStory?(this.setState({activePanel:"order",activeStory:"order"}),window.history.pushState({panel:"order"},"order"),window.scrollTo(300,300)):"main"!==this.state.activeStory&&(t.state?this.setState({activePanel:t.state.panel,activeStory:t.state.panel}):(this.setState({activePanel:"main",activeStory:"main",search:""}),window.history.pushState({panel:"main"},"main")))}},{key:"secondsToTime",value:function(t){return{h:0,m:0,s:t}}},{key:"startTimer",value:function(t){"new"==t&&(clearInterval(this.timer),this.timer=0),this.state.seconds>0&&(this.timer=setInterval(this.countDown,1e3))}},{key:"countDown",value:function(){if(this.state.seconds>0&&""===this.state.cur_answer){var t=this.state.seconds-1;this.setState({time:this.secondsToTime(t),seconds:t}),0==t&&(clearInterval(this.timer),""===this.state.cur_answer&&(this.setState({hash_var1:""}),this.setState({hash_var2:""}),this.setState({hash_var3:""}),this.setState({hash_var4:""}),this.setState({cur_answer:"next_q"}),this.checkvar("timeout")))}}},{key:"componentDidMount",value:function(){var t=this,e=this.secondsToTime(this.state.seconds);this.setState({time:e}),window.setInterval(this.checkInternet,500),window.addEventListener("popstate",function(e){return e.preventDefault()&t.menu(e)}),window.history.pushState({panel:"main"},"main"),l.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppUpdateConfig":var a=document.createAttribute("scheme");a.value=e.detail.data.scheme?e.detail.data.scheme:"client_light",document.body.attributes.setNamedItem(a);break;case"VKWebAppGetUserInfoResult":t.setState({fetchedUser:e.detail.data}),t.setState({vkid:e.detail.data.id});var s={action:"check_user_in_group",vkid:e.detail.data.id},n=new FormData;n.append("json",JSON.stringify(s)),fetch("https://zakupi.club/telegram_bot/bot_iskustvoved/ajax_isk.php",{method:"POST",body:n}).then(function(e){200===e.status&&e.json().then(function(e){"Y"==e.success?"N"==e.in_group&&l.a.send("VKWebAppJoinGroup",{group_id:e.group_id}):t.setState({popout:r.a.createElement(_.Alert,{actions:[{title:"OK",autoclose:!0}],onClose:t.closePopout},r.a.createElement("h2",null,"\u041e\u0448\u0438\u0431\u043a\u0430!"),r.a.createElement("h2",null,e.errors))})})})}}),l.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){var t,e=this,a=Array.from(this.state.top_list);return r.a.createElement(_.Epic,{activeStory:this.state.activeStory,tabbar:"oferta"!==this.state.activeStory&&"off"!==this.state.activeStory&&r.a.createElement(_.Tabbar,null,r.a.createElement(_.TabbarItem,{onClick:this.onStoryChange,selected:"main"===this.state.activeStory,"data-story":"main",text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},r.a.createElement(b.a,null)),r.a.createElement(_.TabbarItem,{onClick:this.onStoryChange,selected:"game"===this.state.activeStory,"data-story":"game",text:"\u0418\u0433\u0440\u0430"},r.a.createElement(g.a,null)),r.a.createElement(_.TabbarItem,{onClick:this.onStoryChange,selected:"top"===this.state.activeStory,"data-story":"top",text:"\u0422\u041e\u041f"},r.a.createElement(k.a,null)))},r.a.createElement(_.View,{id:"spinner",activePanel:"spinner"},r.a.createElement(_.Panel,{id:"spinner"},r.a.createElement(_.PanelHeader,null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445..."),r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},r.a.createElement(_.Spinner,{size:"large",style:{marginTop:20}})))),r.a.createElement(_.View,(t={id:"main",activePanel:"main"},Object(c.a)(t,"activePanel",this.state.activePanel),Object(c.a)(t,"popout",this.state.popout),t),r.a.createElement(_.Panel,{id:"main"},r.a.createElement(_.PanelHeader,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),r.a.createElement(_.Group,{title:""},r.a.createElement(_.Div,null,r.a.createElement("b",null,"\u0418\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e\u0432\u0435\u0434 \u2014 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044e\u0449\u0438\u0439 \u0441\u0435\u0440\u0432\u0438\u0441"))),r.a.createElement(_.Group,{title:"\u041c\u0438\u0441\u0441\u0438\u044f \u0441\u0435\u0440\u0432\u0438\u0441\u0430"},r.a.createElement(_.Div,null,r.a.createElement(_.InfoRow,{title:""},'\u0418\u0433\u0440\u043e\u0432\u043e\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 "\u0418\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e\u0432\u0435\u0434" \u2014 \u044d\u0442\u043e \u043f\u0440\u0435\u0432\u043e\u0441\u0445\u043e\u0434\u043d\u0430\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0438\u0437\u0443\u0447\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u044b \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0445 \u0445\u0443\u0434\u043e\u0436\u043d\u0438\u043a\u043e\u0432. \u041d\u0430\u0448 \u0441\u0435\u0440\u0432\u0438\u0441 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d \u043d\u0430 \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u0435 \u043e\u0431\u0449\u0435\u0439 \u044d\u0440\u0443\u0434\u0438\u0446\u0438\u0438 \u043b\u044e\u0434\u0435\u0439 \u0432 \u043b\u0435\u0433\u043a\u043e\u0439 \u0438\u0433\u0440\u043e\u0432\u043e\u0439 \u0444\u043e\u0440\u043c\u0435. \u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u0430\u044f \u043c\u0438\u043d\u0443\u0442\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0435\u0451 \u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0439 \u0434\u043b\u044f \u0441\u0435\u0431\u044f.'))),r.a.createElement(_.Group,{title:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438\u0433\u0440\u044b:"},r.a.createElement(_.Div,null,r.a.createElement(_.InfoRow,{title:""},"\u0421\u0435\u0440\u0432\u0438\u0441 \u0432\u0430\u043c \u043f\u043e\u043a\u0430\u0436\u0435\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u0443 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e\u0433\u043e \u0445\u0443\u0434\u043e\u0436\u043d\u0438\u043a\u0430 \u0438 4 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 (\u0430\u0432\u0442\u043e\u0440\u043e\u0432 \u043a\u0430\u0440\u0442\u0438\u043d\u044b). \u0412\u0430\u043c \u043d\u0430\u0434\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u0438\u0437 \u043d\u0438\u0445. \u0415\u0441\u043b\u0438 \u0432\u0430\u0448 \u043e\u0442\u0432\u0435\u0442 \u043e\u043a\u0430\u0437\u0430\u043b\u0441\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u043c, \u0432\u0430\u043c \u043d\u0430\u0447\u0438\u0441\u043b\u044f\u0442 20 \u0431\u0430\u043b\u043b\u043e\u0432 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441 \u043f\u043e\u043a\u0430\u0436\u0435\u0442 \u0442\u0430\u043a \u0436\u0435  \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u044b. \u0412 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0441\u0435\u0440\u0432\u0438\u0441 \u0432\u0430\u043c \u0441\u043a\u0430\u0436\u0435\u0442 \u043a\u0442\u043e \u0430\u0432\u0442\u043e\u0440 \u0438 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u044b. \u041d\u0430 \u043e\u0442\u0432\u0435\u0442 \u0434\u0430\u0435\u0442\u0441\u044f 1 \u043c\u0438\u043d\u0443\u0442\u0430, \u0434\u0430\u043b\u0435\u0435 \u043e\u0442\u0432\u0435\u0442 \u043d\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f."))),r.a.createElement(_.Group,{title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"},r.a.createElement(_.Div,null,r.a.createElement(_.InfoRow,{title:""},"\u041d\u0430\u0448\u0430 \u0433\u0440\u0443\u043f\u043f\u0430 \u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435: ",r.a.createElement("a",{style:{color:"#42648b"},target:"_blank",href:"https://vk.com/isk_bot"},"https://vk.com/isk_bot")))),r.a.createElement(_.Group,{title:"\u0412\u0435\u0440\u0441\u0438\u044f \u041f\u041e:"},r.a.createElement(_.Div,null,r.a.createElement(_.InfoRow,{title:""},"1.1.07"))),r.a.createElement(_.Group,null,r.a.createElement(_.Div,null,r.a.createElement(_.Button,{size:"xl",level:"2",onClick:this.onStoryChange,selected:"game"===this.state.activeStory,"data-story":"game"},"\u0414\u0430\u0432\u0430\u0439 \u0438\u0433\u0440\u0430\u0442\u044c!"))))),r.a.createElement(_.View,{id:"off",activePanel:this.state.activePanel,popout:this.state.popout},r.a.createElement(_.Panel,{id:"off"},r.a.createElement(_.PanelHeader,null,"\u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 internet"),r.a.createElement(_.Group,null,r.a.createElement(_.Div,{align:"center"},'"\u0418\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e\u0432\u0435\u0434"'),r.a.createElement(_.Div,{align:"center"},"Ooops... \u041f\u0440\u043e\u043f\u0430\u043b\u043e \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435.",r.a.createElement("br",null),"\u041a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e, \u043c\u044b \u043f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u043c \u0412\u0430\u0441 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.")))),r.a.createElement(_.View,{id:"game",activePanel:"game",popout:this.state.popout},r.a.createElement(_.Panel,{id:"game"},r.a.createElement(_.PanelHeader,null,r.a.createElement(_.PanelHeaderContent,{status:"\u0412\u0430\u0448 \u0441\u0447\u0435\u0442: "+this.state.score},"\u0418\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e\u0432\u0435\u0434")),this.state.img_pic&&r.a.createElement(_.Div,null,r.a.createElement("img",{className:"Imgpic",src:this.state.img_pic}),r.a.createElement(_.Group,null,this.state.cur_header&&r.a.createElement(_.Div,{id:"answer"},this.state.cur_header,r.a.createElement("br",null),this.state.cur_answer),r.a.createElement(_.FormLayout,null,this.state.hash_var1.length>0&&r.a.createElement(_.Button,{disabled:"disabled"==this.state.hash_var1,style:{borderColor:this.state.color_var1},id:this.state.hash_var1,size:"xl",level:"2",onClick:function(t){return e.checkvar(e.state.hash_var1,t)}},this.state.var1),this.state.hash_var2.length>0&&r.a.createElement(_.Button,{disabled:"disabled"==this.state.hash_var2,style:{borderColor:this.state.color_var2},id:this.state.hash_var2,size:"xl",level:"2",onClick:function(t){return e.checkvar(e.state.hash_var2,t)}},this.state.var2),this.state.hash_var3.length>0&&r.a.createElement(_.Button,{disabled:"disabled"==this.state.hash_var3,style:{borderColor:this.state.color_var3},id:this.state.hash_var3,size:"xl",level:"2",onClick:function(t){return e.checkvar(e.state.hash_var3,t)}},this.state.var3),this.state.hash_var4.length>0&&r.a.createElement(_.Button,{disabled:"disabled"==this.state.hash_var4,style:{borderColor:this.state.color_var4},id:this.state.hash_var4,size:"xl",level:"2",onClick:function(t){return e.checkvar(e.state.hash_var4,t)}},this.state.var4)),"Y"!==this.state.firststart&&r.a.createElement(_.Div,{align:"center"},"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0432\u0440\u0435\u043c\u0435\u043d\u0438: ",this.state.time.s," \u0441\u0435\u043a"),"Y"===this.state.firststart&&r.a.createElement(_.Div,{style:{}},r.a.createElement(_.Button,{id:"next_q",size:"xl",level:"2",onClick:function(t){return e.get_question()}},"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443")),this.state.cur_answer&&r.a.createElement(_.Div,{style:{}},r.a.createElement(_.Button,{id:"next_q",size:"xl",level:"2",onClick:function(t){return e.get_question()}},"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u043e\u043f\u0440\u043e\u0441")))))),r.a.createElement(_.View,{id:"top",activePanel:"top",popout:this.state.popout},r.a.createElement(_.Panel,{id:"top"},r.a.createElement(_.PanelHeader,null,"\u0422\u041e\u041f"),r.a.createElement(_.Group,{title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u0438\u0433\u0440\u043e\u043a\u043e\u0432"},this.gettop(this.state.updatetop),a.length>0&&r.a.createElement(_.List,null,a.map(function(t,e){return r.a.createElement(_.Cell,{before:r.a.createElement(_.Avatar,{src:t.UF_PHOTO_200},""==t.UF_PHOTO_200?r.a.createElement(E.a,null):""," "),indicator:r.a.createElement(_.Counter,{type:"primary"},t.TOP)}," ",t.fname," ",t.lname," ")}))))))}}]),e}(r.a.Component));l.a.send("VKWebAppInit",{}),o.a.render(r.a.createElement(P,null),document.getElementById("root"))},71:function(t,e,a){t.exports=a(141)}},[[71,1,2]]]);
//# sourceMappingURL=main.29d67244.chunk.js.map