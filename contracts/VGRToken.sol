pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/token/PausableToken.sol";
import "zeppelin-solidity/contracts/token/MintableToken.sol";
import "./BurnableToken.sol";

contract VGRToken is BurnableToken, PausableToken, MintableToken {
    string public constant symbol = "VGR";

    string public constant name = "VIRTUALGROUND";

    uint8 public constant decimals = 18;

    function burn(uint256 _value) public whenNotPaused {
        super.burn(_value);
    }
}
