package com.softuni.entity;

/**
 * Created by L on 5.8.2017 г..
 */
public class Calculator {

    private double leftOperand;
    private double rightOperand;
    private String operator;

    public Calculator(double leftOperand, double rightOperand, String operator) {
        this.leftOperand = leftOperand;
        this.rightOperand = rightOperand;
        this.operator = operator;
    }

    public double calculateResult (){
        double result;

        switch (this.getOperator()){

            case "+":
                result = this.getLeftOperand() + this.getRightOperand();
                break;

            case "-":
                result = this.getLeftOperand() - this.getRightOperand();
                break;

            case "*":
                result = this.getLeftOperand() * this.getRightOperand();
                break;

            case "/":
                result = this.getLeftOperand() / this.getRightOperand();
                break;

                default:
                    result = 0;
                    break;
        }

        return result;
    }

    public double getLeftOperand() {
        return leftOperand;
    }

    public void setLeftOperand(double leftOperand) {
        this.leftOperand = leftOperand;
    }

    public double getRightOperand() {
        return rightOperand;
    }

    public void setRightOperand(double rightOperand) {
        this.rightOperand = rightOperand;
    }

    public String getOperator() {
        return operator;
    }

    public void setOperator(String operator) {
        this.operator = operator;
    }

}
