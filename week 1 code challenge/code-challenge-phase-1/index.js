function calculateGrade(mark){
    let grade;
   if(mark >= 80 && mark <= 100){
       grade = 'A';
   }else if(mark >= 60 && mark <= 79){
       grade = 'B';
   }else if(mark >= 50 && mark <= 59){
       grade = 'C';
   }else if(mark >= 0 && mark <= 39){
       grade = 'E'
   }else{
       alert('Invalid input')
   }
   return grade;
}





function displayGrade(){
   const mark = document.getElementById('mark').value
   const grade = calculateGrade(mark);
   document.getElementById('Result').innerHTML = `Result:${grade}`;
}