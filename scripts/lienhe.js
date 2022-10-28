// JavaScript Document
/*function ValidControl(ctrl,msg)
{
	if(ctrl.value==""||ctrl.value==null)
	{
		alert(msg);
		ctrl.focus();
		return false;
	}
	return true;
}
function ValidEmail()
{
	var apos = email.value.indexOf("@");
	var dpos = email.value.lastIndexOf(".");
	if(apos<1||dpos-apos<2)
	{
		alert("Email không hợp lệ");
		email.focus();
		return false;
	}
	return true;
}
function ValidForm()
{
	var kq = ValidControl(name, "Bạn chưa nhập tên");
	if(kq==true)
	   kq = ValidControl(txtEmail, "Bạn chưa nhập email");
	if(kq==true)
	   kq = validEmail();
	return kq;
}*/
function gui()
{
	a = document.getElementById("name").value;
	b = document.getElementById("email").value;
	c = document.getElementById("fb").value;
	d = document.getElementById("txt").value;
	if(a == "" || b == "")
	{
		alert("Vui lòng nhập đầy đủ nội dung!");
	}
	else
	{
		var kq="";
		kq = 'Tên: '+a+"\n"+'Email: '+b+"\n"+'Link facebook: '+c+"\n"+'Lời nhắn: '+d+"\n";
		confirm(kq);
		//confirm('Tên: '+a+"\n"+'Email: '+b+"\n"+'Link facebook: '+c+"\n"+'Lời nhắn: '+d+"\n");
	}
}
document.getElementById("submit").onclick = function()
{
	gui();
};