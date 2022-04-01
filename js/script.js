// Copyright (c) 2022 Joanne Santhosh All rights reserved
//
// Created by: Joanne Santhosh
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * This function calculates the area of a triangle.
 */
function calculate() {
  console.log("Calculate")
  // input
  const sideAOfTriangle = parseInt(document.getElementById('side-a-of-triangle').value)
  const sideBOfTriangle = parseInt(document.getElementById('side-b-of-triangle').value)
  const sideCOfTriangle = parseInt(document.getElementById('side-c-of-triangle').value)

  // process
  const semiPerimeterOfATriangle = (sideAOfTriangle + sideBOfTriangle + sideCOfTriangle) / 2
  const areaOfATriangle = Math.sqrt(semiPerimeterOfATriangle * (semiPerimeterOfATriangle - sideAOfTriangle) * (semiPerimeterOfATriangle - sideBOfTriangle) * (semiPerimeterOfATriangle - sideCOfTriangle))

  console.log(sideAOfTriangle)
  console.log(sideBOfTriangle)
  console.log(sideCOfTriangle)
  console.log(semiPerimeterOfATriangle)
  console.log(areaOfATriangle)

   // output
   document.getElementById('area-of-a-triangle').innerHTML = 'The area of a triangle is: ' + areaOfATriangle + ' cm² ' 
   document.getElementById('semi-perimeter-of-a-triangle').innerHTML = 'The Semi perimeter is: ' + semiPerimeterOfATriangle + ' cm '
}
