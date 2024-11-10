
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> pairIdx;

    for (int i = 0; i < nums.size(); ++i) {
        int num = nums[i];
        if (pairIdx.find(target - num) != pairIdx.end()) {
            // Return the actual elements instead of their indices
            return {num, target - num};
        }
        pairIdx[num] = i;
    }

    return {};        
}

int main() {
    vector<int> nums;
    nums.push_back(1);
    nums.push_back(3);
    nums.push_back(2);
    nums.push_back(5);
    int target = 9;

    vector<int> result = twoSum(nums, target);

    if (!result.empty()) {
        cout << "Elements that sum up to " << target << " are: " << result[0] << " and " << result[1] << endl;
    } else {
        cout << "No two elements found that sum up to " << target << endl;
    }

    return 0;
}
