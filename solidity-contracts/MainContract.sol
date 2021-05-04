pragma solidity >=0.4.24;
//"SPDX-License-Identifier: UNLICENSED" 

contract MainContract {
    uint256 internal value;

    constructor(uint256 amount) public {
        value = amount;
    }

    function deposit(uint256 amount) public {
        value += amount;
    }

    function withdraw(uint256 amount) public {
        value -= amount;
    }
}
