function showDropdown()
{
	document.getElementById('more_dropdown').classList.toggle('show');
}
window.onclick = function(event)
{
	if (!$(event.target).parents('.dropdown').length)
	{
		console.log("outside");
		var dropdowns = document.getElementsByClassName('dropdown-container');
		for (var i = 0; i < dropdowns.length; i++)
		{
			if (dropdowns[i].classList.contains('show'))
				dropdowns[i].classList.remove('show');
		}
	}
	else
	{
		console.log('inside');
	}
}