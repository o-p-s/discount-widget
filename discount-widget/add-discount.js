$(document).ready(()=>{
	let allPriceClasses=[];

	let Products = document.querySelectorAll('*');
	let i=0,j=0;

	for (i = 0; i < Products.length; i++) {
	  	//fetching classes
	  let classes = Products[i].className.toString().split(/\s+/);
		for (j = 0; j < classes.length; j++) {
			let cls = classes[j];
			if (cls && allPriceClasses.indexOf(cls) === -1){	//filtering repeatitions
				if(cls.indexOf('price')!==-1)
					allPriceClasses.push(cls);
			}
		}
	}
	//Discount Price Calculator
	calculateDiscount=(price)=>{
		if(price>20 && price <100){
			return price-((price*20)/100);
		}else if(price>=100 && price <500){
			return price-((price*30)/100);
		}else if(price>=500 ){
			return price-((price*40)/100);
		}
	}
	//Fetching orignal prices and Updating DOM with new Prices
	for( i=0;i<allPriceClasses.length;i++){
		let id=allPriceClasses[i].substring(6,allPriceClasses[i].length);	
		let price=parseInt($('.'+allPriceClasses[i]).html().substring(1,$('.'+allPriceClasses[i]).html().length));

		if(price>20){
			$('.'+allPriceClasses[i]).parent().append('<div class="newPrice-'+id+'">New Price: $'+calculateDiscount(price)+'</div>');
		}
	}

})