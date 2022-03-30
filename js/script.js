// Copyright (c) 2022 Joanne Santhosh All rights reserved
//
// Created by: Joanne Santhosh
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * This function calculates the area of a triange.
 */
function calculate() {
  // input
  const sideAOfTriangle = parseInt(document.getElementById('side-a-of-triangle').value)
  const sideBOfTriangle = parseInt(document.getElementById('side-b-of-triangle').value)
  const sideCOfTriangle = parseInt(document.getElementById('side-c-of-triangle').value)

  // process
  const semiPerimeterOfATriangle = (sideAOfTriangle + sideBOfTriangle + sideCOfTriangle) / 2
  
  // output
  document.getElementById('semiperimeter').innerHTML = 'Semi perimeter is: ' + semi perimeter + ' cm '
  }

function calculate() {
  // input
  const semiperimeterOfATriangle = parseInt(document.getElementById('semi-perimeter-of-a-triangle').value)
  const sideAOfTriangle = parseInt(document.getElementById('side-a-of-triangle').value)
  const sideBOfTriangle = parseInt(document.getElementById('side-b-of-triangle').value)
  const sideCOfTriangle = parseInt(document.getElementById('side-c-of-triangle').value)

  // process
  const area = console (Math.sqrt(semiperimeterOfATriangle * (semiperimeterOfATriangle - sideAOfTriangle) * (semiperimeterOfATriangle - sideBOfTriangle) * (semiperimeterOfATriangle - sideCOfTriangle)))
  
  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
  }

