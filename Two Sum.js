// Brute force
const twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++ ) {
    for(let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue
      }
      if ((nums[i] + nums[j]) === target) {
        return [i, j]
      }
    }
  }
}

// One pass hash
const twoSum = function(nums, target) {
  const hashMap = new Map()
  
  for(let i = 0; i < nums.length; i++ ) {
    const complement = target - nums[i]
    
    if (hashMap.has(complement)) {
      return [i, hashMap.get(complement)]
    }

    hashMap.set(nums[i], i);
  }
}