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
  // input
  const sideAOfTriangle = parseInt(document.getElementById('side-a-of-triangle').value)
  const sideBOfTriangle = parseInt(document.getElementById('side-b-of-triangle').value)
  const sideCOfTriangle = parseInt(document.getElementById('side-c-of-triangle').value)

  // process
  const semiPerimeterOfATriangle = (sideAOfTriangle + sideBOfTriangle + sideCOfTriangle)
  
  // output
  document.getElementById('semiperimeter-of-a-triangle').innerHTML = 'The Semi perimeter is: ' + semiPerimeterOfATriangle + ' cm '
  }
