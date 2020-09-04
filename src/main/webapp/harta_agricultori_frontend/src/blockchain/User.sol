pragma solidity ^0.4.24;

contract User {
    struct UserData {
        uint id;
        string username;
        string password;
        string email;
    }

    uint size = 0;
    mapping(uint => UserData) public userMap;

    function registerUser(string _username, string _password, string _email) public {
        uint id = size;
        userMap[id] = UserData(
            id,
            _username,
            _password,
            _email
        );
        size++;
    }

    function getUserListLength() public view returns (uint) {
        return size;
    }

    function getUserById(uint _id) public view returns(string, string, string) {
        if(_id > size) return ("", "", "");
        return (
            userMap[_id].username,
            userMap[_id].password,
            userMap[_id].email
        );
    }

    function checkUserByUsernameAndPassword(string _username, string _password) public view returns (string) {
        for (uint k=0; k<size; k++) {
            if (equalStrings(userMap[k].username, _username) && equalStrings(userMap[k].password, _password)) {
                return userMap[k].email;
            }
        }
        return "";
    }

    function equalStrings (string memory a, string memory b) private pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))) );
    }
}