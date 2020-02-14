pragma solidity ^0.4.24;

library SafeMath {

  /**
  * @dev Multiplies two numbers, throws on overflow.
  */
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    if (a == 0) {
      return 0;
    }
    uint256 c = a * b;
    assert(c / a == b);
    return c;
  }

  /**
  * @dev Integer division of two numbers, truncating the quotient.
  */
  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    // assert(b > 0); // Solidity automatically throws when dividing by 0
    uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  /**
  * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).
  */
  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  /**
  * @dev Adds two numbers, throws on overflow.
  */
  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}

contract IVIP181 {
    event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);
    event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);
    event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);

    function balanceOf(address _owner) public view returns (uint256);
    function ownerOf(uint256 _tokenId) public view returns (address);
    function approve(address _to, uint256 _tokenId) public;
    function getApproved(uint256 _tokenId) public view returns (address);
    function transferFrom(address _from, address _to, uint256 _tokenId) public;
}

contract TokenFish {
    using SafeMath for uint256;
    
    event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);
    event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);
    event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);

    struct Fish {
        string codeName;
    }
    
    Fish[] public fishes;

    mapping (uint256 => address) fishToOwner;
    mapping (address => uint256) ownerFishCount;

    function _createFish(string _codeName) internal {
        uint256 id = fishes.push(Fish(_codeName)) - 1;
        fishToOwner[id] = msg.sender;
        ownerFishCount[msg.sender] = ownerFishCount[msg.sender].add(1);
    }
    
    function createFish(string _codeName) public {
        _createFish(_codeName);
    }
    
    function getFishesByOwner(address _owner) external view returns(uint256[]) {
        uint256[] memory result = new uint[](ownerFishCount[_owner]);
        uint256 counter = 0;
        for (uint256 i = 0; i < fishes.length; i++) {
          if (fishToOwner[i] == _owner) {
            result[counter] = i;
            counter++;
          }
        }
        return result;
    }
    
    function getFishByID(uint256 _fishId) public view returns (string codeName) {
        return (fishes[_fishId].codeName);
    }

    function balanceOf(address _owner) public view returns (uint256) {
        return ownerFishCount[_owner];
    }
    
    function ownerOf(uint256 _tokenId) public view returns (address) {
        return fishToOwner[_tokenId];
    }
    
    function _transfer(address _from, address _to, uint256 _tokenId) private {
        ownerFishCount[_to] = ownerFishCount[_to].add(1);
        ownerFishCount[msg.sender] = ownerFishCount[msg.sender].sub(1);
        fishToOwner[_tokenId] = _to;
        emit Transfer(_from, _to, _tokenId);
    }
    
    function simpleTransfer(address _to, uint256 _tokenId) public {
        require(msg.sender == ownerOf(_tokenId));
        _transfer(msg.sender,_to,_tokenId);
    }
   
    uint256 num;
    
    function setValue(uint256 _num) public {
        num = _num;
    }
    
    function getValue() public view returns (uint256) {
        return num;
    }


}