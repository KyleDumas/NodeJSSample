/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var expect = require("chai").expect;
var interestCalc = require("../public/js/interestCalculator");

describe("Interest Calculations", function() {
    describe("Constraints", function() {
        describe("Minimums", function() {
            it("Minimum starting amount should be 0.", function() {
                interestCalc.calculate(-1, 0, -1, -1);
                expect(interestCalc.getStartAmount()).to.equal(0);
            });
            it("Minimum years amount should be 1.", function() {
                expect(interestCalc.getYearsToSave()).to.equal(1);
            });
            it("Minimum rate amount should be 0%.", function() {
                expect(interestCalc.getRate()).to.equal(0);
            });
            it("Minimum contributions amount should be 0.", function() {
                expect(interestCalc.getContributionAmount()).to.equal(0);
            });
        });

        describe("Maximums", function() {
            it("Maximum starting amount should be $100k.", function () {
                interestCalc.calculate(100001, 101, 12.01, 20001);
                expect(interestCalc.getStartAmount()).to.equal(100000);
            });
            it("Maximum years amount should be 100.", function () {
                expect(interestCalc.getYearsToSave()).to.equal(100);
            });
            it("Maximum rate amount should be 12%.", function () {
                expect(interestCalc.getRate()).to.equal(12);
            });
            it("Maximum contributions amount should be $20k.", function () {
                expect(interestCalc.getContributionAmount()).to.equal(20000);
            });
        });

        describe("Functionality", function() {
            it("Data is out of range (0), should return null", function () {
                expect(interestCalc.getValueForYear(0)).to.equal(null);
            });
            it("Data is out of range (101), should return null", function () {
                expect(interestCalc.getValueForYear(101)).to.equal(null);
            });
        });
    });
    describe("Calculations and Data", function() {
        describe("Calculation", function() {
            it("There should be 10 years worth of data", function () {
                interestCalc.calculate(1000, 10, 0.25, 50);
                expect(interestCalc.getYearsCount()).to.equal(10);
            });
            it("Year 1 is not 1064", function () {
                expect(parseFloat(interestCalc.getValueForYear(1))).to.equal(1604);
            });
            it("Year 3 is not 2816.53", function () {
                expect(parseFloat(interestCalc.getValueForYear(3))).to.equal(2816.53);
            });
            it("Year 6 is not 4646.73", function () {
                expect(parseFloat(interestCalc.getValueForYear(6))).to.equal(4646.73);
            });
            it("Year 10 is not 7108.40", function () {
                expect(parseFloat(interestCalc.getValueForYear(10))).to.equal(7108.40);
            });
        });
        describe("Data", function() {
            it("Data array should return 1604, 2209.51, 2816.53", function () {
                interestCalc.calculate(1000, 3, 0.25, 50);
                expect(interestCalc.getData()).to.contains('1604.00');
                expect(interestCalc.getData()).to.contains('2209.51');
                expect(interestCalc.getData()).to.contains('2816.53');
            });
            it("Year array should return 1, 2, 3", function () {
                expect(interestCalc.getYearsArray()).to.contains('1');
                expect(interestCalc.getYearsArray()).to.contains('2');
                expect(interestCalc.getYearsArray()).to.contains('3');
            });
        });
    });
});