let allProducts=[];

$(document).ready(()=>{
	
	//Appending New Product in DOM
	let appendProduct=(i)=>{

		//Creating div for the product
		$('#all-products').append('<figure id="productId'+i+'" class="col-md-4 mb-4 text-center"><div id="productPic'+i+'"></div><figcaption id="productInfo'+i+'" ></figcaption></figure>');	
		//Appending Prodcut picture
		$('#productPic'+i+'').append('<img src="./assets/default-person.png" class="rounded-circle w-50" />')
		//Appending Product name,price
		$('#productInfo'+i+'').append('<div class="name-'+i+'">'+allProducts[i].name+'</div> <div class="price-'+i+'">'+allProducts[i].price+'</div>');

	}

	//Loading Temporary Porducts in DOM
	for (let i=0 ;i<10; i++) {
		allProducts[i]={
			'name':`Product Name-${i+1}`,
			'price':`\$${i*20}`
		}
		appendProduct(i);
	}
	
});

