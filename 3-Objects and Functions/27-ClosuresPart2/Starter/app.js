
function buildFunctions() {

	const arr = [];

   for(var i = 0; i < 3; i++) {

      arr.push(function() {
         console.log(i);
      });
   }
   return arr;
}

const fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

function buildFunctions2() {

	const arr = [];

	for(var i = 0; i < 3; i++) {

		arr.push(
			(function(i) {
			
				return function() {
					console.log(i);
				}
			}(i))
		);
	}
	return arr;
}

const fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();