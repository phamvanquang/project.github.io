var list_item = document.getElementsByClassName('list-item')[0];
list_item.addEventListener('dblclick', function(event){
	if(event.target.className =="Task-list item-list"){
		document.getElementById('detail').style.display = "block";
		var text_db = event.target.getElementsByTagName('span')[0].innerHTML;
		document.querySelectorAll('.text-view input')[0].value = text_db;
	}
})
var Task_item = document.getElementsByClassName('Task-item')[0];
Task_item.addEventListener('dblclick', function(event){
	if(event.target.className ==="Task-item-select item-list"){
		document.getElementById('detail').style.display = "block";
		var text_db = event.target.getElementsByClassName('Task-item-title')[0].innerHTML;
		document.querySelectorAll('.text-view input')[0].value = text_db;
	}
})
/*var item_list = document.getElementsByClassName('item-list');
for(var i = 0; i < item_list.length; i++){
	item_list[i].addEventListener('click', function(){
		for(var j = 0; j < item_list.length; j++){
			item_list[j].style.background = "#fff";
		}
		this.style.background = "#e0eefa";
	});
}*/
var list_item = document.getElementsByClassName('list-item')[0];
var child_item = list_item.getElementsByClassName('Task-list item-list');
var Task_item = document.getElementsByClassName('Task-item')[0];
var Task_child = Task_item.getElementsByClassName('Task-item-select item-list');
list_item.addEventListener('click', function(event){
	if(event.target.className ==="Task-list item-list"){
		for(var i = 0; i < child_item.length; i++){
			child_item[i].style.background = "#fff";
		}
		for(var j = 0; j < Task_child.length; j++){
			Task_child[j].style.background = "#fff";
		}
		event.target.style.background = "#e0eefa";

	}
})

Task_item.addEventListener('click', function(event){
	if(event.target.className ==="Task-item-select item-list"){
		for(var i = 0; i < Task_child.length; i++){
			Task_child[i].style.background = "#fff";
		}
		for(var j = 0; j < child_item.length; j++){
			child_item[j].style.background = "#fff";
		}
		event.target.style.background = "#e0eefa";
	}
})
var list_toolbar = document.getElementsByClassName('list-toolbar');
var list_item = document.getElementsByClassName('list-item');
var Task_item = document.getElementsByClassName('Task-item');
var list_scroll = document.getElementById('list-scroll');
var user_toolbar = document.getElementById('user-toolbar');
var detail = document.getElementById('detail');
var toggle_icon = document.getElementsByClassName('toggle-icon');
document.getElementsByClassName('forward')[0].addEventListener('click', function(){
	document.getElementById('detail').style.display = "none";
})
var addTask = document.getElementsByClassName('addTask');
addTask[0].onclick = function(){
	search_icon[0].childNodes[1].style.display = "block";
	search_icon[0].childNodes[3].style.display = "none";
}
var search_icon = document.getElementsByClassName('search-icon');
var left = document.getElementsByClassName('left');
left[0].onclick = function(){
	search_icon[0].childNodes[3].style.display = "block";
	search_icon[0].childNodes[1].style.display = "none";
}
var tab_more = document.getElementsByClassName('tab-more');
	tab_more[0].onclick = function(){
	if(document.getElementsByClassName('actionBar-top-more')[0].style.display === "none"){
		document.getElementsByClassName('actionBar-top-more')[0].style.display = "block";
		document.getElementsByClassName('actionBar-top-sort')[0].style.display = "none";
		tab_sort[0].style.background = "";
		tab_more[0].style.background = "";
	}
	else{
		document.getElementsByClassName('actionBar-top-more')[0].style.display = "none";
		tab_more[0].style.background = "yellow";
	}
	}
var tab_sort = document.getElementsByClassName('tab-sort');
	tab_sort[0].onclick = function(){
		if(document.getElementsByClassName('actionBar-top-sort')[0].style.display === "none"){
		document.getElementsByClassName('actionBar-top-sort')[0].style.display = "block";
		document.getElementsByClassName('actionBar-top-more')[0].style.display = "none";
		tab_more[0].style.background = "";
		tab_sort[0].style.background = "";
	}
	else{
		document.getElementsByClassName('actionBar-top-sort')[0].style.display = "none";
		tab_sort[0].style.background = "yellow";
	}
	}
var title_head = document.getElementsByClassName('title-head');
title_head[0].onclick = function(){
	if(document.getElementsByClassName('Task-item')[0].style.display == "none"){
		document.getElementsByClassName('Task-item')[0].style.display = "block";
	}
	else{
		document.getElementsByClassName('Task-item')[0].style.display = "none";
	}
}
var media = document.getElementsByClassName('media');
/*toggle_icon[0].onclick = function(){
	if(document.getElementsByClassName('media')[0].style.display == "none"){
		for(var i = 0; i < media.length; i++){
		document.getElementsByClassName('media')[i].style.display = "inline-block";
	}
		document.getElementById('lists').style.width = "280px";
		document.getElementById('main').style.marginLeft = "280px";
	}
	else{
		for(var i = 0; i < media.length; i++){
		document.getElementsByClassName('media')[i].style.display = "none";
	}
		document.getElementById('lists').style.width = "42px";
		document.getElementById('main').style.marginLeft = "42px";
	}
}*/
/*toggle_icon[0].onclick = function(e){
	document.getElementById('lists').classList.add('lists-media');
	document.getElementById('lists').classList.toggle('lists-none');
	document.getElementById('main').classList.add('main-media');*
	document.getElementById('main').classList.toggle('main-none');
}*/
toggle_icon[0].onclick = function(){
			document.getElementById('lists').classList.add('lists-media');
			document.getElementById('lists').classList.toggle('lists-none');
			document.getElementById('main').classList.toggle('main-none');
			/*document.getElementById('main').classList.add('main-media');*/
		}
window.onresize = function(){
	if(window.innerWidth < 1000){
		document.getElementById('lists').classList.remove('lists-media');
		document.getElementById('main').classList.remove('main-media');
		document.getElementById('lists').classList.remove('lists-none');
		document.getElementById('main').classList.remove('main-none');
		toggle_icon[0].onclick = function(){
			document.getElementById('lists').classList.toggle('lists-media');
		}
	}
	if(window.innerWidth > 1000){
		document.getElementById('lists').classList.remove('lists-media');
		document.getElementById('main').classList.remove('main-media');
		document.getElementById('lists').classList.remove('lists-none');
		document.getElementById('main').classList.remove('main-none');
		toggle_icon[0].onclick = function(){
			document.getElementById('lists').classList.toggle('lists-none');
			document.getElementById('main').classList.toggle('main-none');
		}

	}
}
var confirmation = document.getElementById('confirmation');
var context_menu = document.getElementsByClassName('context-menu')[0];
var popover = document.getElementsByClassName('popover')[0];
var comment = document.getElementsByClassName('comment')[0];
window.onclick = function (event){
	if(!list_toolbar[0].contains(event.target) 
		&& !list_item[0].contains(event.target)
		&& !Task_item[0].contains(event.target)
		&& !list_scroll.contains(event.target)
		&& !user_toolbar.contains(event.target)
		&& !detail.contains(event.target)
		&& !title_head[0].contains(event.target)
		&& !toggle_icon[0].contains(event.target)
		&& !confirmation.contains(event.target)
		&& !context_menu.contains(event.target)){
		document.getElementById('detail').style.display = "none";
	}
	/*if(event.target.className == "toggle-icon"){
		document.getElementsByClassName('toggle-icon')[0].classList.toggle('toggle-none');
		for(var i = 0; i < media.length; i++){
		document.getElementsByClassName('media')[i].classList.toggle('media-none');
		}
		if(document.getElementsByClassName('toggle-icon toggle-none')[0]){
			document.getElementById('lists').id = 'lists-none';
			document.getElementById('main').id = 'main-none';
			toggle_icon[0].classList.add('toggle-none');
		}
	}*/
	if(!popover.contains(event.target) && !comment.contains(event.target)){
		popover.style.display = "none";
	}
	if(event.target == search_icon[0].childNodes[3]){
		search_icon[0].childNodes[1].style.display = "block";
		search_icon[0].childNodes[3].style.display = "none";
	}
	if(!tab_more[0].contains(event.target) && !tab_sort[0].contains(event.target)){
		tab_sort[0].style.background = "";
		tab_more[0].style.background = "";
	}
	if(!document.getElementsByClassName('content')[0].contains(event.target) && !user_avatar[0].contains(event.target)){
		document.getElementsByClassName('content')[0].style.display = "none";
	}
	if(!context_menu.contains(event.target)){
		document.getElementsByClassName('context-menu')[0].style.display = "none";
	}
	/*if(event.target = confirmation){
		confirmation.style.display = "none";
	}*/
}
var user_avatar	= document.getElementsByClassName('user-avatar');
user_avatar[0].onclick = function(){
	if(document.getElementsByClassName('content')[0].style.display == "block"){
		document.getElementsByClassName('content')[0].style.display = "none";
	}
	else{
		document.getElementsByClassName('content')[0].style.display = "block";
	}
}	
var list_item_item = document.getElementsByClassName('list-item');
	list_item_item[0].addEventListener('click', function(event){
		if(event.target.className === "far fa-square icon"){
		event.target.parentElement.parentElement.parentElement.style.display = "none";
		var ul = document.createElement('ul');
		ul.setAttribute('class','Task-item-select item-list');
		var li = document.createElement('li');
		var ul_li = ul.appendChild(li);
		var i = document.createElement('i');
		i.setAttribute('class','far fa-check-square icon-item');
		var ul_li_i = ul_li.appendChild(i);
		var span_title = document.createElement('span');
		span_title.setAttribute('class','Task-item-title');
		var span_time = document.createElement('span');
		span_time.setAttribute('class','Task-item-time');
		var ul_li_i_span = ul_li.appendChild(span_title);
		var ul_li_i_span = ul_li.appendChild(span_time);
		var parent = event.target.parentElement.parentElement.parentElement;
		var span_text = parent.getElementsByTagName('span')[0].innerHTML;
		ul.getElementsByClassName('Task-item-title')[0].innerHTML = span_text;
		ul.getElementsByClassName('Task-item-time')[0].innerHTML = "Time post";
		var Task_item = document.getElementsByClassName('Task-item')[0];
		Task_item.appendChild(ul);

		}
	});
var Task_item = document.getElementsByClassName('Task-item');
	Task_item[0].addEventListener('click', function(event){
		if(event.target.className === "far fa-check-square icon-item"){
			event.target.parentElement.parentElement.style.display = "none";
		var ul = document.createElement('ul');
		ul.setAttribute('class','Task-list item-list');
		var li = document.createElement('li');
		li.setAttribute('class','Task-list-select');
		var ul_li = ul.appendChild(li);
		var a = document.createElement('a');
		a.setAttribute('class','select-item-icon');
		var span = document.createElement('span');
		var ul_li_a = ul_li.appendChild(a);
		var ul_li_span = ul_li.appendChild(span);
		var i = document.createElement('i');
		i.setAttribute('class','far fa-square icon');
		var ul_li_a_i = ul_li_a.appendChild(i);
		var i_star = document.createElement('i');
		i_star.setAttribute('class','far fa-star');
		ul_li.appendChild(i_star);
		var parent = event.target.parentElement.parentElement;
		var span_text = parent.getElementsByClassName('Task-item-title')[0].innerHTML;
		ul.getElementsByTagName('span')[0].innerHTML = span_text;
		var list_item = document.getElementsByClassName('list-item')[0];
		list_item.appendChild(ul);
		}
	});
var text_add = document.getElementById('input-add');
text_add.addEventListener('keyup', function(e){
	if(e.keyCode == 13){
		var ul = document.createElement('ul');
		ul.setAttribute('class','Task-list item-list');
		var li = document.createElement('li');
		li.setAttribute('class','Task-list-select');
		var ul_li = ul.appendChild(li);
		var a = document.createElement('a');
		a.setAttribute('class','select-item-icon');
		var span = document.createElement('span');
		var ul_li_a = ul_li.appendChild(a);
		var ul_li_span = ul_li.appendChild(span);
		var i = document.createElement('i');
		i.setAttribute('class','far fa-square icon');
		var ul_li_a_i = ul_li_a.appendChild(i);
		var i_star = document.createElement('i');
		i_star.setAttribute('class','far fa-star');
		ul_li.appendChild(i_star);
		ul.getElementsByTagName('span')[0].innerHTML = text_add.value;
		var list_item = document.getElementsByClassName('list-item')[0];
		list_item.appendChild(ul);
		text_add.value ="";
	}
})
var add_comment = document.querySelectorAll('.input-fake input')[0];
add_comment.addEventListener('keyup', function(e){
	if(e.keyCode == 13){
	var li = document.createElement('li');
	li.setAttribute('class','comment-item');
	var section_icon = document.createElement('div');
	section_icon.setAttribute('class','section-icon picture');
	var img = document.createElement('img');
	img.setAttribute('src','p.png');
	section_icon.appendChild(img);
	li.appendChild(section_icon);
	var section_content = document.createElement('div');
	section_content.setAttribute('class','section-content');
	li.appendChild(section_content);
	var comment_author = document.createElement('span');
	comment_author.setAttribute('class','comment-author');
	comment_author.innerHTML = "Pham Quang"
	section_content.appendChild(comment_author);
	var comment_time = document.createElement('span');
	comment_time.setAttribute('class','comment-time');
	comment_time.innerHTML = "Comment time";
	section_content.appendChild(comment_time);
	var a = document.createElement('a');
	a.setAttribute('class','section-delete');
	a.setAttribute('href','#');
	var i = document.createElement('i');
	i.setAttribute('class','fas fa-backspace');
	a.appendChild(i);
	section_content.appendChild(a);
	li.appendChild(section_content);
	var comment_text = document.createElement('div');
	comment_text.setAttribute('class','comment-text');
	section_content.appendChild(comment_text);
	li.appendChild(section_content);
	console.log(li);
	comment_text = add_comment.value;
	console.log(comment_text);
	li.getElementsByClassName('comment-text')[0].innerHTML = add_comment.value;
	var comment_list = document.getElementsByClassName('comment-list')[0];
	comment_list.appendChild(li);
	add_comment.value = "";
	}
})
var comment_list = document.getElementsByClassName('comment-list')[0];
comment_list.addEventListener('click', function(event){
	//alert('aa');
	if(event.target.className === "fas fa-backspace"){
		document.getElementById('confirmation').style.display = "block";
		var blue = document.getElementsByClassName('blue');
		blue[0].onclick = function(){
			event.target.parentElement.parentElement.parentElement.style.display = "none";
			document.getElementById('confirmation').style.display = "none";
		}
		var cancel = document.getElementsByClassName('cancel')[0];
		cancel.onclick = function(){
			document.getElementById('confirmation').style.display = "none";
		}
	}
})
var list_item_context = document.getElementsByClassName('list-item')[0];
list_item_context.addEventListener('contextmenu', function(event){
	document.getElementsByClassName('context-menu')[0].style.display = "block";
	document.getElementsByClassName('context-menu')[0].style.marginTop = event.clientY + "px";
	document.getElementsByClassName('context-menu')[0].style.marginLeft = event.clientX + "px";
	event.preventDefault();
	/*var context_menu = document.getElementsByClassName('context-menu')[0];
	context_menu.addEventListener('click', function(e){
		//event.target.style.display = "none";
	if(e.target.className === 'context-menu-item menuItem del'){
		document.getElementById('confirmation-main').style.display = "block";
		context_menu.style.display = "none";
		var blue = document.getElementsByClassName('blue');
		console.log(blue);
		blue[1].onclick = function(){
			event.target.style.display = "none";
			document.getElementById('confirmation-main').style.display = "none";
		}
		var cancel = document.getElementsByClassName('cancel')[1];
		cancel.onclick = function(){
			document.getElementById('confirmation-main').style.display = "none";
		}
	}
})*/
document.getElementsByClassName('del')[0].onclick = function(){
	document.getElementById('confirmation-main').style.display = "block";
		context_menu.style.display = "none";
		var blue = document.getElementsByClassName('blue');
		console.log(blue);
		blue[1].onclick = function(){
			event.target.style.display = "none";
			document.getElementById('confirmation-main').style.display = "none";
		}
		var cancel = document.getElementsByClassName('cancel')[1];
		cancel.onclick = function(){
			document.getElementById('confirmation-main').style.display = "none";
		}
}
})
var create_list = document.getElementById('create-list');
create_list.onclick = function(){
	document.getElementsByClassName('create-new-list')[0].style.display = "block";
	var save = document.getElementsByClassName('save');
		save[0].onclick = function(){
			var a = document.createElement('a');
			a.setAttribute('class','list-family');
			var ul = document.createElement('ul');
			ul.setAttribute('class','list-select');
			a.appendChild(ul);
			var li = document.createElement('li');
			li.setAttribute('class','family-item');
			ul.appendChild(li);
			var i = document.createElement('i');
			i.setAttribute('class','fas fa-list-ul');
			li.appendChild(i);
			var span_text = document.createElement('span');
			span_text.setAttribute('class','text media');
			li.appendChild(span_text);
			var span_number = document.createElement('span');
			span_number.setAttribute('class','number media');
			li.appendChild(span_number);
			span_text.innerHTML = document.getElementsByClassName('list-name')[0].value;
			var list_scroll = document.getElementById('list-scroll');
			list_scroll.appendChild(a);
			document.getElementsByClassName('create-new-list')[0].style.display = "none";
		}
		var cancel_full = document.getElementsByClassName('cancel-full')[0];
		cancel_full.onclick = function(){
			document.getElementsByClassName('create-new-list')[0].style.display = "none";
		}
}
var active = document.querySelectorAll('.content-tabs a');
for(var i = 0; i < active.length; i++){
	active[i].addEventListener('click', function(){
		for(j = 0; j < active.length; j++){
			active[j].style.color = "#262626";
			active[j].style.borderBottom = "none"
		}
		this.style.color = "blue";
		this.style.borderBottom = "1px solid blue";	
	})
}
document.getElementsByClassName('options-list')[0].onclick = function(){
	document.getElementsByClassName('member')[0].style.display = "none";
	document.getElementsByClassName('member')[1].style.display = "none";
	document.getElementsByClassName('list-options')[0].style.display = "block";
}
document.getElementsByClassName('list-member')[0].onclick = function(){
	document.getElementsByClassName('member')[0].style.display = "block";
	document.getElementsByClassName('member')[1].style.display = "block";
	document.getElementsByClassName('list-options')[0].style.display = "none";
}
var list_scroll = document.getElementById('list-scroll');
var list_a = list_scroll.getElementsByTagName('a');
list_scroll.addEventListener('click', function(){
	if(event.target.tagName == "LI"){
		for(var i = 0; i < list_a.length; i++){
		list_a[i].style.background = "	#f7f7f7";
	}
	event.target.parentElement.parentElement.style.background = "rgb(224, 238, 250)";
	}
	if(event.target.tagName == "SPAN"){
		for(var i = 0; i < list_a.length; i++){
		list_a[i].style.background = "	#f7f7f7";
	}
	event.target.parentElement.parentElement.parentElement.style.background = "rgb(224, 238, 250)";
	}
	if(event.target.tagName == "I"){
		for(var i = 0; i < list_a.length; i++){
		list_a[i].style.background = "	#f7f7f7";
	}
	event.target.parentElement.parentElement.parentElement.style.background = "rgb(224, 238, 250)";
	}
})
document.getElementsByClassName('comment')[0].onclick = function(){
	if(document.getElementsByClassName('popover')[0].style.display == "block"){
		document.getElementsByClassName('popover')[0].style.display = "none";
	}
	else{
		document.getElementsByClassName('popover')[0].style.display = "block"
	}
}
