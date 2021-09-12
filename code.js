let numbers = [
    469,
    755,
    244,
    245,
    758,
    450,
    302,
    20,
    712,
    71,
    456,
    21,
    398,
    339,
    882,
    848,
    179,
    535,
    940,
    472,
  ];
  
  document.write("<h1>Array Analyzer</h1>")
  document.write("<h3>Now analyzing the array: " + numbers + "</h3>");
  document.write("<ul>");
  
  let largestNumber = 0
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i]
    }
  }
  // Then render each li:
  
  document.write("<li>Largest Number: " + largestNumber + "</li>");
  // etc...
  document.write("</ul>");
  
  
  document.write("<ul>")
  let smallestNumber = 999999999
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < smallestNumber){
      smallestNumber = numbers[i]
    }
  }
  document.write("<li>Smallest Number: " + smallestNumber + "</li>");
  document.write("</ul>");
  
  
  document.write("<ul>")
  let sum = 0
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i]
  }
  document.write("<li>Sum: " + sum + "</li>")
  document.write("</ul>")
  
  
  document.write("<ul>")
  let average = 0
  for(let i = 0; i < numbers.length; i++){
    average = sum / numbers.length
  }
  document.write("<li>Average: " + average + "</li>")
  document.write("</ul>")
  
  
  document.write("<ul>")
  let evenNumbers = []
  for(let i = 0; i < numbers.length; i++){
     if (numbers[i]%2 === 0){
       evenNumbers.push(numbers[i])
     } 
    }
  document.write("<li>Even Numbers: " + evenNumbers + "</li>")
  document.write("</ul>")
  
  
  document.write("<ul>")
  let oddNumbers = []
  for(let i = 0; i < numbers.length; i++){
    if (numbers[i]%2){
      oddNumbers.push(numbers[i])
    }
  }
  document.write("<li>Odd Numbers: " + oddNumbers + "</li>")
  document.write("</ul>")
  
  
  document.write("<ul>")
  let eightDivide = []
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 8 === 0){
      eightDivide.push(numbers[i])
    }
  }
  document.write("<li>Numbers divisible by 8: " + eightDivide + "</li>")
  document.write("</ul>")