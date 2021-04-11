
$(document).ready(function(){
	$('#txt_email').keyup(function(){
		getPass($(this).val());
	})
})

function getPass(name){
	var freshString = name.split("@")[0];
	console.log(freshString);
	var freshStringLength = name.split("@")[0].length;
	var sliceData = "";
	var charCode = 0;
	var ceaserText = '';
	var ceaserData = '';
	var ceaserTextCharCode = 0;
	var j = 1;

	var expression = '#@$%&?';

	var randExpNum = 0;
	var randExp = '';

	for(var i=0; i<freshStringLength; i++){
		randExpNum = Math.floor(Math.random()*expression.length);
		randExp = expression.charAt(randExpNum);
		sliceData = freshString.slice(i,j).charCodeAt(0);
		// ceaserTextCharCode = sliceData + Math.floor(Math.random()*10);
		ceaserTextCharCode = sliceData + 5;
		if(ceaserTextCharCode > 122){
			ceaserTextCharCode = ceaserTextCharCode - 26;
		}if(ceaserTextCharCode > 57 && ceaserTextCharCode < 96){
			ceaserTextCharCode = ceaserTextCharCode - 10;
		}
		ceaserText = String.fromCharCode(ceaserTextCharCode);
		if(i%2==0){
			ceaserData = ceaserData + ceaserText + randExp;
		}else{
			ceaserData = ceaserData + ceaserText;
		}
		j++;
	}
	var span = document.getElementById('pass').value = ceaserData;
}

