pragma solidity >=0.4.24;
//"SPDX-License-Identifier: UNLICENSED" 

contract TypesConversion {
    uint8 a = 255; // a is 1 bytes unsigned integer
    uint256 ownerInitialBalance; // uint256

    function conversion() public {
        int256 b; // b is 32 bytes signed integer...256 bits
        b = a; // Compilation successful, since a 8bytes type can easily fit in a 32bytes type
        // a = b;      // Fails compilation as the maximum value of int256 cannot be accomodated in uint8
        a = uint8(b); // Explicit type coversion...converting a 32bytes to 1bytes
    }
}
