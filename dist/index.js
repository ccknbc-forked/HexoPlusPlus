const hpp_CDNver="5d46239",hpp_ver="HexoPlusPlus@0.1.3";let hpp_talkhtml='\n<meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@5d46239/dist/talk.css" /> \n<script src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@5d46239/dist/talk.js"><\/script>\n<div id="hpp_talk"></div>\n<script>\nnew hpp_talk({\nid:"hpp_talk",\nback: "/hpp/api/gethpptalk"\n})\n<\/script>\n',hpp_errorhtml='\n<!DOCTYPE html>\n<html lang="en" class="no-js">\n\t<head>\n        <meta charset="UTF-8" />\n        <meta http-equiv="X-UA-Compatible" content="IE=edge"> \n        <meta name="viewport" content="width=device-width, initial-scale=1"> \n        <title>HexoPlusPlusError</title>\n        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@5d46239/dist/error.css" />\n        <link href=\'http://fonts.googleapis.com/css?family=Raleway:200,400,800|Clicker+Script\' rel=\'stylesheet\' type=\'text/css\'>\n\t</head>\n\t<body>\n\t\t<div class="container demo-2">\n\t\t\t<div class="content">\n                <div id="large-header" class="large-header">\n                    <canvas id="demo-canvas"></canvas>\n                    <h1 class="main-title"><span>Error</span></h1>\n                </div>\n                <div class="codrops-header">\n                    <h1>HexoPlusPlus <span>-错误：不知道你的目的是什么</span></h1>\n                    <nav class="codrops-demos">\n                        <a class="current-demo" href="/hpp/admin/dash">仪表盘</a>\n                        <a class="current-demo" href="https://github.com/HexoPlusPlus/HexoPlusPlus">Github</a>\n                    </nav>\n                </div>\n            </div>\n\t\t</div>\n        <script src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@5d46239/dist/error.js"><\/script>\n\t</body>\n</html>\n',hpp_loginhtml='\n<!DOCTYPE html>\n<html lang="zh-cmn-Hans">\n <head>\n  <meta charset="utf-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />\n  <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1"><\/script>\n  <title>后台</title>\n  <style>\n  .rv-root{\n      z-index:999;\n  }\n  a:link { text-decoration: none;color: white}\n　　 a:active { text-decoration:blink}\n　　 a:hover { text-decoration:underline;color: white} \n　　 a:visited { text-decoration: none;color: white}\n  </style>\n  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@5d46239/dist/login.css" /> \n </head>\n <body>\n  <div id="all">\n   <div class="wrapper">\n    <div class="bg-container">\n     <div class="container">\n      <h1 style="margin: 0;" id="bar">Welcome</h1>\n      <form class="form" id="fm">\n       <input id="username" type="text" placeholder="用户名" value="" name="username" />\n       <input id="password" type="password" placeholder="密码" value="" name="password" />\n       <button type="button" id="login-button">登录</button>\n       <br />\n       <br />\n       <a href="https://github.com/HexoPlusPlus/HexoPlusPlus" id="tips" style="color: #fff;">@HexoPP</a>\n      </form>\n     </div>\n    </div>\n    <ul class="bg-bubbles">\n     <li></li>\n     <li></li>\n     <li></li>\n     <li></li>\n     <li></li>\n     <li></li>\n     <li></li>\n     <li></li>\n     <li></li>\n     <li></li>\n    </ul>\n   </div>\n  </div>\n  <script src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@5d46239/dist/md5.js"><\/script>\n  <script src="https://cdn.jsdelivr.net/gh/zpfz/RVerify.js/dist/RVerify.min.js"><\/script>\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/zpfz/RVerify.js/dist/RVerify.min.css"/>\n  <script>\n  RVerify.configure({\n  mask: 0.5,\n  maskClosable: true,\n  title: \'人机验证\',\n  album: [\'/hpp/api/captchaimg\']\n})\n  $("#login-button").click(function(event) {\nRVerify.action(function(res){\nif(res==1){\n    document.cookie = "username=" + md5(document.getElementById("username").value);\n    document.cookie = "password=" + md5(document.getElementById("password").value);\n    window.location.href = \'/hpp/admin/dash\';\n}\n});\n\n});\n  <\/script>\n  </body>\n</html>\n',hpp_installhtml=`<!doctype html>\n<html lang="zh">\n<head>\n\t<meta charset="UTF-8">\n\t<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> \n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<title>${hpp_ver}安装</title>\n\t<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@5d46239/dist/install.css">\n</head>\n<body>\n\t\t<div class="cont_principal">\n\t\t\t\n\t\t  <div class="cont_join  ">\n\t\t    <div class="cont_letras">\n\t\t      <p>Hexo</p>\n\t\t      <p>Plus</p>\n\t\t      <p>plus</p>\n\t\t    </div>\n\n\t\t    <div class="cont_form_join" style="overflow-x: auto;">\n\t\t      <h2>安装信息</h2>\n\t\t\t  <h3>基本信息</h3>\n\t\t      <p>域名:</p>    \n\t\t      <input type="text" class="input_text" id="hpp_domain" value="xxx.xxx.com"/>\n\t\t      <p>头像地址:</p>    \n\t\t      <input type="text" class="input_text" id="hpp_userimage" value="https://cdn.jsdelivr.net/gh/ChenYFan/CDN/img/avatar.png"/>\n\t\t      <p>标题:</p>    \n\t\t      <input type="text" class="input_text" id="hpp_title" value="XXX的后台"/>\n\t\t      <p>icon地址:</p>    \n\t\t      <input type="text" class="input_text" id="hpp_usericon" value="https://cdn.jsdelivr.net/gh/ChenYFan/chenyfan.github.io/favicon.ico"/>\n\t\t      <p>跨域请求:</p>    \n\t\t\t  <input type="text" class="input_text" id="hpp_cors" value="*"/>\n\t\t\t  <h3>Github信息</h3>\n\t\t      <p>Github文档仓库Token:</p>    \n\t\t      <input type="text" class="input_text" id="hpp_githubdoctoken" value="*********"/>\n\t\t\t  <p>Github图片仓库Token:</p>    \n\t\t      <input type="text" class="input_text" id="hpp_githubimagetoken" value="*********"/>\n\t\t\t  <p>Github文档仓库用户名:</p>    \n\t\t      <input type="text" class="input_text" id="hpp_githubdocusername" value="XXX" />\n\t\t\t  <p>Github图片仓库用户名:</p>    \n\t\t      <input type="text" class="input_text" id="hpp_githubimageusername" value="XXX" />\n\t\t\t  <p>Github文档仓库名:</p>    \n\t\t      <input type="text" class="input_text" id="hpp_githubdocrepo" value="blog" />\n\t\t\t  <p>Github图片仓库名:</p>    \n\t\t      <input type="text" class="input_text" id="hpp_githubimagerepo" value="image" />\n\t\t\t  <p>Github文档仓库路径:</p>    \n\t\t      <input type="text" class="input_text" id="hpp_githubdocpath" value="/source/_posts/" />\n\t\t\t  <p>Github图片仓库路径:</p>    \n\t\t      <input type="text" class="input_text" id="hpp_githubimagepath" value="/" />\n\t\t\t  <p>Github文档仓库分支:</p>    \n\t\t      <input type="text" class="input_text" id="hpp_githubdocbranch" value="master" />\n\t\t\t  <p>Github图片仓库分支:</p>    \n\t\t      <input type="text" class="input_text" id="hpp_githubimagebranch" value="main" />\n\t\t\t  <h3>附加功能</h3>\n\t\t\t  <p>是否自动签到【是为True，否为False】:</p>    \n\t\t      <input type="text" class="input_text" id="hpp_autodate" value="False" />\n              <h3>CloudFlare访问功能</h3>\n\t\t\t  <p>Global API Key:</p>    \n\t\t      <input type="text" class="input_text" id="hpp_CF_Auth_Key" value="***" />\n              <p>目标Workers名称:</p>    \n\t\t      <input type="text" class="input_text" id="hpp_script_name" value="HexoPlusPlus" />\n              <p>Workers账户ID:</p>    \n\t\t      <input type="text" class="input_text" id="hpp_account_identifier" value="***" />\n              <p>账户登录邮箱:</p>    \n\t\t      <input type="text" class="input_text" id="hpp_Auth_Email" value="ABC@DEF.com" />\n\n\t\t    </div>\n\t\t  \n\t\t    <div class="cont_join_form_finish" style="display:none">\n\t\t      <h2>完成</h2>  \n\t\t    </div>\n\n\t\t    <div class="cont_btn_join">\n\t\t      <a href="#" onclick='start()' id="butttt">开始配置</a>\n\t\t    </div>\n\t\t  </div>\n\t\t</div>\n\t</div>\n\t\n\t<script src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@5d46239/dist/install.js"><\/script>\n</body>\n</html>`;function getJsonLength(t){var n=0;for(var e in t)n++;return n}function getCookie(t,n){let e="";const s=t.headers.get("Cookie");if(s){s.split(";").forEach((t=>{const s=t.split("=",2);if(s[0].trim()===n){const t=s[1];e=t}}))}return e}async function handleRequest(t){
/*!!!!!!高危，无权限，仅供测试
    var hpp_logstatus = 1
    */
var n=0;const e=t.url,s=new URL(e),i=s.href.substr(s.origin.length),a=e.split("/")[2],p=hpp_username.split(","),r=hpp_password.split(",");for(var c=0;c<getJsonLength(p);c++)getCookie(t,"password")==md5(r[c])&&getCookie(t,"username")==md5(p[c])&&(n=1);if(i.startsWith("/hpp/admin")){if(1!=n)return"/hpp/admin/login"==i?new Response(hpp_loginhtml,{headers:{"content-type":"text/html;charset=UTF-8"}}):Response.redirect("https://"+a+"/hpp/admin/login",302);{const n=await KVNAME.get("hpp_config");if(null===n){if("/hpp/admin/api/upconfig"==i){const n=JSON.stringify(await t.text());return await KVNAME.put("hpp_config",n),new Response("OK")}return new Response(hpp_installhtml,{headers:{"content-type":"text/html;charset=UTF-8"}})}{const e=JSON.parse(JSON.parse(n)),s=e.hpp_domain,a=e.hpp_userimage,r=e.hpp_title,l=e.hpp_usericon,d=e.hpp_cors,h=e.hpp_githubdoctoken,u=e.hpp_githubimagetoken,m=e.hpp_githubdocusername,g=e.hpp_githubdocrepo,v=e.hpp_githubdocpath,b=e.hpp_githubdocbranch,f=e.hpp_githubimageusername,y=e.hpp_githubimagerepo,x=e.hpp_githubimagepath,w=e.hpp_githubimagebranch,_=e.hpp_autodate,P=e.hpp_account_identifier,k=e.hpp_script_name,j=e.hpp_CF_Auth_Key,$=e.hpp_Auth_Email;if("True"==_){const t=Date.now(new Date);await KVNAME.put("hpp_activetime",t);Date.now(new Date)}const H={method:"GET",headers:{"content-type":"application/json;charset=UTF-8","user-agent":hpp_ver,Authorization:"token "+u}},C={method:"GET",headers:{"content-type":"application/json;charset=UTF-8","user-agent":hpp_ver,Authorization:"token "+h}},T=`\n\n<!doctype html>\n<html lang="zh">\n<head>\n\t<meta charset="UTF-8">                                  \n\t<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> \n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<title>${r}</title>\n\t<script src="https://cdn.jsdelivr.net/npm/jquery@2.2.4"><\/script>\n\t<link href="https://cdn.jsdelivr.net/npm/font-awesome@4.4.0/css/font-awesome.min.css" rel="stylesheet">\n\t<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.6/dist/css/bootstrap.min.css">  \n\t<link rel="shortcut icon" href="${l}" type="image/x-icon" />\n\t<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/indrimuska/jquery-editable-select/dist/jquery-editable-select.min.css">\n\t<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@5d46239/dist/admin.css">\n\t<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.6/dist/js/bootstrap.min.js"><\/script>\n\t<script src="https://cdn.jsdelivr.net/gh/markusslima/bootstrap-filestyle@gh-pages/1.2.3/js/bootstrap-filestyle.min.js"><\/script>\n\t\n\t\t</head>\n<body>\n\t\n\t\t<div class="container pb30">\n\t\t\t<div class="clear-backend">\n\t\t\t<div class="avatar">\n\t\t\t\t<div>\n\t\t\t\t\t<a href="/" target="_blank">\n\t\t\t\t\t\t<img src="${a}" alt="">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t\x3c!-- tab-menu --\x3e\n\t\t\t<input type="radio" class="tab-1" name="tab" checked="checked">\n\t\t\t<span>主页</span><i class="fa fa-home"></i>\n\n\t\t\t<input type="radio" class="tab-2" name="tab">\n\t\t\t<span>书写</span><i class="fa fa-medium"></i>\n\t<input type="radio" class="tab-3" name="tab">\n\t\t\t<span>说说</span><i class="fa fa-wechat"></i>\n\t\t\t<input type="radio" class="tab-5" name="tab">\n\t\t\t<span>信息</span><i class="fa fa-info"></i>\n            <input type="radio" class="tab-6" name="tab">\n\t\t\t<span>图片</span><i class="fa fa-photo"></i>\n            <input type="radio" class="tab-7" name="tab">\n\t\t\t<span>文档</span><i class="fa fa-book"></i>\n\t\t\n\t\t\t\n\t\t\x3c!--\t\t\t\n\t\t\t<input type="radio" class="tab-8" name="tab">\n\t\t\t<span>--</span><i class="fa fa-line-chart"></i>\n\t\t\t\n\t\t\t<input type="radio" class="tab-9" name="tab">\n\t\t\t<span>--</span><i class="fa fa-link"></i>\n\t\t\t\n\t\t\t<input type="radio" class="tab-10" name="tab">\n\t\t\t<span>--</span><i class="fa fa-cog"></i>\n--\x3e\n\t\t\t<div class="top-bar">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="javascript:hpp_logout()" title="Log Out">\n\t\t\t\t\t\t\t<i class="fa fa-sign-out"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="javascript:jQuery.getScript('/hpp/admin/api/checkupdate')" title="Update">\n\t\t\t\t\t\t\t<i class="fa fa-upload"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="javascript:kick()" title="签到">\n\t\t\t\t\t\t\t<i class="fa fa-paper-plane"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t\x3c!-- tab-content --\x3e\n\t\t\t<div class="tab-content">\n\t\t\t\t<section class="tab-item-1">\n                <h1 style="text-align: center;">Hi~ o(*￣▽￣*)ブ</h1>\n                <h1 style="text-align: center;">欢迎使用HexoPlusPlus</h1>\n                <div style="text-align: center;">\n                \n                </div>\n<div style="text-align: center;">\n                \n\t\t\t\t\t<button type="button" class="btn btn-warning" onclick="location.href='https://github.com/HexoPlusPlus/HexoPlusPlus'">Github</button>\n\t\t\t\t<button type="button" class="btn btn-warning" onclick="location.href='https://hexoplusplus.js.org/'">文档</button>\n                <button type="button" class="btn btn-success" onclick="location.href='https://jq.qq.com/?_wv=1027&k=rAcnhzqK'">QQ群</button>\n                </div>\n\t\t\t\t</section>\n\t\t\t\t<section class="tab-item-2">\n\t\t\t\t\n\t\t\t\t<select id="choo" class="form-control form-control-chosen" style="display: inline;"></select>\n<button onclick="getdoc();" class="btn-sm btn btn-success">GET</button>\n\n\t\t\t\t\t<div class="markdown_editor" style="position: initial;">\n\t\t\t\t<textarea id="mdeditor" name="content" rows="10"></textarea>\n                <form id="upform" enctype='multipart/form-data' style="display:none;">\n    <div class="form-group">\n        <label for="upteainput">上传文件</label>\n        <input type="file" id="input">\n    </div>\n</form>\n\t\t\t</div>\n\t\t\t\t</section>\n\t\t\t\t<section class="tab-item-3">\n                <iframe id="talk" src="" style=" width: 100%;    height: 100%;    border: medium none;"></iframe>\n\t\t\t\t</section>\n\t\t\t\t<section class="tab-item-5">\n\t\t\t\t\t<table class="table table-striped">\n  <caption>后端信息表</caption>\n  <thead>\n    <tr>\n      <th>目标</th>\n      <th>键值</th>\n    </tr>\n  </thead>\n  <tbody>\n  <tr>\n      <td>当前版本</td>\n      <td>${hpp_ver}</td>\n    </tr>\n    <tr>\n      <td>绑定的域名</td>\n      <td>${s}</td>\n    </tr>\n    <tr>\n      <td>用户头像</td>\n      <td>${a}</td>\n    </tr>\n    <tr>\n      <td>用户icon</td>\n      <td>${l}</td>\n    </tr>\n    <tr>\n      <td>跨域</td>\n      <td>${d}</td>\n    </tr>\n    <tr>\n      <td>CDN版本</td>\n      <td>5d46239</td>\n    </tr>\n    <tr>\n      <td>Github文档存储用户名</td>\n      <td>${m}</td>\n    </tr>\n    <tr>\n      <td>Github文档存储仓库名</td>\n      <td>${g}</td>\n    </tr>\n    <tr>\n      <td>Github文档存储路径</td>\n      <td>${v}</td>\n    </tr>\n    <tr>\n      <td>Github文档存储分支</td>\n      <td>${b}</td>\n    </tr>\n    <tr>\n      <td>Github图片存储用户名</td>\n      <td>${f}</td>\n    </tr>\n    <tr>\n      <td>Github图片存储仓库名</td>\n      <td>${y}</td>\n    </tr>\n    <tr>\n      <td>Github图片存储路径</td>\n      <td>${x}</td>\n    </tr>\n    <tr>\n      <td>Github图片存储分支</td>\n      <td>${w}</td>\n    </tr>\n    <tr>\n      <td>CDN节点位置</td>\n      <td id="cdn"></td>\n    </tr>\n     <tr>\n      <td>用户IP</td>\n      <td id="ip"></td>\n    </tr>\n    <tr>\n      <td>User-Agent</td>\n      <td id="uag"></td>\n    </tr>\n    <tr>\n      <td>是否以HTTPS方式连接</td>\n      <td id="httpos"></td>\n    </tr>\n    <tr>\n      <td>HTTP连接版本</td>\n      <td id="http"></td>\n    </tr>\n    <tr>\n      <td>用户所处地区</td>\n      <td id="loc"></td>\n    </tr>\n    <tr>\n      <td>SSL版本</td>\n      <td id="tls"></td>\n    </tr>\n    <tr>\n      <td>是否使用Warp</td>\n      <td id="warp"></td>\n    </tr>\n  </tbody>\n</table>\n\t\t\t\t</section>\n\t\t\t\t\n                <section class="tab-item-6">\n                <iframe id="imgman" src="" style=" width: 100%;    height: 100%;    border: medium none;"></iframe>\n\t\t\t\t</section>\n                <section class="tab-item-7">\n                <iframe id="docman" src="" style=" width: 100%;    height: 100%;    border: medium none;"></iframe>\n\t\t\t\t</section>\n\t\t\t</div>\n\t\t</div>\n\t\n\t<script>\n    const hpp_now= '${hpp_ver}';\n    const hpp_ver = '${hpp_ver}';\n\tfunction hpp_logout(){\n\tdocument.cookie="username=";  document.cookie="password=";  location.reload();\n\t};\n\t<\/script>\n\t<script src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@5d46239/dist/bm.js"><\/script>\n\t<script src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@5d46239/dist/bm.zh.js"><\/script>\n\t\n\t<script src="https://cdn.jsdelivr.net/gh/indrimuska/jquery-editable-select/dist/jquery-editable-select.min.js"><\/script>\n\t<script src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@5d46239/dist/admin.js"><\/script>\n\t<script src="https://cdn.jsdelivr.net/npm/sweetalert/dist/sweetalert.min.js"><\/script>\n\t\n</body>\n</html>\n`,R=`<!DOCTYPE html>\n<html lang="zh">\n<head>\n\t<meta charset="UTF-8">\n\t<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> \n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@5d46239/dist/filemanager.css" />\n\t<link rel="shortcut icon" href="${l}" type="image/x-icon" />\n    <style>\n    ::-webkit-scrollbar-track-piece {\nbackground-color:#f8f8f8;\n}\n::-webkit-scrollbar {\nwidth:9px;\nheight:9px;\n}\n::-webkit-scrollbar-thumb {\nbackground-color:#dddddd;\nbackground-clip:padding-box;\nmin-height:28px;\n}\n::-webkit-scrollbar-thumb:hover {\nbackground-color:#bbb;\n}\n</style>\n`,z='\n\n</head>\n<body>\n    <div class="loader">\n      <div class="lds-ripple">\n        <div></div>\n        <div></div>\n      </div>\n    </div>\n    <section class="grid-holder">\n      <div class="grid-list-layout">\n        <nav class="navigation">\n        </nav>\n        \n        <div class="grid-list-holder">\n          <span class="grid-layout active">\n          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n      viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n          <g>\n            <g>\n              <path d="M176.792,0H59.208C26.561,0,0,26.561,0,59.208v117.584C0,209.439,26.561,236,59.208,236h117.584\n                C209.439,236,236,209.439,236,176.792V59.208C236,26.561,209.439,0,176.792,0z M196,176.792c0,10.591-8.617,19.208-19.208,19.208\n                H59.208C48.617,196,40,187.383,40,176.792V59.208C40,48.617,48.617,40,59.208,40h117.584C187.383,40,196,48.617,196,59.208\n                V176.792z"/>\n            </g>\n          </g>\n          <g>\n            <g>\n              <path d="M452,0H336c-33.084,0-60,26.916-60,60v116c0,33.084,26.916,60,60,60h116c33.084,0,60-26.916,60-60V60\n                C512,26.916,485.084,0,452,0z M472,176c0,11.028-8.972,20-20,20H336c-11.028,0-20-8.972-20-20V60c0-11.028,8.972-20,20-20h116\n                c11.028,0,20,8.972,20,20V176z"/>\n            </g>\n          </g>\n          <g>\n            <g>\n              <path d="M176.792,276H59.208C26.561,276,0,302.561,0,335.208v117.584C0,485.439,26.561,512,59.208,512h117.584\n                C209.439,512,236,485.439,236,452.792V335.208C236,302.561,209.439,276,176.792,276z M196,452.792\n                c0,10.591-8.617,19.208-19.208,19.208H59.208C48.617,472,40,463.383,40,452.792V335.208C40,324.617,48.617,316,59.208,316h117.584\n                c10.591,0,19.208,8.617,19.208,19.208V452.792z"/>\n            </g>\n          </g>\n          <g>\n            <g>\n              <path d="M452,276H336c-33.084,0-60,26.916-60,60v116c0,33.084,26.916,60,60,60h116c33.084,0,60-26.916,60-60V336\n                C512,302.916,485.084,276,452,276z M472,452c0,11.028-8.972,20-20,20H336c-11.028,0-20-8.972-20-20V336c0-11.028,8.972-20,20-20\n                h116c11.028,0,20,8.972,20,20V452z"/>\n            </g>\n          </g>\n          <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g>\n          </svg>\n        </span>\n          <span class="list-layout">\n          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n      viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n    <g>\n      <g>\n        <path d="M100.923,0C64.276,0,34.462,29.814,34.462,66.462s29.814,66.462,66.462,66.462c36.647,0,66.462-29.814,66.462-66.462\n          S137.57,0,100.923,0z M100.923,103.385C80.563,103.385,64,86.821,64,66.462s16.563-36.923,36.923-36.923\n          c20.36,0,36.923,16.563,36.923,36.923S121.283,103.385,100.923,103.385z"/>\n      </g>\n    </g>\n    <g>\n      <g>\n        <path d="M462.769,22.154h-256c-8.157,0-14.769,6.613-14.769,14.769V96c0,8.157,6.613,14.769,14.769,14.769h256\n          c8.157,0,14.769-6.613,14.769-14.769V36.923C477.538,28.767,470.926,22.154,462.769,22.154z M448,81.231H221.538V51.692H448\n          V81.231z"/>\n      </g>\n    </g>\n    <g>\n      <g>\n        <path d="M100.923,189.538c-36.647,0-66.462,29.814-66.462,66.462s29.814,66.462,66.462,66.462\n          c36.647,0,66.462-29.814,66.462-66.462S137.57,189.538,100.923,189.538z M100.923,292.923C80.563,292.923,64,276.36,64,256\n          s16.563-36.923,36.923-36.923c20.36,0,36.923,16.563,36.923,36.923S121.283,292.923,100.923,292.923z"/>\n      </g>\n    </g>\n    <g>\n      <g>\n        <path d="M462.769,211.692h-256c-8.157,0-14.769,6.613-14.769,14.769v59.077c0,8.157,6.613,14.769,14.769,14.769h256\n          c8.157,0,14.769-6.613,14.769-14.769v-59.077C477.538,218.305,470.926,211.692,462.769,211.692z M448,270.769H221.538v-29.538H448\n          V270.769z"/>\n      </g>\n    </g>\n    <g>\n      <g>\n        <path d="M100.923,379.077c-36.647,0-66.462,29.814-66.462,66.462S64.276,512,100.923,512c36.647,0,66.462-29.814,66.462-66.462\n          S137.57,379.077,100.923,379.077z M100.923,482.462c-20.36,0-36.923-16.563-36.923-36.923c0-20.36,16.563-36.923,36.923-36.923\n          c20.36,0,36.923,16.563,36.923,36.923C137.846,465.898,121.283,482.462,100.923,482.462z"/>\n      </g>\n    </g>\n    <g>\n      <g>\n        <path d="M462.769,401.231h-256c-8.157,0-14.769,6.613-14.769,14.769v59.077c0,8.157,6.613,14.769,14.769,14.769h256\n          c8.157,0,14.769-6.613,14.769-14.769V416C477.538,407.843,470.926,401.231,462.769,401.231z M448,460.308H221.538v-29.538H448\n          V460.308z"/>\n      </g>\n    </g>\n    <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g>\n          </svg>\n        </span>\n        </div>\n      </div>\n      <div class="grid masonry" id="item-all">     \n      </div>\n    </section>\n\t<script src="https://cdn.jsdelivr.net/npm/jquery@2.2.4" type="text/javascript"><\/script>\n',A=R+`\n\t<title>${r}-文档资源管理器</title>\n\t<script>\n\tconst hpp_githubdocusername = "${m}"\n\tconst hpp_githubdocrepo = "${g}"\n\tconst hpp_githubdocpath = "${v}"\n\tconst hpp_githubdocbranch = "${b}"\n\t<\/script>\n`+z+'\n<script src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@5d46239/dist/filemanager.js"><\/script>\n</body>\n</html>',E=R+`\n\t<title>${r}-图片资源管理器</title>\n\t<script>\n\tconst hpp_githubimageusername = "${f}"\n\tconst hpp_githubimagerepo = "${y}"\n\tconst hpp_githubimagepath = "${x}"\n\tconst hpp_githubimagebranch = "${w}"\n\t<\/script>\n`+z+'\n<script src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@5d46239/dist/imgmanager.js"><\/script>\n<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery-lazy@1.7.11/jquery.lazy.min.js"><\/script>\n<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery-lazy@1.7.11/jquery.lazy.plugins.min.js"><\/script>\n</body>\n</html>';let M=`\n<meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@5d46239/dist/talk.css" />\n<script src="https://cdn.jsdelivr.net/npm/jquery@2.2.4"><\/script>\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.6/dist/css/bootstrap.min.css"> \n<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.6/dist/js/bootstrap.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@5d46239/dist/bm.js"><\/script>\n<script src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@5d46239/dist/bm.zh.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/sweetalert/dist/sweetalert.min.js"><\/script>\n\n<div class="markdown_editor" style="position: initial;">\n<textarea id="mdeditor" name="content" rows="10"></textarea>\n               <form id="upform" enctype='multipart/form-data' style="display:none;">\n    <div class="form-group">\n        <label for="upteainput">上传文件</label>\n        <input type="file" id="input">\n    </div>\n</form>\n</div>\n<div id="hpp_talk"></div>\n<script src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@5d46239/dist/talk_admin.js"><\/script>\n<script>\nvar avatar="${a}";\nvar username="${p[0]}";\nnew hpp_talk({\nid:"hpp_talk",\nback: "/hpp/api/gethpptalk"\n});\n$(function(){\n\t\t$("#mdeditor").markdown({language:'zh'})\n});\n<\/script>\n`;if("/hpp/admin/api/kick"==i){const t=Date.now(new Date);await KVNAME.put("hpp_activetime",t);Date.now(new Date);return new Response("OK")}if("/hpp/admin/docsmanager"==i)return new Response(A,{headers:{"content-type":"text/html;charset=UTF-8"}});if("/hpp/admin/imgsmanager"==i)return new Response(E,{headers:{"content-type":"text/html;charset=UTF-8"}});if("/hpp/admin/talk"==i)return new Response(M,{headers:{"content-type":"text/html;charset=UTF-8"}});if(i.startsWith("/hpp/admin/api/adddoc/")){const n=await t.text(),e=`https://api.github.com/repos/${m}/${g}/contents${v}${i.substr("/hpp/admin/api/adddoc/".length)}`,s=JSON.parse(await(await fetch(e,C)).text()).sha,a={branch:b,message:`Upload from ${hpp_ver} By ${m}`,content:n,sha:s},p={body:JSON.stringify(a),method:"PUT",headers:{"content-type":"application/json;charset=UTF-8","user-agent":hpp_ver,Authorization:"token "+h}},r=await fetch(e,p),c=await r.status;return 200==c||201==c?new Response("Update Success",{status:c}):new Response("Fail To Update",{status:c})}if(i.startsWith("/hpp/admin/api/addimage")){const n=await t.text(),e=Date.parse(new Date),s=i.substr("/hpp/admin/api/addimage/".length),a=`https://api.github.com/repos/${f}/${y}/contents${x}${e}.${s}`,p={branch:w,message:`Upload from ${hpp_ver} By ${f}`,content:n},r={body:JSON.stringify(p),method:"PUT",headers:{"content-type":"application/json;charset=UTF-8","user-agent":hpp_ver,Authorization:"token "+u}},c=await fetch(a,r),o=await c.status;return 200==o||201==o?new Response(`https://cdn.jsdelivr.net/gh/${f}/${y}@${w}${x}${e}.${s}`,{status:o}):new Response("Fail To Upload Image",{status:o})}if(i.startsWith("/hpp/admin/api/deldoc")){const t=`https://api.github.com/repos/${m}/${g}/contents${v}${i.substr("/hpp/admin/api/deldoc/".length)}`,n=JSON.parse(await(await fetch(t,C)).text()).sha,e={branch:b,message:`Delete from ${hpp_ver} By ${m}`,sha:n},s={body:JSON.stringify(e),method:"DELETE",headers:{"content-type":"application/json;charset=UTF-8","user-agent":hpp_ver,Authorization:"token "+h}},a=await fetch(t,s),p=await a.status;return 200==p?new Response("Delete Success",{status:p}):new Response("Fail To Delete doc",{status:p})}if(i.startsWith("/hpp/admin/api/delimage")){const t=`https://api.github.com/repos/${f}/${y}/contents${x.substr(0,x.length-1)}?ref=${w}`,n=i.substr("/hpp/admin/api/delimage/".length),e=`https://api.github.com/repos/${f}/${y}/contents${x}${n}?ref=${w}`,s=JSON.parse(await(await fetch(t,H)).text());console.log(s);let a="";for(c=0;c<getJsonLength(s);c++)if(s[c].name==n){a=s[c].sha;break}console.log(a);const p={branch:w,message:`Delete from ${hpp_ver} By ${m}`,sha:a},r={body:JSON.stringify(p),method:"DELETE",headers:{"content-type":"application/json;charset=UTF-8","user-agent":hpp_ver,Authorization:"token "+u}},o=await fetch(e,r),l=await o.status;return 200==l?new Response("Delete Success",{status:l}):new Response("Fail To Delete Image",{status:l})}if(i.startsWith("/hpp/admin/api/getdoc")){const t=i.substr("/hpp/admin/api/getdoc/".length);return fetch(`https://raw.githubusercontent.com/${m}/${g}/${b}${v}${t}?ref=${b}`)}if("/hpp/admin/api/getlist"==i){const t=`https://api.github.com/repos/${m}/${g}/contents${v.substr(0,v.length-1)}?ref=${b}`,n=await fetch(t,C);return new Response(await n.text(),{headers:{"content-type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":d}})}if("/hpp/admin/api/getimglist"==i){const t=`https://api.github.com/repos/${f}/${y}/contents${x.substr(0,x.length-1)}?ref=${w}`,n=await fetch(t,H);return new Response(await n.text(),{headers:{"content-type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":d}})}if("/hpp/admin/api/addtalk"==i){const n=JSON.parse(await KVNAME.get("hpp_talk_data"));var o=JSON.parse(await KVNAME.get("hpp_talk_id"));o++;const e=await t.json(),s={id:o,time:e.time,name:e.name,avatar:e.avatar,content:e.content};return n.push(s),await KVNAME.put("hpp_talk_data",JSON.stringify(n)),await KVNAME.put("hpp_talk_id",o),new Response("OK")}if("/hpp/admin/api/deltalk"==i){const n=JSON.parse(await KVNAME.get("hpp_talk_data")),e=Number(await t.text());for(c=0;c<getJsonLength(n);c++)Number(n[c].id)==e&&n.splice(c,1);return await KVNAME.put("hpp_talk_data",JSON.stringify(n)),new Response("OK")}if("/hpp/admin/api/update"==i){const t={body:await(await fetch("https://raw.githubusercontent.com/HexoPlusPlus/HexoPlusPlus/main/dist/index.js")).text(),method:"PUT",headers:{"content-type":"application/javascript","X-Auth-Key":j,"X-Auth-Email":$}},n=await(await fetch(`https://api.cloudflare.com/client/v4/accounts/${P}/workers/scripts/${k}`,t)).text();return new Response(JSON.parse(n).success)}if(i.startsWith("/hpp/admin/api/checkupdate")){const t=await(await fetch("https://raw.githubusercontent.com/HexoPlusPlus/HexoPlusPlus/main/update.js")).text();return new Response(t,{headers:{headers:"content-type: application/javascript; charset=utf-8"}})}if("/hpp/admin/dash"==i)return new Response(T,{headers:{"content-type":"text/html;charset=UTF-8"}})}}return Response.redirect("https://"+a+"/hpp/admin/dash",302)}if(i.startsWith("/hpp/api")){if("/hpp/api/getblogeractive"==i){const t=await KVNAME.get("hpp_activetime");var l=(Date.parse(new Date)-t)/1e3;return l<30?new Response("document.getElementById(\"bloggeractivetime\").innerHTML='博主刚刚还在这儿呢'",{headers:{headers:"content-type: application/javascript; charset=utf-8"}}):l<60?new Response('document.getElementById("bloggeractivetime").innerHTML=\'博主在'+l+"秒前离开这儿'",{headers:{headers:"content-type: application/javascript; charset=utf-8"}}):l<3600?new Response('document.getElementById("bloggeractivetime").innerHTML=\'博主在'+Math.round(l/60)+"分钟前偷偷瞄了一眼博客'",{headers:{headers:"content-type: application/javascript; charset=utf-8"}}):l<86400?new Response('document.getElementById("bloggeractivetime").innerHTML=\'博主在'+Math.round(l/3600)+"小时前活跃了一次'",{headers:{headers:"content-type: application/javascript; charset=utf-8"}}):new Response(t)}if("/hpp/api/captchaimg"==i){let t=new Request("https://thispersondoesnotexist.com/image");return fetch(t)}if("/hpp/api/gethpptalk"==i){const t=await KVNAME.get("hpp_talk_data");return new Response(t,{headers:{"content-type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}})}}return"/hpp/previewtalk"==i?new Response(hpp_talkhtml,{headers:{"content-type":"text/html;charset=UTF-8"}}):new Response(hpp_errorhtml,{headers:{"content-type":"text/html;charset=UTF-8"}})}addEventListener("fetch",(t=>{t.respondWith(handleRequest(t.request))})),function(t){"use strict";function n(t,n){var e=(65535&t)+(65535&n);return(t>>16)+(n>>16)+(e>>16)<<16|65535&e}function e(t,e,s,i,a,p){return n((r=n(n(e,t),n(i,p)))<<(c=a)|r>>>32-c,s);var r,c}function s(t,n,s,i,a,p,r){return e(n&s|~n&i,t,n,a,p,r)}function i(t,n,s,i,a,p,r){return e(n&i|s&~i,t,n,a,p,r)}function a(t,n,s,i,a,p,r){return e(n^s^i,t,n,a,p,r)}function p(t,n,s,i,a,p,r){return e(s^(n|~i),t,n,a,p,r)}function r(t,e){var r,c,o,l;t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;for(var d=1732584193,h=-271733879,u=-1732584194,m=271733878,g=0;g<t.length;g+=16)d=s(r=d,c=h,o=u,l=m,t[g],7,-680876936),m=s(m,d,h,u,t[g+1],12,-389564586),u=s(u,m,d,h,t[g+2],17,606105819),h=s(h,u,m,d,t[g+3],22,-1044525330),d=s(d,h,u,m,t[g+4],7,-176418897),m=s(m,d,h,u,t[g+5],12,1200080426),u=s(u,m,d,h,t[g+6],17,-1473231341),h=s(h,u,m,d,t[g+7],22,-45705983),d=s(d,h,u,m,t[g+8],7,1770035416),m=s(m,d,h,u,t[g+9],12,-1958414417),u=s(u,m,d,h,t[g+10],17,-42063),h=s(h,u,m,d,t[g+11],22,-1990404162),d=s(d,h,u,m,t[g+12],7,1804603682),m=s(m,d,h,u,t[g+13],12,-40341101),u=s(u,m,d,h,t[g+14],17,-1502002290),d=i(d,h=s(h,u,m,d,t[g+15],22,1236535329),u,m,t[g+1],5,-165796510),m=i(m,d,h,u,t[g+6],9,-1069501632),u=i(u,m,d,h,t[g+11],14,643717713),h=i(h,u,m,d,t[g],20,-373897302),d=i(d,h,u,m,t[g+5],5,-701558691),m=i(m,d,h,u,t[g+10],9,38016083),u=i(u,m,d,h,t[g+15],14,-660478335),h=i(h,u,m,d,t[g+4],20,-405537848),d=i(d,h,u,m,t[g+9],5,568446438),m=i(m,d,h,u,t[g+14],9,-1019803690),u=i(u,m,d,h,t[g+3],14,-187363961),h=i(h,u,m,d,t[g+8],20,1163531501),d=i(d,h,u,m,t[g+13],5,-1444681467),m=i(m,d,h,u,t[g+2],9,-51403784),u=i(u,m,d,h,t[g+7],14,1735328473),d=a(d,h=i(h,u,m,d,t[g+12],20,-1926607734),u,m,t[g+5],4,-378558),m=a(m,d,h,u,t[g+8],11,-2022574463),u=a(u,m,d,h,t[g+11],16,1839030562),h=a(h,u,m,d,t[g+14],23,-35309556),d=a(d,h,u,m,t[g+1],4,-1530992060),m=a(m,d,h,u,t[g+4],11,1272893353),u=a(u,m,d,h,t[g+7],16,-155497632),h=a(h,u,m,d,t[g+10],23,-1094730640),d=a(d,h,u,m,t[g+13],4,681279174),m=a(m,d,h,u,t[g],11,-358537222),u=a(u,m,d,h,t[g+3],16,-722521979),h=a(h,u,m,d,t[g+6],23,76029189),d=a(d,h,u,m,t[g+9],4,-640364487),m=a(m,d,h,u,t[g+12],11,-421815835),u=a(u,m,d,h,t[g+15],16,530742520),d=p(d,h=a(h,u,m,d,t[g+2],23,-995338651),u,m,t[g],6,-198630844),m=p(m,d,h,u,t[g+7],10,1126891415),u=p(u,m,d,h,t[g+14],15,-1416354905),h=p(h,u,m,d,t[g+5],21,-57434055),d=p(d,h,u,m,t[g+12],6,1700485571),m=p(m,d,h,u,t[g+3],10,-1894986606),u=p(u,m,d,h,t[g+10],15,-1051523),h=p(h,u,m,d,t[g+1],21,-2054922799),d=p(d,h,u,m,t[g+8],6,1873313359),m=p(m,d,h,u,t[g+15],10,-30611744),u=p(u,m,d,h,t[g+6],15,-1560198380),h=p(h,u,m,d,t[g+13],21,1309151649),d=p(d,h,u,m,t[g+4],6,-145523070),m=p(m,d,h,u,t[g+11],10,-1120210379),u=p(u,m,d,h,t[g+2],15,718787259),h=p(h,u,m,d,t[g+9],21,-343485551),d=n(d,r),h=n(h,c),u=n(u,o),m=n(m,l);return[d,h,u,m]}function c(t){for(var n="",e=32*t.length,s=0;s<e;s+=8)n+=String.fromCharCode(t[s>>5]>>>s%32&255);return n}function o(t){var n=[];for(n[(t.length>>2)-1]=void 0,s=0;s<n.length;s+=1)n[s]=0;for(var e=8*t.length,s=0;s<e;s+=8)n[s>>5]|=(255&t.charCodeAt(s/8))<<s%32;return n}function l(t){for(var n,e="0123456789abcdef",s="",i=0;i<t.length;i+=1)n=t.charCodeAt(i),s+=e.charAt(n>>>4&15)+e.charAt(15&n);return s}function d(t){return unescape(encodeURIComponent(t))}function h(t){return c(r(o(n=d(t)),8*n.length));var n}function u(t,n){return function(t,n){var e,s,i=o(t),a=[],p=[];for(a[15]=p[15]=void 0,16<i.length&&(i=r(i,8*t.length)),e=0;e<16;e+=1)a[e]=909522486^i[e],p[e]=1549556828^i[e];return s=r(a.concat(o(n)),512+8*n.length),c(r(p.concat(s),640))}(d(t),d(n))}function m(t,n,e){return n?e?u(n,t):l(u(n,t)):e?h(t):l(h(t))}"function"==typeof define&&define.amd?define((function(){return m})):"object"==typeof module&&module.exports?module.exports=m:t.md5=m}(this);