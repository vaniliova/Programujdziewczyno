'use strict';

document.addEventListener('DOMContentLoaded', function() {

      var forDropdown = document.querySelector('.for-dropdown');
      console.log(forDropdown);

      var menu = document.querySelector('.dropdown');
      console.log(menu);

      forDropdown.addEventListener('mouseover', function() {
      	menu.style.display = "block";
      });

      forDropdown.addEventListener('mouseout', function() {
      	menu.style.display = "none";
      });


      var buttons = document.querySelectorAll('.read-more');

      	function showHide() {
	      	var textArea = this.previousElementSibling;
	      	if(textArea.style.display === 'none' || textArea.style.display === '') {
	      		textArea.style.display = 'block';
	      		this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
	      	}else{
	      		textArea.style.display = 'none';
	      		this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
	      	}
      	}

      	for(var i = 0; i<= buttons.length-1; i++) {
      		buttons[i].addEventListener('click', showHide);
      	}
});