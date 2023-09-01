function solution(nums) {
    const numsSet = new Set(nums);
    const typesCount = numsSet.size;
    const maxGetCount = nums.length / 2;
    
    if(typesCount < maxGetCount) return typesCount;
    else return maxGetCount;
}