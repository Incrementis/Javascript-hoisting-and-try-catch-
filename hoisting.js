/*
	NOTE:
	The following code serves ONLY to demonstrate hoisting in combination
	with try and catch. It is not ideal and should only be seen as noted.
*/


//Initilizing random number between 10 and 1000 when page is load
var genNumber  = (Math.random() * 1000) + 10;
var result = document.getElementById('result');
var countError = 0;


function Guessing(guess, newGame)
{
	

	//Starts a new game by generating a new number
	if(newGame === 1)
	{
		genNumber  = (Math.random() * 1000) + 10;
	}
	else
	{
			
		try
		{
			//Checking Guess
			if(genNumber >= 10 && genNumber <= 500 && guess === 1)
			{
				
				result.innerHTML = "Correct guess! Mistakes: ";
				
			}
			else if (genNumber >= 500 && genNumber <= 1000 && guess === 0)
			{
				
				result.innerHTML = "Correct guess! Mistakes: ";
				
			}
			else
			{
				
				throw "Wrong answers: ";
				
			}
		}
		catch(countError)
		{
			result.innerHTML = countError;
			
			//"countError" will not change its value
			countError++;
		}
		
		//Append! 
		//"countError" will always be 0
		result.innerHTML += countError;
		
	}
	
	
	
}

