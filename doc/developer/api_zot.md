Zot API
=======

The API endpoints detailed below are relative to `api/z/1.0`, meaning that if an 
API is listed as `channel/stream` the full API URL is 
`[baseurl]/api/z/1.0/channel/stream`

channel/export/basic
================================================================================

Export channel data


channel/stream
================================================================================

Fetch conversation items 


files
================================================================================

List file storage

filemeta
================================================================================
Export file metadata for any uploaded file


filedata
================================================================================

Export file contents for any uploaded file


file/export
================================================================================

file
================================================================================

albums
================================================================================

List photo albums


photos
================================================================================

list photo metadata


photo
================================================================================


group
================================================================================

`GET /api/z/1.0/group`

Description: list privacy groups

Returns: DB tables of all privacy groups. 

To use with API group_members, provide either 'group_id' from the id element returned in this call, or 'group_name' from the gname returned in this call.


	[
	
	    {
	        "id": "1",
	        "hash": "966c946394f3e2627bbb8a55026b5725e582407098415c02f85232de3f3fde76Friends",
	        "uid": "2",
	        "visible": "0",
	        "deleted": "0",
	        "gname": "Friends"
	    },
	    {
	        "id": "2",
	        "hash": "852ebc17f8c3ed4866f2162e384ded0f9b9d1048f93822c0c84196745f6eec66Family",
	        "uid": "2",
	        "visible": "1",
	        "deleted": "0",
	        "gname": "Family"
	    },
	    {
	        "id": "3",
	        "hash": "cc3cb5a7f9818effd7c7c80a58b09a189b62efa698a74319117babe33ee30ab9Co-workers",
	        "uid": "2",
	        "visible": "0",
	        "deleted": "0",
	        "gname": "Co-workers"
	    }
	]

group_members
================================================================================

`GET /api/z/1.0/group_members`

Required:

group_id or group_name


Returns:

group_member+abook+xchan (DB join) for each member of the privacy group 


	[
	
	    {
	        "id": "1",
	        "uid": "2",
	        "gid": "1",
	        "xchan": "pgcJx1IQjuPkx8aI9qheJlBMZzJz-oTPjHy3h5pWlOVOriBO_cSiUhhqwhuZ74TYJ8_ECO3pPiRMWC0q8YPCQg",
	        "abook_id": "2",
	        "abook_account": "1",
	        "abook_channel": "2",
	        "abook_xchan": "pgcJx1IQjuPkx8aI9qheJlBMZzJz-oTPjHy3h5pWlOVOriBO_cSiUhhqwhuZ74TYJ8_ECO3pPiRMWC0q8YPCQg",
	        "abook_my_perms": "218555",
	        "abook_their_perms": "0",
	        "abook_closeness": "0",
	        "abook_created": "2016-01-02 21:16:26",
	        "abook_updated": "2016-01-02 21:16:26",
	        "abook_connected": "0000-00-00 00:00:00",
	        "abook_dob": "0000-00-00 00:00:00",
	        "abook_flags": "0",
	        "abook_blocked": "0",
	        "abook_ignored": "0",
	        "abook_hidden": "0",
	        "abook_archived": "0",
	        "abook_pending": "0",
	        "abook_unconnected": "0",
	        "abook_self": "1",
	        "abook_feed": "0",
	        "abook_profile": "",
	        "abook_incl": "",
	        "abook_excl": "",
	        "abook_instance": "",
	        "xchan_hash": "pgcJx1IQjuPkx8aI9qheJlBMZzJz-oTPjHy3h5pWlOVOriBO_cSiUhhqwhuZ74TYJ8_ECO3pPiRMWC0q8YPCQg",
	        "xchan_guid": "lql-1VnxtiO4-WF0h72wLX1Fu8szzHDOXgQaTbELwXW77k8AKFfh-hYr70vqMrc3SSvWN-Flrc5HFhRTWB7ICw",
	        "xchan_guid_sig": "PafvEL0VpKfxATxlCqDjfOeSIMdmpr3iU7X-Sysa1h5LzDpjSXsjO37tYZL-accb1M5itLlfnW5epkTa5I4flsW21zSY1A2jCuBQUTLLGV7rNyyBy7lgqJUFvAMRx0TfXzP9lcaPqlM9T1tA6jfWOsOmkdzwofGeXBnsjGfjsO2xdGYe6vwjOU0DSavukvzDMnOayB9DekpvDnaNBTxeGLM45Skzr7ZEMcNF7TeXMbnvpfLaALYEKeQs9bGH-UgAG8fBWgzVAzeBfx_XSR1rdixjyiZGP0kq0h35SlmMPcEjliodOBFwMXqpXFB7Ibp4F6o6te2p2ErViJccQVG8VNKB6SbKNXY6bhP5zVcVsJ-vR-p4xXoYJJvzTN7yTDsGAXHOLF4ZrXbo5yi5gFAlIrTLAF2EdWQwxSGyLRWKxG8PrDkzEzX6cJJ0VRcLh5z6OI5QqQNdeghPZbshMFMJSc_ApCPi9_hI4ZfctCIOi3T6bdgTNKryLm5fhy_eqjwLAZTGP-aUBgLZpb1mf2UojBn6Ey9cCyq-0T2RWyk-FcIcbV4qJ-p_8oODqw13Qs5FYkjLr1bGBq82SuolkYrXEwQClxnrfKa4KYc2_eHAXPL01iS9zVnI1ySOCNJshB97Odpooc4wk7Nb2Fo-Q6THU9zuu0uK_-JbK7IIl6go2qA",
	        "xchan_pubkey": "-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA18JB76lyP4zzL/y7BCej\neJnfZIWZNtM3MZvI1zEVMWmmwOS+u/yH8oPwyaDk4Y/tnj8GzMPj1lCGVRcd8EJa\nNrCMd50HODA5EsJtxpsOzRcILYjOcTtIAG1K4LtKqELi9ICAaFp0fNfa+Jf0eCek\nvPusx2/ORhy+o23hFoSMhL86o2gmaiRnmnA3Vz4ZMG92ieJEDMXt9IA1EkIqS4y5\nBPZfVPLD1pv8iivj+dtN1XjwplgjUbtxmU0/Ej808nHppscRIqx/XJ0XZU90oNGw\n/wYoK2EzJlPbRsAkwNqoFrAYlr5HPpn4BJ2ebFYQgWBUraD7HwS5atsQEaxGfO21\nlUP0+lDg9t3CXvudDj0UG1jiEKbVIGA+4aG0GN2DSC5AyRq/GRxqyay5W2vQbAZH\nyvxPGrZFO24I65g3pjhpjEsLqZ4ilTLQoLMs0drCIcRm5RxMUo4s/LMg16lT4cEk\n1qRtk2X0Sb1AMQQ2uRXiVtWz77QHMONEYkf6OW4SHbwcv5umvlv69NYEGfCcbgq0\nAV7U4/BWztUz/SWj4r194CG43I9I8dmaEx9CFA/XMePIAXQUuABfe1QMOR6IxLpq\nTHG1peZgHQKeGz4aSGrhQkZNNoOVNaZoIfcvopxcHDTZLigseEIaPPha4WFYoKPi\nUPbZ5o8gTLc750uzrnb2jwcCAwEAAQ==\n-----END PUBLIC KEY-----\n",
	        "xchan_photo_mimetype": "image/png",
	        "xchan_photo_l": "https://xyz.macgirvin.com/photo/profile/l/2",
	        "xchan_photo_m": "https://xyz.macgirvin.com/photo/profile/m/2",
	        "xchan_photo_s": "https://xyz.macgirvin.com/photo/profile/s/2",
	        "xchan_addr": "teller@xyz.macgirvin.com",
	        "xchan_url": "https://xyz.macgirvin.com/channel/teller",
	        "xchan_connurl": "https://xyz.macgirvin.com/poco/teller",
	        "xchan_follow": "https://xyz.macgirvin.com/follow?f=&url=%s",
	        "xchan_connpage": "",
	        "xchan_name": "Teller",
	        "xchan_network": "zot",
	        "xchan_instance_url": "",
	        "xchan_flags": "0",
	        "xchan_photo_date": "2016-10-19 01:26:50",
	        "xchan_name_date": "2016-01-02 21:16:26",
	        "xchan_hidden": "0",
	        "xchan_orphan": "0",
	        "xchan_censored": "0",
	        "xchan_selfcensored": "0",
	        "xchan_system": "0",
	        "xchan_pubforum": "0",
	        "xchan_deleted": "0"
	    },
	    {
	        "id": "12",
	        "uid": "2",
	        "gid": "1",
	        "xchan": "xuSMUYxw1djBB97qXsbrBN1nzJH_gFwQL6pS4zIy8fuusOfBxNlMiVb4h_q5tOEvpE7tYf1EsryjNciMuPIj5w",
	        "abook_id": "24",
	        "abook_account": "1",
	        "abook_channel": "2",
	        "abook_xchan": "xuSMUYxw1djBB97qXsbrBN1nzJH_gFwQL6pS4zIy8fuusOfBxNlMiVb4h_q5tOEvpE7tYf1EsryjNciMuPIj5w",
	        "abook_my_perms": "218555",
	        "abook_their_perms": "218555",
	        "abook_closeness": "80",
	        "abook_created": "2016-01-27 00:48:43",
	        "abook_updated": "2016-12-04 17:16:58",
	        "abook_connected": "2016-12-04 17:16:58",
	        "abook_dob": "0001-01-01 00:00:00",
	        "abook_flags": "0",
	        "abook_blocked": "0",
	        "abook_ignored": "0",
	        "abook_hidden": "0",
	        "abook_archived": "0",
	        "abook_pending": "0",
	        "abook_unconnected": "0",
	        "abook_self": "0",
	        "abook_feed": "0",
	        "abook_profile": "debb5236efb1626cfbad33ccb49892801e5f844aa04bf81f580cfa7d13204819",
	        "abook_incl": "",
	        "abook_excl": "",
	        "abook_instance": "",
	        "xchan_hash": "xuSMUYxw1djBB97qXsbrBN1nzJH_gFwQL6pS4zIy8fuusOfBxNlMiVb4h_q5tOEvpE7tYf1EsryjNciMuPIj5w",
	        "xchan_guid": "d5EMLlt1tHHZ0dANoA7B5Wq9UgXoWcFS9-gXOkL_AAejcPApoQRyxfHTuu8DoTbUaO-bYmX5HPuWuK9PHyqNmA",
	        "xchan_guid_sig": "CVWEMRPtzI1YcHfnnWHTuv3H964OAmSElgUfxMoX6RdQdxNpqb_POirpVuyP8s3W17mVCfO5V9IAjkg5iKcqCk6YcvOD_egmMy-AnM9TC1kKndQHw55CunD82Q8K_xBNSXkSROizcNkKh9DVLjJPFjW1AqtI4njkZ3EMgrWqnbFRM1qPToUoCY9zM3tEMHoAD9YX1zP90wl40LzfN-dtcNWpSBbiz9owou62uzLbN7mrCwKOMlXLjwwGswRnxIsEnb3O-FXOs8hs0mArKe9snq1-BKeD16LyzxgwlpVLElzIJZGEZGtMdIJgeRzKuBvPjsOIpQ1yAkuOpFJ3nGCM-IPOIIjAmyVl5zD3xPVcxxpZlJRn5fG1Y-gnqTgsrEQCA7M6XPWQdrdHU4akZfyUyFJDhv3uM-jon9VzrYTBw68R0WA-1Z8WafEHA4qh5OWAj85lUarwhr7iTiEckH51ypPCPs6VbT6Pw7yMaxfjFOcipashQagx0tfOlDhE5dQANOXKASFtH1J9-CZY2MQdLPQ6u54d5whuHKMGaJ0V68pnmZ2rOn7g344Ah2WCJrm17jj60QsRMorqRFj7GMdPIA1XB8Wrk88MuYOe3Dhyuu6ZWKI7YTWJS690ZVkKUqAiNHqj0W86DtaiPUc_mmGR0fHl4Gksnko3WmCFv9q2X2E",
	        "xchan_pubkey": "-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAoj2xCJktBA8Ww7Hp+ZNL\nrNuQpo8UB/bfvRkIy+yua3xpF1TuXcnAH61kyRz8vXgOu/l2CyxQbIoaGslCV5Sy\n8JKeNXe+IilUdSSEjMIwCPfSPsYnMHsSnHWmPmclvJwEtQUKOZmW5mMuVBvXy7D2\njomFwc69AYphdyys6eQ7Dcn6+FRBiQbyMprZ5lxyVW+O4DuXVNa3ej2ebx0gCJZ4\ntTIlBoKwEey91dY+FyKVFjdwfNczpmL7LgmZXqcVx+MG3mYgibwdVMiXVj5X06cs\nV9hJ5Xi+Aklsv/UWJtjw9FVt7y9TLptnhh4Ra6T/MDmnBBIAkOR7P/X8cRv078MT\nl0IMsP0RJcDEtTLtwHFVtDs6p52KDFqclKWbqmxmxqV3OTPVYtArRGIzgnJi/5ur\nHRr5G6Cif7QY3UowsIOf78Qvy28LwSbdymgBAWwPPKIviXWxGO+9kMWdmPSUQrWy\nK0+7YA9P9fBUFfn9Hc+p8SJQmQ6OAqLwrDGiPSOlGaNrbEqwqLGgIpXwK+lEFcFJ\n3SPOjJRWdR2whlMxvpwX+39+H7dWN3vSa3Al4/Sq7qW8yW2rYwf+eGyp4Z0lRR+8\nJxFMCwZkSw5g14YdlikAPojv5V1c6KuA5ieg8G1hwyONV7A4JHPyEdPt0W0TZi6C\nCOVkPaC3xGrguETZpJfVpwUCAwEAAQ==\n-----END PUBLIC KEY-----\n",
	        "xchan_photo_mimetype": "image/png",
	        "xchan_photo_l": "https://xyz.macgirvin.com/photo/9da63aa910ea14e1501ee1a749d181a6-4",
	        "xchan_photo_m": "https://xyz.macgirvin.com/photo/9da63aa910ea14e1501ee1a749d181a6-5",
	        "xchan_photo_s": "https://xyz.macgirvin.com/photo/9da63aa910ea14e1501ee1a749d181a6-6",
	        "xchan_addr": "cloner@xyz.macgirvin.com",
	        "xchan_url": "http://abc.macgirvin.com/channel/cloner",
	        "xchan_connurl": "http://abc.macgirvin.com/poco/cloner",
	        "xchan_follow": "https://xyz.macgirvin.com/follow?f=&url=%s",
	        "xchan_connpage": "",
	        "xchan_name": "Karen",
	        "xchan_network": "zot",
	        "xchan_instance_url": "",
	        "xchan_flags": "0",
	        "xchan_photo_date": "2016-03-31 19:59:20",
	        "xchan_name_date": "2016-01-26 23:23:42",
	        "xchan_hidden": "0",
	        "xchan_orphan": "0",
	        "xchan_censored": "0",
	        "xchan_selfcensored": "0",
	        "xchan_system": "0",
	        "xchan_pubforum": "0",
	        "xchan_deleted": "0"
	    }

	]


xchan
================================================================================

An xchan is a global location independent channel and is the primary record for a network 
identity. It may refer to channels on other websites, networks, or services. 

`GET /api/z/1.0/xchan`

Required: one of [ address, hash, guid ] as GET parameters

Returns a portable xchan structure

Example: https://xyz.macgirvin.com/api/z/1.0/xchan?f=&address=mike@macgirvin.com

Returns:

	{
		"hash": "jr54M_y2l5NgHX5wBvP0KqWcAHuW23p1ld-6Vn63_pGTZklrI36LF8vUHMSKJMD8xzzkz7s2xxCx4-BOLNPaVA",
		"guid": "sebQ-IC4rmFn9d9iu17m4BXO-kHuNutWo2ySjeV2SIW1LzksUkss12xVo3m3fykYxN5HMcc7gUZVYv26asx-Pg",
		"guid_sig": "Llenlbl4zHo6-g4sa63MlQmTP5dRCrsPmXHHFmoCHG63BLq5CUZJRLS1vRrrr_MNxr7zob_Ykt_m5xPKe5H0_i4pDj-UdP8dPZqH2fqhhx00kuYL4YUMJ8gRr5eO17vsZQ3XxTcyKewtgeW0j7ytwMp6-hFVUx_Cq08MrXas429ZrjzaEwgTfxGnbgeQYQ0R5EXpHpEmoERnZx77VaEahftmdjAUx9R4YKAp13pGYadJOX5xnLfqofHQD8DyRHWeMJ4G1OfWPSOlXfRayrV_jhnFlZjMU7vOdQwHoCMoR5TFsRsHuzd-qepbvo3pzvQZRWnTNu6oPucgbf94p13QbalYRpBXKOxdTXJrGdESNhGvhtaZnpT9c1QVqC46jdfP0LOX2xrVdbvvG2JMWFv7XJUVjLSk_yjzY6or2VD4V6ztYcjpCi9d_WoNHruoxro_br1YO3KatySxJs-LQ7SOkQI60FpysfbphNyvYMkotwUFI59G08IGKTMu3-GPnV1wp7NOQD1yzJbGGEGSEEysmEP0SO9vnN45kp3MiqbffBGc1r4_YM4e7DPmqOGM94qksOcLOJk1HNESw2dQYWxWQTBXPfOJT6jW9_crGLMEOsZ3Jcss0XS9KzBUA2p_9osvvhUKuKXbNztqH0oZIWlg37FEVsDs_hUwUJpv2Ar09k4",
		"pubkey": "-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA7QCwvuEIwCHjhjbpz3Oc\ntyei/Pz9nDksNbsc44Cm8jxYGMXsTPFXDZYCcCB5rcAhPPdZSlzaPkv4vPVcMIrw\n5cdX0tvbwa3rNTng6uFE7qkt15D3YCTkwF0Y9FVZiZ2Ko+G23QeBt9wqb9dlDN1d\nuPmu9BLYXIT/JXoBwf0vjIPFM9WBi5W/EHGaiuqw7lt0qI7zDGw77yO5yehKE4cu\n7dt3SakrXphL70LGiZh2XGoLg9Gmpz98t+gvPAUEotAJxIUqnoiTA8jlxoiQjeRK\nHlJkwMOGmRNPS33awPos0kcSxAywuBbh2X3aSqUMjcbE4cGJ++/13zoa6RUZRObC\nZnaLYJxqYBh13/N8SfH7d005hecDxWnoYXeYuuMeT3a2hV0J84ztkJX5OoxIwk7S\nWmvBq4+m66usn6LNL+p5IAcs93KbvOxxrjtQrzohBXc6+elfLVSQ1Rr9g5xbgpub\npSc+hvzbB6p0tleDRzwAy9X16NI4DYiTj4nkmVjigNo9v2VPnAle5zSam86eiYLO\nt2u9YRqysMLPKevNdj3CIvst+BaGGQONlQalRdIcq8Lin+BhuX+1TBgqyav4XD9K\nd+JHMb1aBk/rFLI9/f2S3BJ1XqpbjXz7AbYlaCwKiJ836+HS8PmLKxwVOnpLMbfH\nPYM8k83Lip4bEKIyAuf02qkCAwEAAQ==\n-----END PUBLIC KEY-----\n",
		"photo_mimetype": "image/jpeg",
		"photo_l": "https://xyz.macgirvin.com/photo/350b74555c04429148f2e12775f6c403-4",
		"photo_m": "https://xyz.macgirvin.com/photo/350b74555c04429148f2e12775f6c403-5",
		"photo_s": "https://xyz.macgirvin.com/photo/350b74555c04429148f2e12775f6c403-6",
		"address": "mike@macgirvin.com",
		"url": "https://macgirvin.com/channel/mike",
		"connurl": "https://macgirvin.com/poco/mike",
		"follow": "https://macgirvin.com/follow?f=&url=%s",
		"connpage": "https://macgirvin.com/connect/mike",
		"name": "Mike Macgirvin",
		"network": "zot",
		"instance_url": "",
		"flags": "0",
		"photo_date": "2012-12-06 05:06:11",
		"name_date": "2012-12-06 04:59:13",
		"hidden": "1",
		"orphan": "0",
		"censored": "0",
		"selfcensored": "0",
		"system": "0",
		"pubforum": "0",
		"deleted": "0"
	}

item/update
================================================================================

Create or update an item (post, activity, webpage, etc.)

Usage: `POST /api/z/1.0/item/update`

Description: item/update posts an item (typically a conversation item or post, but can be any item) using form input.  


Required:

- body

	text/bbcode contents by default.


Optional:

- $_FILES['media']

	uploaded media file to include with post

- title

	title of post/item

- contact_allow

	array of xchan.xchan_hash allowed to view this item

- group_allow

	array of group.hash allowed to view this item

- contact_deny

	array of xchan.xchan_hash not allowed to view this item

- group_deny

	array of group.hash not allowed to view this item

- coord

	geographic coordinates

- location

	freefrom location

- expire

	datetime this post will expire or be removed

- mimetype

	mimetype if not text/bbcode

- parent

	item.id of parent to this post (makes it a comment)

- parent_mid

	alternate form of parent using message_id

- remote_xchan

	xchan.xchan_hash of this message author if not the channel owner

- consensus

	boolean set to true if this is a consensus or voting item (default false)

- nocomment

	boolean set to true if comments are to be disabled (default false)

- origin

	do not use this without reading the code

- namespace

	persistent identity for a remote network or service

- remote_id

	message_id of this resource on a remote network or service

- message_id

	message_id of this item (leave unset to generate one)

- created

	datetime of message creation

- post_id

	existing item.id if this is an edit operation

- app

	application or network name to display with item

- categories

	comma separated categories for this item

- webpage

	item.page_type if not 0

- pagetitle

	for webpage and design elements, the 'page name'

- layout_mid

	item.mid of layout for this design element

- plink

	permalink for this item if different than the default

- verb

	activitystream verb for this item/activity

- obj_type

	activitystream object type for this item/activity



Example: 

    curl -u mychannel:mypassword https://xyz.macgirvin.com/api/z/1.0/item/update -d body="hello world"


Returns:


    {

        "success": true,
        "item_id": "2245",
        "item": {
            "id": "2245",
            "mid": "14135cdecf6b8e3891224e4391748722114da6668eebbcb56fe4667b60b88249@xyz.macgirvin.com",
            "aid": "1",
            "uid": "2",
            "parent": "2245",
            "parent_mid": "14135cdecf6b8e3891224e4391748722114da6668eebbcb56fe4667b60b88249@xyz.macgirvin.com",
            "thr_parent": "14135cdecf6b8e3891224e4391748722114da6668eebbcb56fe4667b60b88249@xyz.macgirvin.com",
            "created": "2016-12-03 20:00:12",
            "edited": "2016-12-03 20:00:12",
            "expires": "0001-01-01 00:00:00",
            "commented": "2016-12-03 20:00:12",
            "received": "2016-12-03 20:00:12",
            "changed": "2016-12-03 20:00:12",
            "comments_closed": "0001-01-01 00:00:00",
            "owner_xchan": "pgcJx1IQjuPkx8aI9qheJlBMZzJz-oTPjHy3h5pWlOVOriBO_cSiUhhqwhuZ74TYJ8_ECO3pPiRMWC0q8YPCQg",
            "author_xchan": "pgcJx1IQjuPkx8aI9qheJlBMZzJz-oTPjHy3h5pWlOVOriBO_cSiUhhqwhuZ74TYJ8_ECO3pPiRMWC0q8YPCQg",
            "source_xchan": "",
            "mimetype": "text/bbcode",
            "title": "",
            "body": "hello world",
            "html": "",
            "app": "",
            "lang": "",
            "revision": "0",
            "verb": "http://activitystrea.ms/schema/1.0/post",
            "obj_type": "http://activitystrea.ms/schema/1.0/note",
            "obj": "",
            "tgt_type": "",
            "target": "",
            "layout_mid": "",
            "postopts": "",
            "route": "",
            "llink": "https://xyz.macgirvin.com/display/14135cdecf6b8e3891224e4391748722114da6668eebbcb56fe4667b60b88249@xyz.macgirvin.com",
            "plink": "https://xyz.macgirvin.com/channel/mychannel/?f=&mid=14135cdecf6b8e3891224e4391748722114da6668eebbcb56fe4667b60b88249@xyz.macgirvin.com",
            "resource_id": "",
            "resource_type": "",
            "attach": "",
            "sig": "sa4TOQNfHtV13HDZ1tuQGWNBpZp-nWhT2GMrZEmelXxa_IvEepD2SEsCTWOBqM8OKPJLfNy8_i-ORXjrOIIgAa_aT8cw5vka7Q0C8L9eEb_LegwQ_BtH0CXO5uT30e_8uowkwzh6kmlVg1ntD8QqrGgD5jTET_fMQOIw4gQUBh40GDG9RB4QnPp_MKsgemGrADnRk2vHO7-bR32yQ0JI-8G-eyeqGaaJmIwkHoi0vXsfjZtU7ijSLuKEBWboNjKEDU89-vQ1c5Kh1r0pmjiDk-a5JzZTYShpuhVA-vQgEcADA7wkf4lJZCYNwu3FRwHTvhSMdF0nmyv3aPFglQDky38-SAXZyQSvd7qlABHGCVVDmYrYaiq7Dh4rRENbAUf-UJFHPCVB7NRg34R8HIqmOKq1Su99bIWaoI2zuAQEVma9wLqMoFsluFhxX58KeVtlCZlro7tZ6z619-dthS_fwt0cL_2dZ3QwjG1P36Q4Y4KrCTpntn9ot5osh-HjVQ01h1I9yNCj6XPgYJ8Im3KT_G4hmMDFM7H9RUrYLl2o9XYyiS2nRrf4aJHa0UweBlAY4zcQG34bw2AMGCY53mwsSArf4Hs3rKu5GrGphuwYX0lHa7XEKMglwBWPWHI49q7-oNWr7aWwn1FnfaMfl4cQppCMtKESMNRKm_nb9Dsh5e0",
            "diaspora_meta": "",
            "location": "",
            "coord": "",
            "public_policy": "",
            "comment_policy": "contacts",
            "allow_cid": "",
            "allow_gid": "",
            "deny_cid": "",
            "deny_gid": "",
            "item_restrict": "0",
            "item_flags": "0",
            "item_private": "0",
            "item_origin": "1",
            "item_unseen": "0",
            "item_starred": "0",
            "item_uplink": "0",
            "item_consensus": "0",
            "item_wall": "1",
            "item_thread_top": "1",
            "item_notshown": "0",
            "item_nsfw": "0",
            "item_relay": "0",
            "item_mentionsme": "0",
            "item_nocomment": "0",
            "item_obscured": "0",
            "item_verified": "1",
            "item_retained": "0",
            "item_rss": "0",
            "item_deleted": "0",
            "item_type": "0",
            "item_hidden": "0",
            "item_unpublished": "0",
            "item_delayed": "0",
            "item_pending_remove": "0",
            "item_blocked": "0"
        }

    }

item/full
================================================================================

Get all data associated with an item

abook
================================================================================

Connections

abconfig
================================================================================

Connection metadata (such as permissions)

perm_allowed
================================================================================

Check a permission for a given xchan
