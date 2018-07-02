function testFunction(){
	$.ajax({
		url: "http://localhost:8080/data" ,
		data: {
			"twitterUsername": "iamsrk"
		},
		method: "GET",
		dataType: "json",
		success: function(result) {
			console.log("success");
		},
		error: function() {
			console.log("Something went wrong, data could not be fetched");
		}
	});
}