import React from 'react';
import Calculator from '../containers/Calculator';
import { render, fireEvent } from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator />)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  // calculator.add() - add 1 to 4 and get 5
  it('should increase running total on number enter', () => {
    const number1 = container.getByTestId('number1');
    const number4 = container.getByTestId('number4');
    const operator_add = container.getByTestId('operator_add');
    const runningTotal = container.getByTestId('running-total');
    const equalButton = container.getByTestId('operator-equals')
    fireEvent.click(number1);
    fireEvent.click(operator_add);
    fireEvent.click(number4);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual('5');
  })

  // calculator.subtract() subtract 4 from 7 and get 3
  it('should decrease running total on number enter', () => {

    const number4 = container.getByTestId('number4');
    const number7 = container.getByTestId('number7');
    const operatorSubtract = container.getByTestId('operator-subtract');
    const runningTotal = container.getByTestId('running-total');
    const equalButton = container.getByTestId('operator-equals')
    fireEvent.click(number7);
    fireEvent.click(operatorSubtract);
    fireEvent.click(number4);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual('3');

  })

  // calculator.multiply() - multiply 3 by 5 and get 15
  it('should multiply entered numbers', () => {

    const number3 = container.getByTestId('number3');
    const number5 = container.getByTestId('number5');
    const operatorMultiply = container.getByTestId('operator-multiply');
    const runningTotal = container.getByTestId('running-total');
    const equalButton = container.getByTestId('operator-equals')
    fireEvent.click(number3);
    fireEvent.click(operatorMultiply);
    fireEvent.click(number5);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual('15');

  })


  // calculator.divide() - divide 21 by 7 and get 3
  it('should divide entered numbers', () => {

    const number2 = container.getByTestId('number2');
    const number1 = container.getByTestId('number1');
    const number7 = container.getByTestId('number7');
    const operatorDivide = container.getByTestId('operator-divide');
    const runningTotal = container.getByTestId('running-total');
    const equalButton = container.getByTestId('operator-equals')
    fireEvent.click(number2);
    fireEvent.click(number1);
    fireEvent.click(operatorDivide);
    fireEvent.click(number7);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual('3');

  })


  // calculator.numberClick() - concatenate multiple number button clicks
  it('should concatenated entered numbers', () => {

    const number1 = container.getByTestId('number1');
    const number2 = container.getByTestId('number2');
    const number3 = container.getByTestId('number3');

    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number1);
    fireEvent.click(number2);
    fireEvent.click(number3);
    expect(runningTotal.textContent).toEqual('123');

  })


  // calculator.operatorClick() - chain multiple operations together
  it('should chain entered operations', () => {

    const number1 = container.getByTestId('number1');
    const number2 = container.getByTestId('number2');
    const number3 = container.getByTestId('number3');
    const number4 = container.getByTestId('number4');
    const operatorAdd = container.getByTestId('operator_add');
    const operatorSubtract = container.getByTestId('operator-subtract');
    const operatorDivide = container.getByTestId('operator-divide');
    const operatorMultiply = container.getByTestId('operator-multiply');
    const runningTotal = container.getByTestId('running-total');
    const equalButton = container.getByTestId('operator-equals')
    fireEvent.click(number1);
    fireEvent.click(operatorAdd);
    fireEvent.click(number3);
    fireEvent.click(operatorSubtract);
    fireEvent.click(number2);
    fireEvent.click(operatorMultiply);
    fireEvent.click(number4);
    fireEvent.click(operatorDivide);
    fireEvent.click(number4);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual('2');

  })


  // // calculator.clearClick() - clear the running total without affecting the calculation
  // it('should clear total and keep calculation', () => {

  //   const number1 = container.getByTestId('number1');
  //   const number2 = container.getByTestId('number2');
  //   const number3 = container.getByTestId('number3');
  //   const operatorAdd = container.getByTestId('operator_add');
  //   const operatorMultiply = container.getByTestId('operator-multiply');
  //   const runningTotal = container.getByTestId('running-total');
  //   const equalButton = container.getByTestId('operator-equals')
  //   const clearButton = container.getByTestId('clear')
  //   fireEvent.click(number1);
  //   fireEvent.click(operatorAdd);
  //   fireEvent.click(number3);
  //   fireEvent.click(operatorMultiply);
  //   fireEvent.click(number2);
  //   fireEvent.click(number3);
  //   fireEvent.click(clearButton);
  //   fireEvent.click(equalButton);
  //   expect(runningTotal.textContent).toEqual('4');

  // });

})