var interestCalculator = {
    start: 0,
    years: 1,
    rate: 0,
    contrib: 0,
    data: [],

    calculate: function(startAmt, yearsAmt, rateAmt, contribAmt) {
        start = startAmt >= 0 ? startAmt : 0;
        years = yearsAmt >= 1 ? yearsAmt : 1;
        rate = rateAmt >= 0 ? rateAmt : 0;
        contrib = contribAmt >= 0 ? contribAmt : 0;

        if (start > 100000) start = 100000;
        if (years > 100) years = 100;
        if (rate > 12) rate = 12;
        if (contrib > 20000) contrib = 20000;

        data = [];

        var curAmt = start;
        for (var year = 1; year <= years; year++) {
            // Add Contributions for Each month
            for (var month = 1; month <= 12; month++) {
                curAmt += contrib;
            }

            curAmt = curAmt * (1 + (rate * .01));
            data[year - 1] = curAmt.toFixed(2);
        }
    },
    getValueForYear: function(year) {
        if ((year > data.length) || (year < 1))
            return null;
        else
            return data[year - 1];
    },
    getData: function() {
        return data;
    },
    getYearsArray: function() {
        var yearArray = [];
        for (var i = 1; i<= years; i++)
            yearArray[i - 1] = i + "";
        return yearArray;
    },
    getStartAmount: function () {return start; },
    getYearsToSave: function () {return years; },
    getRate: function () {return rate; },
    getContributionAmount: function () {return contrib; },
    getYearsCount: function() {return data.length; }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = interestCalculator;
}