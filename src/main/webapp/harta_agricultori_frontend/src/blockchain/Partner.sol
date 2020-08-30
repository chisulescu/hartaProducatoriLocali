pragma solidity ^0.4.24;

contract Partner {
    struct PartnerData {
        bytes32 categorie;
        bytes32 descriere_producator;
        bytes32 judet;
        bytes32 nume_firma;
        bytes32 producator;
        bytes32 sub_categorie;
        bytes32 tara;
        bytes32 latitudine;
        bytes32 longitudine;
        bytes32 email;
        bytes32 telefon;
        bytes32 website;
        bytes32 facebook;
    }

    address[] public partnerList;
    mapping(address => PartnerData) public partnerMap;

    function registerPartner(string _categorie, string _descriere_producator, string _judet, string _nume_firma, string _producator,
                            string _sub_categorie, string _tara, string _latitudine, string _longitudine, string _email, string _telefon, string _website, string _facebook) public {
        partnerMap[msg.sender] = PartnerData(
            stringToBytes32(_categorie),
            stringToBytes32(_descriere_producator),
            stringToBytes32(_judet),
            stringToBytes32(_nume_firma),
            stringToBytes32(_producator),
            stringToBytes32(_sub_categorie),
            stringToBytes32(_tara),
            stringToBytes32(_latitudine),
            stringToBytes32(_longitudine),
            stringToBytes32(_email),
            stringToBytes32(_telefon),
            stringToBytes32(_website),
            stringToBytes32(_facebook));
        partnerList.push(msg.sender);
    }

    function getPartnerList() public view returns (address[]) {
        return partnerList;
    }

    function stringToBytes32(string memory source) public pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            result := mload(add(source, 32))
        }
    }

    function bytes32ToString(bytes32 _bytes32) public pure returns (string) {
        bytes memory bytesArray = new bytes(32);
        for (uint256 i; i < 32; i++) {
            bytesArray[i] = _bytes32[i];
        }
        return string(bytesArray);
    }

    function getPartner(address _partnerAddress) public view returns(string, string, string, string, string) {
        return (
            bytes32ToString(partnerMap[_partnerAddress].categorie),
            bytes32ToString(partnerMap[_partnerAddress].descriere_producator),
            bytes32ToString(partnerMap[_partnerAddress].sub_categorie),
            bytes32ToString(partnerMap[_partnerAddress].nume_firma),
            bytes32ToString(partnerMap[_partnerAddress].producator)
            );
    }

    function getPartnerPlace(address _partnerAddress) public view returns(string, string, string, string) {
        return (
            bytes32ToString(partnerMap[_partnerAddress].tara),
            bytes32ToString(partnerMap[_partnerAddress].judet),
            bytes32ToString(partnerMap[_partnerAddress].latitudine),
            bytes32ToString(partnerMap[_partnerAddress].longitudine)
            );
    }

    function getPartnerInfo(address _partnerAddress) public view returns(string, string, string, string) {
        return (
            bytes32ToString(partnerMap[_partnerAddress].email),
            bytes32ToString(partnerMap[_partnerAddress].telefon),
            bytes32ToString(partnerMap[_partnerAddress].website),
            bytes32ToString(partnerMap[_partnerAddress].facebook)
            );
    }
}