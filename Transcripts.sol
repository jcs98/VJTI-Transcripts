pragma solidity ^0.5.0;

contract Transcripts {
    address payable public owner;
    // mapping from student id hash to cpi hash
    mapping(bytes32 => bytes32) private transcripts;
    
    constructor() public {
        owner = msg.sender;
    }
    
    // helper hash function
    function hash(string memory _str) private pure returns(bytes32) {
        return  keccak256(abi.encode(_str));
    }
    
    function addTranscript(string memory _studentId, string memory _CPI) public {
        // only owner can add transcripts
        require(msg.sender == owner);
        transcripts[hash(_studentId)] = hash(_CPI);
    }
    
    function verifyTranscript(string memory _studentId, string memory _CPI) public view returns(bool) {
        return (transcripts[hash(_studentId)] == hash(_CPI));
    }
}