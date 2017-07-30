function solve(input){
    let nums = input.join(" ").split(" ").filter(x => x).map(Number).sort((a,b) => a - b);

    if (nums[0] + nums[1] === nums[2]){
        print(nums[0], nums[1], nums[2]);
    }
    else if (nums[0] + nums[2] === nums[1]){
        print (nums[0], nums[2], nums[1]);
    }
    else if (nums[1] + nums[2] === nums[0]){
        print (nums[1], nums[2], nums[0])
    }
    else{
        console.log("No");
    }

    function print(num1, num2, result) {
        console.log(`${num1} + ${num2} = ${result}`);
    }
}
