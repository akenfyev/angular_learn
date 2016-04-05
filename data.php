<?php
/* header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Request-Headers: Accept, X-Requested-With');
header('Access-Control-Allow-Credentials: true'); 
header('Content-Type: application/json'); */
//$data="[{title:'Внимание новость!',text:'kl sdf klsdf sdlsdklf sdklfh sdklfh skld '},{title:' новость2',text:'текст второй новости'}]";
//$data="{title:'Внимание новость!',text:'kl sdf klsdf sdlsdklf sdklfh sdklfh skld '}";
/* echo json_encode(array(
					array('title'=>'Внимание новость!','text'=>'kl sdf klsdf sdlsdklf sdklfh sdklfh skld '),
					array('title'=>' новость2','text'=>'текст второй новости')
					));  */
//echo $data;

//echo "SFSDFDS.".$_SERVER['REQUEST_METHOD'];
//echo"asdad";
//$data = file_get_contents("php://input");
//$data = json_decode(file_get_contents("php://input"));

header('Content-Type: application/json');

class handler
{
	function _post()
	{
		$fp=fopen("data/text/text.dat","a");
		fputs($fp,'{"title":"'.$_POST['title'].'","desc":"'.$_POST['desc'].'","image":"'.$_FILES['file']['name'].'"}');
		fclose($fp);
		
		move_uploaded_file($_FILES['file']['tmp_name'],"data/images/".$_FILES['file']['name']);
	}
	
	function _get()
	{
		if(!file_exists("data/text/text.dat"))touch("data/text/text.dat");
		$fp=fopen("data/text/text.dat","r");
		echo"[";
		while($str=fgets($fp))
		{
			echo $zpt.$str;
			$zpt=",";
		}
		echo"]";
		fclose($fp);		
	}

	public function router($method)
	{
		switch($method)
		{
			case"POST":
				$this->_post();
			break;
			
			case"GET":
				$this->_get();
			break;
		}
		
		
	}
	
	
} 

$h=new handler();
$h->router($_SERVER['REQUEST_METHOD']);
?>