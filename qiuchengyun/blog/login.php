<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <link href="css/reset.css" rel="stylesheet" type="text/css">
    <title>登录</title>
</head>

<body>
    <div class="mask change"> 
        <div class="hack">
        <div class="box">
            <form class="input" action="login_validate.php" method="post">
                <input type="text" class="input" name="username" placeholder="请输入用户名"/>
                <input type="password" class="input" name="password" placeholder="请输入密码"/>
            <div class="logButton">
                 <input class="login" type="submit" value="登录"></input>
            </div>
            </form>
        </div>
        </div>  
    </div>    
</body>
</html>