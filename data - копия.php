<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Request-Headers: Accept, X-Requested-With');
header('Access-Control-Allow-Credentials: true');
//header('Content-Type: application/json');
//$data="[{title:'Внимание новость!',text:'kl sdf klsdf sdlsdklf sdklfh sdklfh skld '},{title:' новость2',text:'текст второй новости'}]";
//$data="{title:'Внимание новость!',text:'kl sdf klsdf sdlsdklf sdklfh sdklfh skld '}";
echo json_encode(array(
					array('title'=>'Внимание новость!','text'=>'kl sdf klsdf sdlsdklf sdklfh sdklfh skld '),
					array('title'=>' новость2','text'=>'текст второй новости')
					));
//echo $data;
?>