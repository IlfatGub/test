const tabBtn = document.querySelectorAll(".tabs__nav-btn");
const tabItems = document.querySelectorAll(".tabs__item");

tabBtn.forEach(onTabCLick)

function onTabCLick(item){
	item.addEventListener("click", function(){
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let curretTab = document.querySelector(tabId);

		if(!currentBtn.classList.contains("active")){
			tabBtn.forEach(removeClass)
			tabItems.forEach(removeClass)
	
			currentBtn.classList.add("active");
			curretTab.classList.add("active");
		}
	})
}

function removeClass(item){
	item.classList.remove("active");
}

document.querySelector(".tabs__nav-btn:nth-child(2)").click();