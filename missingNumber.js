var missingNumber = function (nums) {
    for (i = 0; i < nums.length; i++) {
        if (!nums.includes(i)) {
            return i;
        }
    }
    return nums.length;

};


var missingNumber = function (nums) {
    const length = nums.length;
    let total = 0;
    let totalFromArray = 0;
    for (let i = 0; i < length; i++) {
        total += i;
        totalFromArray += nums[i];
    }
    total += length;
    return total - totalFromArray;
};


