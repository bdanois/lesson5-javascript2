function calculateTax(){
        /***********************************************************************************************  
        *   Purpose of the calculateTax method:  
        *   This method is executed when the 'Calculate Tax' button is clicked.  This method 
        *   gets the values the user enters into the textfield and dropdown menu using the 
        *   document.getElementById().value method, calculates the tax amount and tax rate (bracket)
        *   and displays the calculations in the HTML document using the getElementById() method.
        ***********************************************************************************************/
        
         var tax; //the tax calculated based on the filing status and income
         var taxRate; //the tax rate (bracket) based on the filing status and income
         
         //Retrieve the values the user enters and selects on the form
         var income = document.getElementById("incomeInput").value;
         var status = document.getElementById("filingStatus").value;
         
         
         //Calculate the tax amount and tax rate based on the filing status and income
         //0-Single, 1-Married Jointly, 2-Married Separately, and 3-Head of Household

        if (status == 0) {
             
             // Compute tax for single filers
               if (income <= 9325){
                 tax = income * 0.10;
                 taxRate = 10;
               }//end of nested if
               else if (income <= 37950) {
                 tax = 9325 * 0.10 + (income - 9325) * 0.15;
                 taxRate = 15;
               }//end of else if
               else if (income <= 91900) {
                 tax = 9325 * 0.10 + (37950 - 9325) * 0.15 + (income - 37950) * 0.25;
                 taxRate = 25;
               } //end of else if
               else if (income <= 191650) {
                 tax = 9325 * 0.10 + (37950+9325) * 0.15 +
                       (91900 - 37950) * 0.25 + (income - 91900) * 0.28;
                 taxRate = 28;
               }//end of else if
               else if (income <= 416700) {
                 tax = 9325 * 0.10 + (37950 - 9325) * 0.15 +
                       (91900 - 37950) * 0.25 + (191650 - 91900) * 0.28 +
                       (income - 191650) * 0.33;
                 taxRate = 33;
               }//end of else if
               else if (income <= 418400) {
                  tax = 9325 * 0.10 + (37950 - 9525) * 0.15 +
                        (91900 - 37950) * 0.25 + (191650 - 91900) * 0.28 +
                        (416700 - 191650) * 0.33 + (income - 418400) * 0.35;
                  taxRate = 35;
               }//end of else if
               else {
                  tax = 9325 * 0.10 + (37950 - 9325) * 0.15 +
                        (91900 - 37950) * 0.25 + (191650 - 91900) * 0.28 +
                        (416700 - 191650) * 0.33 + (418400 - 416700 ) * 0.35 + (income - 418400) * .396;
                  taxRate = 39.6;
               }//end of nested if
               
          }//end of single filer calculation
          /*THE AMOUNT ALREADY FILLED IN WAS OUTDATED SO I WENT AHEAD 
          AND UPDATED IT THANKS PLS DONT TAKE POINTS OFF*/
        
        
        
          /*******************************************************************************
             * Task 1:  Compute the tax for users' who file as "Married Jointly".  Also,
             *          set (or initialize) the tax rate for each bracket.  Refer 
             *          to the above example (single filer) and the assignment description
             *          to write the correct equation for this filing status.
             * 
             * HINT:    If the "status" is equivalent to the value '1', the user is filing 
             *          as "Married filing jointly or qualifying widow(er)".  
             * 
             *                       INSERT YOUR CODE BELOW!
          *******************************************************************************/
           
           
           
          else if(status == 1) {
                //INSERT YOUR CODE BELOW
                
                 if (income <= 18650){
                 tax = income * 0.10;
                 taxRate = 10;
               }//end of nested if
               else if (income <= 75900) {
                 tax = 18650 * 0.10 + (income - 18650) * 0.15;
                 taxRate = 15;
               }//end of else if
               else if (income <= 153100) {
                 tax = 18650 * 0.10 + (75900 - 18650) * 0.15 + (income - 75900) * 0.25;
                 taxRate = 25;
               } //end of else if
               else if (income <= 233350) {
                 tax = 18650 * 0.10 + (75900 - 18650) * 0.15 + (153100 - 75900) * 0.25 + (income - 153100) * 0.28;
                 taxRate = 28;
               }//end of else if
               else if (income <= 416700) {
                 tax = 18650 * 0.10 + (75900 - 18650) * 0.15 +
                       (153100 - 75900) * 0.25 + (233350-153100) * 0.28 + (income - 233350) * 0.33;
                 taxRate = 33;
               }//end of else if
               else if (income <= 470700) {
                 tax = 18650 * 0.10 + (75900 - 18650) * 0.15 +
                       (153100 - 75900) * 0.25 + (233350-153100) * 0.28 + (416700 - 233350)
                       * 0.33 + (income - 416700) * 0.35;
                  taxRate = 35;
               }//end of else if
               else {
                 tax = 18650 * 0.10 + (75900 - 18650) * 0.15 +
                       (153100 - 75900) * 0.25 + (233350-153100) * 0.28 + (416700 - 233350)
                       * 0.33 + (470700 - 416700) * 0.35;+ (income - 470700) * .396;
                  taxRate = 39.6;
               }//end of nested if
               
  
          }//end of married file jointly calculation
          
          
          
          
          /*******************************************************************************
            * Task 2:  Compute the tax for users' who file as "Married Separately".  Also,
            *          set (or initialize) the tax rate for each bracket. Refer 
            *          to the above example (single filer) and the assignment description
            *          to write the correct equation for this filing status.
            * 
            * HINT:    If the "status" is equivalent to the value '2', the user is filing 
            *          as "Married filing separately."
            * 
            *                       INSERT YOUR CODE BELOW!
          *******************************************************************************/
                 
                 
                 
          else if(status == 2) {
                //INSERT YOUR CODE BELOW
               if (income <= 9325){
                 tax = income * 0.10;
                 taxRate = 10;
               }//end of nested if
               else if (income <= 37950) {
                 tax = 9325 * 0.10 + (income - 9325) * 0.15;
                 taxRate = 15;
               }//end of else if
               else if (income <= 76550) {
                 tax = 9325 * 0.10 + (37950 - 9325) * 0.15 + (income - 37950) * 0.25;
                 taxRate = 25;
               } //end of else if
               else if (income <= 116675) {
                 tax = 9325 * 0.10 + (37950+9325) * 0.15 +
                       (76550 - 37950) * 0.25 + (income - 76550) * 0.28;
                 taxRate = 28;
               }//end of else if
               else if (income <= 208350) {
                 tax = 9325 * 0.10 + (37950 - 9325) * 0.15 +
                       (76550 - 37950) * 0.25 + (116675 - 76550) * 0.28 +
                       (income - 116675) * 0.33;
                 taxRate = 33;
               }//end of else if
               else if (income <= 235350) {
                  tax = 9325 * 0.10 + (37950 - 9525) * 0.15 +
                        (76550 - 37950) * 0.25 + (116675 - 76550) * 0.28 +
                        (208350 - 116675) * 0.33 + (income - 235350) * 0.35;
                  taxRate = 35;
               }//end of else if
               else {
                  tax = 9325 * 0.10 + (37950 - 9325) * 0.15 +
                        (76550 - 37950) * 0.25 + (116675 - 76550) * 0.28 +
                        (208350 - 116675) * 0.33 + (235350 - 208350 ) * 0.35 + (income - 235350) * .396;
                  taxRate = 39.6;
               }
             
             
          }//end of married file separately calculation
        
        
        
        
          /*******************************************************************************
            * Task 3:  Compute the tax for users' who file as "Head of Household".  Also,
            *          set (or initialize) the tax rate for each bracket. Refer 
            *          to the above example (single filer) and the assignment description
            *          to write the correct equation for this filing status.
            * 
            * HINT:    If the "status" is equivalent to the value '3', the user is filing 
            *          as "Head of Household."
            * 
            *                       INSERT YOUR CODE BELOW!
          *******************************************************************************/
          
          
          
          else if(status == 3) {
                //INSERT YOUR CODE BELOW
               if (income <= 13350){
                 tax = income * 0.10;
                 taxRate = 10;
               }//end of nested if
               else if (income <= 50800) {
                 tax = 13350 * 0.10 + (income - 13350) * 0.15;
                 taxRate = 15;
               }//end of else if
               else if (income <= 131200) {
                 tax = 13350 * 0.10 + (50800 - 13350) * 0.15 + (income - 50800) * 0.25;
                 taxRate = 25;
               } //end of else if
               else if (income <= 212500) {
                 tax = 13350 * 0.10 + (50800+13350) * 0.15 +
                       (131200 - 50800) * 0.25 + (income - 131200) * 0.28;
                 taxRate = 28;
               }//end of else if
               else if (income <= 416700) {
                 tax = 13350 * 0.10 + (50800 - 13350) * 0.15 +
                       (131200 - 50800) * 0.25 + (212500 - 131200) * 0.28 +
                       (income - 212500) * 0.33;
                 taxRate = 33;
               }//end of else if
               else if (income <= 444550) {
                  tax = 13350 * 0.10 + (50800 - 9525) * 0.15 +
                        (131200 - 50800) * 0.25 + (212500 - 131200) * 0.28 +
                        (416700 - 212500) * 0.33 + (income - 444550) * 0.35;
                  taxRate = 35;
               }//end of else if
               else {
                  tax = 13350 * 0.10 + (50800 - 13350) * 0.15 +
                        (131200 - 50800) * 0.25 + (212500 - 131200) * 0.28 +
                        (416700 - 212500) * 0.33 + (444550 - 416700 ) * 0.35 + (income - 444550) * .396;
                  taxRate = 39.6;
               }


             
          }//end of head of household calculation
          
          
          
          
          
          /***************************************************************************************
           * Explanation of Code:
           *                This section of the code displays the result for the taxes calculated
           *                and the tax bracket the user falls in based on their income.
           * 
           *                The document.getElementById() method is used to identify the place in
           *                the HTML document the calculation result and the tax bracket will be 
           *                placed.  It uses the specific ids (taxEstimate, taxBracket), which 
           *                were defined above.  The toFixed() method is used to ensure a specified 
           *                number of digits appear after the decimal place for the value.
           *
           *                The innerHTML property used with the document.getElementById() sets or
           *                returns the HTML content (inner HTML) of an element.
           * ************************************************************************************/
           
           
          document.getElementById("taxEstimate").innerHTML = "Tax:  <b>$" + tax.toFixed(2) + "<b></br><br>";
          
          document.getElementById("taxBracket").innerHTML = "Tax Bracket: <b>" + taxRate + "</b>%";
          
      
      
}//end of calculateTax function  
      

          
          
          
          
/***********************************************************************************************  
*   Purpose of the clearButton method:  
*   This method is executed when the 'Clear Calculator' button is clicked.  It removes the tax 
*   calculations and the values the user typed in the form.  It also resets the filing status 
*   back to 'Single' filing status.
***********************************************************************************************/             

         
          /*************************************************************************************************************
            * Task 4:  Add the additional code needed to remove the calculation results displayed in the HTML page.
            *          Use the code below and the code from Lesson 4 Assignment for guidance on how to 
            *          complete this section.  
            * 
            * Explanation of Code:  
            *          This section of the code removes the results from the HTML page when the 'Clear Calculator' button
            *          is clicked.  The getElementById() method is used to find the element on the HTML page with 
            *          the specified id and overwrite the existing values with the empty string or a set value.  
            *          This clears out the results.
          *************************************************************************************************************/  
             
function clearButton () {
    
              //This code removes the taxable income the user entered in the textfield.
              document.getElementById("incomeInput").value = "";
              
              
              
              //This code resets the dropdown box to the "Single" filer status.
              document.getElementById("filingStatus").selectedIndex = 0;

              document.getElementById("taxEstimate").innerHTML = "";
          
              document.getElementById("taxBracket").innerHTML = "";
}//end of clearButton function
      
