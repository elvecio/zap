<?php
namespace Zotlabs\Module;

require_once('include/attach.php');
require_once('include/channel.php');
require_once('include/photos.php');


class Wall_attach extends \Zotlabs\Web\Controller {

	function post() {
	
		$using_api = false;
	
		if($_REQUEST['api_source'] && array_key_exists('media',$_FILES)) {
			$using_api = true;
		}

		if($using_api) {
			require_once('include/api.php');
			if(api_user())
				$channel = channelx_by_n(api_user());
		}
		else {
			if(argc() > 1)
				$channel = channelx_by_nick(argv(1));
		}

		if(! $channel)
			killme();
	
		$observer = \App::get_observer();
	
	
		$def_album  = get_pconfig($channel['channel_id'],'system','photo_path');
		$def_attach = get_pconfig($channel['channel_id'],'system','attach_path');
	
		$r = attach_store($channel,(($observer) ? $observer['xchan_hash'] : ''),'', array('source' => 'editor', 'visible' => 0, 'album' => $def_album, 'directory' => $def_attach, 'allow_cid' => '<' . $channel['channel_hash'] . '>'));
	
		if(! $r['success']) {
			notice( $r['message'] . EOL);
			killme();
		}
	
		if(intval($r['data']['is_photo'])) {
			$s = "\n\n" . $r['body'] . "\n\n";
		}
		else {
			$s =  "\n\n" . '[attachment]' . $r['data']['hash'] . ',' . $r['data']['revision'] . '[/attachment]' . "\n";
		}
	
		if($using_api)
			return $s;
	
		echo $s;
		killme();
	
	}
	
}
