<?php
header("Content-type:text/html;charset=utf-8");
$user_name = $_POST["username"];
$pass_word = $_POST["password"];
if ($con = mysql_connect("115.156.216.95", "lidasong", "123")) {
    if ($db_selected = mysql_select_db('db_elwg_fe_study', $con)) {
        if ($result = mysql_query("SELECT * FROM table_user WHERE username='lidasong'",$con)) {
              $row = mysql_fetch_array($result, MYSQL_ASSOC);
        }
    }else{
      die('连接失败!' . mysql_error());
    }
}else{
    die('连接失败!' . mysql_error());
}
if ($row["username"] == $user_name && $row["password"] == $pass_word) {
    printf( "username:%s password:%s",$row["username"],$row["password"]);
    setcookie("username", "lidasong", time() + 3600);
    setcookie("password", "elwg", time() + 3600);
    echo '<meta http-equiv="refresh" content="0;url=index.php" />';
} else {
    echo '<meta http-equiv="refresh" content="0;url=login.php" />';
}
mysql_close($con);
?>
