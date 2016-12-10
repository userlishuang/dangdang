console.log('用户注册');
window.onload = function() {
    var userRegister = {
        init: function() {
            this.register();
            this.events();
        },
        register: function() {
            var that = this;
            var myform = document.getElementById('myform');
            myform.onsubmit = function() {
            	// 邮箱验证
            	var emailInput = document.querySelector('#email');
           	    var emailPrompt = document.querySelector('#email_prompt');
                var emailVal = emailInput.value;
                var reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
                if (!emailVal) {
                    emailInput.className = "register_input_Blur";
                    emailPrompt.className = 'register_prompt_error';
                    emailPrompt.innerHTML = '电子邮件是必填项，请输入您的email地址';
                    return false;
                }else if( emailVal && reg.test(emailVal) == false ){
                	emailInput.className = "register_input_Blur";
                	emailPrompt.className = 'register_prompt_error';
                    emailPrompt.innerHTML = '电子邮件格式不正确，请重新输入';
                    return false;
                }else{                	
                	emailInput.className = "register_input_Blur";
                	emailPrompt.className = "register_prompt_ok";
                	emailPrompt.innerHTML = '';
                };
                // 昵称验证
                var nickName = document.querySelector('#nickName');
            	var nickNamePrompt = document.querySelector('#nickName_prompt');
                var nickNameVal = nickName.value;
            	var reg1 = /([a-z0-9[^A-Za-z0-9_\n\t]]*)/;
            	if( !nickNameVal ){
            		nickName.className = "register_input_Blur";
            		nickNamePrompt.className = 'register_prompt_error';
                    nickNamePrompt.innerHTML = '昵称为必填项，请输入您的昵称';
                    return false
            	}else if( (nickNameVal && nickNameVal.trim().length < 4 ) || 
            		( nickNameVal && nickNameVal.trim().length > 20 ) || 
            		( nickNameVal && reg1.test(nickNameVal) == false ) ){
            		nickName.className = "register_input_Blur";
                	nickNamePrompt.className = 'register_prompt_error';
                    nickNamePrompt.innerHTML = '昵称格式错误，请用大小写英文字母、数字，长度4-20字符';
            		return false;
            	}else{
            		nickName.className = "register_input_Blur";
                	nickNamePrompt.className = "register_prompt_ok";
                	nickNamePrompt.innerHTML = '';
            	}
            	// 密码验证
            	var pwd = document.querySelector('#pwd');
            	var pwdPrompt = document.querySelector('#pwd_prompt');
            	var pwdVal = pwd.value;
            	var reg2 = /([a-z0-9[^A-Za-z0-9_\n\t]]*)/;
            	if( !pwdVal ){
            		pwd.className = "register_input_Blur";
            		pwdPrompt.className = 'register_prompt_error';
                    pwdPrompt.innerHTML = '密码为必填项，请设置您的密码';
                    return false;
            	}else if((pwdVal && pwdVal.trim().length < 6 ) || 
            		( pwdVal && pwdVal.trim().length > 20 ) || 
            		( pwdVal && reg2.test(pwdVal) == false ) ){
            		pwd.className = "register_input_Blur";
                	pwdPrompt.className = 'register_prompt_error';
                    pwdPrompt.innerHTML = '密码格式错误，请用大小写英文字母、数字，长度6-20字符';
            		return false;
            	}else{
            		pwd.className = "register_input_Blur";
                	pwdPrompt.className = "register_prompt_ok";
                	pwdPrompt.innerHTML = '';
            	}
            	// 二次密码验证
            	var repwd = document.querySelector('#repwd');
            	var repwdPrompt = document.querySelector('#repwd_prompt');
            	var pwdVal = repwd.value;
            	var repwdVal = repwd.value;
            	if( repwdVal != pwdVal ){
            		repwd.className = "register_input_Blur";
            		repwdPrompt.className = 'register_prompt_error';
                    repwdPrompt.innerHTML = '两次输入的密码不一致，请重新输入';
                    return false;
            	}else{
            		repwd.className = "register_input_Blur";
                	repwdPrompt.className = "register_prompt_ok";
                	repwdPrompt.innerHTML = '';
            	}
            	// 是否选择性别
            	var sexInput = document.querySelectorAll('.register_row input[type="radio"]:checked');
            	if( sexInput.length == 0 ){
            		return false;
            	}
            }
        },
        events: function() {
            /*emailInput.onfocus = function() {
                this.className = "register_input_Focus";
                emailPrompt.className = 'register_prompt';
                emailPrompt.innerHTML = '此邮箱将是您登录当当网的账号，并将用来接收验证信息';
            };*/
            // 处理input框的onfocus事件
            var promptList = document.querySelectorAll('.register_row div');
            var inputList = document.querySelectorAll('.register_input');
            var prompt = [
            	"此邮箱将是您登录当当网的账号，并将用来接收验证信息",
            	"昵称可由大小写英文字母、数字组成，长度为4-20个字符",
            	"密码可由大小写英文字母、数字组成，长度为6-20个字符",
            	""
            ]
            console.log(inputList);
            for( var i = 0; i < inputList.length; i++ ){
            	inputList[i].index = i;
            	inputList[i].onfocus = function(){
            		var index = this.index;
            		this.className = "register_input_Focus";
            		promptList[index].className = 'register_prompt';
            		promptList[index].innerHTML = prompt[index];
            	}
            }
            // 邮箱onblur事件
            var emailInput = document.querySelector('#email');
            var emailPrompt = document.querySelector('#email_prompt');
            emailInput.onblur = function() {
            	var emailVal = emailInput.value;
            	var flag = true;
                var reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
                if (!emailVal) {
                    this.className = "register_input_Blur";
                    emailPrompt.className = 'register_prompt_error';
                    emailPrompt.innerHTML = '电子邮件是必填项，请输入您的email地址';
                    flag = false;
                }else if( emailVal && reg.test(emailVal) == false ){
                	this.className = "register_input_Blur";
                	emailPrompt.className = 'register_prompt_error';
                    emailPrompt.innerHTML = '电子邮件格式不正确，请重新输入';
                    flag = false;
                }else{                	
                	this.className = "register_input_Blur";
                	emailPrompt.className = "register_prompt_ok";
                	emailPrompt.innerHTML = '';
                	flag = true;
                }
                return flag;
            };
            // 昵称onblur事件
            var nickName = document.querySelector('#nickName');
            var nickNamePrompt = document.querySelector('#nickName_prompt');
            nickName.onblur = function(){
            	var nickNameVal = nickName.value;
            	var reg1 = /([a-z0-9[^A-Za-z0-9_\n\t]]*)/;
            	if( !nickNameVal ){
            		this.className = "register_input_Blur";
            		nickNamePrompt.className = 'register_prompt_error';
                    nickNamePrompt.innerHTML = '昵称为必填项，请输入您的昵称';
            	}else if( (nickNameVal && nickNameVal.trim().length < 4 ) || 
            		( nickNameVal && nickNameVal.trim().length > 20 ) || 
            		( nickNameVal && reg1.test(nickNameVal) == false ) ){
            		this.className = "register_input_Blur";
                	nickNamePrompt.className = 'register_prompt_error';
                    nickNamePrompt.innerHTML = '昵称格式错误，请用大小写英文字母、数字，长度4-20字符';
            	}else{
            		this.className = "register_input_Blur";
                	nickNamePrompt.className = "register_prompt_ok";
                	nickNamePrompt.innerHTML = '';
            	}
            };
            // 密码onblur事件
            var pwd = document.querySelector('#pwd');
            var pwdPrompt = document.querySelector('#pwd_prompt');
            pwd.onblur = function(){
            	var pwdVal = pwd.value;
            	var reg2 = /([a-z0-9[^A-Za-z0-9_\n\t]]*)/;
            	if( !pwdVal ){
            		this.className = "register_input_Blur";
            		pwdPrompt.className = 'register_prompt_error';
                    pwdPrompt.innerHTML = '密码为必填项，请设置您的密码';
            	}else if((pwdVal && pwdVal.trim().length < 6 ) || 
            		( pwdVal && pwdVal.trim().length > 20 ) || 
            		( pwdVal && reg2.test(pwdVal) == false ) ){
            		this.className = "register_input_Blur";
                	pwdPrompt.className = 'register_prompt_error';
                    pwdPrompt.innerHTML = '密码格式错误，请用大小写英文字母、数字，长度6-20字符';
            	}else{
            		this.className = "register_input_Blur";
                	pwdPrompt.className = "register_prompt_ok";
                	pwdPrompt.innerHTML = '';
            	}
            };
            // 再次确认密码
            var repwd = document.querySelector('#repwd');
            var repwdPrompt = document.querySelector('#repwd_prompt');
            repwd.onblur = function(){
            	var pwdVal = repwd.value;
            	var repwdVal = repwd.value;
            	if( repwdVal != pwdVal ){
            		this.className = "register_input_Blur";
            		repwdPrompt.className = 'register_prompt_error';
                    repwdPrompt.innerHTML = '两次输入的密码不一致，请重新输入';
            	}else{
            		this.className = "register_input_Blur";
                	repwdPrompt.className = "register_prompt_ok";
                	repwdPrompt.innerHTML = '';
            	}
            }
        },
        // 处理email
        dealEmail: function() {


            // input 获取焦点

            if (!emailVal) {

            }
        }
    }
    userRegister.init();
}
