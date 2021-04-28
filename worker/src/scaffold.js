export async function getCookie(request, name) {
    let result = ""
    const cookieString = request.headers.get("Cookie")
    if (cookieString) {
        const cookies = cookieString.split(";")
        cookies.forEach(cookie => {
            const cookiePair = cookie.split("=", 2)
            const cookieName = cookiePair[0].trim()
            if (cookieName === name) {
                const cookieVal = cookiePair[1]
                result = cookieVal
            }
        })
    }
    return result
}

export function getJsonLength(jsonData) {

    var jsonLength = 0;

    for (var item in jsonData) {

        jsonLength++;

    }

    return jsonLength;
}

export function rp(path) {
    return path.split('?')[0]
}

export async function get_config(){
    
    const hpp_config = await KVNAME.get("hpp_config")
    const config = JSON.parse(JSON.parse(hpp_config)) || {}
    const hpp_domain = config["hpp_domain"]
    const hpp_userimage = config["hpp_userimage"]
    const hpp_title = config["hpp_title"]
    const hpp_usericon = config["hpp_usericon"]
    const hpp_cors = config["hpp_cors"]
    const hpp_githubdoctoken = config["hpp_githubdoctoken"]

    const hpp_githubdocusername = config["hpp_githubdocusername"]
    const hpp_githubdocrepo = config["hpp_githubdocrepo"]
    const hpp_githubdocroot = config["hpp_githubdocroot"]
    const hpp_githubdocbranch = config["hpp_githubdocbranch"]

    const hpp_githubpage = config["hpp_githubpage"]
    const hpp_githubpagetoken = config["hpp_githubpagetoken"]
    const hpp_githubpageusername = config["hpp_githubpageusername"]
    const hpp_githubpagerepo = config["hpp_githubpagerepo"]
    const hpp_githubpageroot = config["hpp_githubpageroot"]
    const hpp_githubpagebranch = config["hpp_githubpagebranch"]

    const hpp_img = config["hpp_img"] || "false"

    const hpp_ownimgurl = config["hpp_ownimgurl"]
    const hpp_ownimgname = config["hpp_ownimgname"]
    const hpp_ownimgjsonpath = config["hpp_ownimgjsonpath"]
    const hpp_ownimgheader = config["hpp_ownimgheader"]
    const hpp_ownimgmethod = config["hpp_ownimgmethod"]

    const hpp_githubimagetoken = config["hpp_githubimagetoken"]
    const hpp_githubimageusername = config["hpp_githubimageusername"]
    const hpp_githubimagerepo = config["hpp_githubimagerepo"]
    const hpp_githubimagepath = config["hpp_githubimagepath"]
    const hpp_githubimagebranch = config["hpp_githubimagebranch"]

    const hpp_autodate = config["hpp_autodate"]
    const hpp_account_identifier = config["hpp_account_identifier"]
    const hpp_script_name = config["hpp_script_name"]
    const hpp_CF_Auth_Key = config["hpp_CF_Auth_Key"]
    const hpp_Auth_Email = config["hpp_Auth_Email"]
    const hpp_twikoo_envId = config["hpp_twikoo-envId"]
    const hpp_twikoo = config["hpp_twikoo"] || "false"
    const hpp_OwO = config["hpp_OwO"]
    const hpp_back = config["hpp_back"]
    const hpp_lazy_img = config["hpp_lazy_img"]
    const hpp_highlight_style = config["hpp_highlight_style"]
    const hpp_plugin_js = config["hpp_plugin_js"]
    const hpp_plugin_css = config["hpp_plugin_css"]
    const hpp_githubdocpath = hpp_githubdocroot + "source/_posts/"
    const hpp_githubdocdraftpath = hpp_githubdocroot + "source/_drafts/"
    const githubdocdraftpath = encodeURI(hpp_githubdocdraftpath)
    const githubdocpath = encodeURI(hpp_githubdocpath)
    const githubimagepath = encodeURI(hpp_githubimagepath)
    const hpp_color = config["hpp_color"] || "rose"
    const hpp_bg_color = config["hpp_bg_color"] || "white"
    const hpp_theme_mode = config["hpp_theme_mode"] || "light"
    const hpp_page_limit = config["hpp_page_limit"] || "10"
}