import web3 from "./web3";
import partnerContract from "./partner"
import userContract from "./user"

function getPartnerBasic(fromAddress, partnerAddress, callback) {
    partnerContract.methods.getPartner(partnerAddress).call({from: fromAddress})
        .then((result) => {return callback(result)})
}

function getPartnerInfo(fromAddress, partnerAddress, callback) {
    partnerContract.methods.getPartnerInfo(partnerAddress).call({from: fromAddress})
        .then((result) => {return callback(result)})
}

function getPartnerPlace(fromAddress, partnerAddress, callback) {
    partnerContract.methods.getPartnerPlace(partnerAddress).call({from: fromAddress})
        .then((result) => {return callback(result)})
}

function getAllInfo(fromAddress, partnerAddress, callback) {
    getPartnerBasic(fromAddress, partnerAddress, (result1) => {
        getPartnerInfo(fromAddress, partnerAddress, (result3) => {
            getPartnerPlace(fromAddress, partnerAddress, (result2) => {
                let partner = {
                    tara: removeLastCharacters(result2[0]),
                    producator: removeLastCharacters(result1[4]),
                    nume_firma: removeLastCharacters(result1[3]),
                    judet: removeLastCharacters(result2[1]),
                    categorie: removeLastCharacters(result1[0]),
                    sub_categorie: removeLastCharacters(result1[2]),
                    descriere_producator: removeLastCharacters(result1[1]),
                    email: removeLastCharacters(result3[0]),
                    telefon: removeLastCharacters(result3[1]),
                    website: removeLastCharacters(result3[2]),
                    facebook: removeLastCharacters(result3[3]),
                    latitude: removeLastCharacters(result2[2]),
                    longitude: removeLastCharacters(result2[3])
                }
                return callback(partner)
            })
        })
    })
}

export function getAllPartners(callback) {
    web3.eth.getAccounts().then((accounts) => {
        partnerContract.methods.getPartnerList().call({from: accounts[0]})
            .then((partnerList) => {
                let partners = []
                let requests = partnerList.map((partnerAddress) => {
                    return new Promise((resolve => {
                        getAllInfo(accounts[0], partnerAddress, (partner) => {
                            partners.push(partner)
                            resolve()
                        })
                    }))
                })

                Promise.all(requests).then(() => {
                    return callback(partners)
                })
            })
    });
}

export async function registerPartner(partner) {
    const accounts = await web3.eth.getAccounts();

    await partnerContract.methods.registerPartner(
        partner.categorie.toString(),
        partner.descriere_producator.toString(),
        partner.judet.toString(),
        partner.nume_firma.toString(),
        partner.producator.toString(),
        partner.sub_categorie.toString(),
        partner.tara.toString(),
        partner.latitude.toString(),
        partner.longitude.toString(),
        partner.email.toString(),
        partner.telefon.toString(),
        partner.website.toString(),
        partner.facebook.toString()
    ).send({from: accounts[0], gas: 3000000})
        .then((result) => {
            console.log(result)})
        .catch((error) => console.log(error))
}

function removeLastCharacters(word) {
    let letter = word.charAt(word.length - 1)
    let cleanWord = ''
    for(var i = 0; i < word.length; i++) {
        if(word.charAt(i) !== letter) cleanWord += word.charAt(i)
    }
    return cleanWord
}

function getUserById(fromAddress, id, callback) {
    userContract.methods.getUserById(id).call({from: fromAddress})
        .then((result) => {
            let user = {
                username: result[0],
                password: result[1],
                email: result[2]
            }
            return callback(user)
        })
}

export function getAllUsers(callback) {
    web3.eth.getAccounts().then((accounts) => {
        userContract.methods.getUserListLength().call({from: accounts[0]})
            .then((size) => {
                let users = []
                let requests = [...Array(parseInt(size)).keys()].map((id) => {
                    return new Promise((resolve => {
                        getUserById(accounts[0], id, (user) => {
                            users.push(user)
                            resolve()
                        })
                    }))
                })

                Promise.all(requests).then(() => {
                    return callback(users)
                })
            })
    })
}

export async function registerUser(user) {
    const accounts = await web3.eth.getAccounts();

    await userContract.methods.registerUser(
        user.username.toString(),
        user.password.toString(),
        user.email.toString()
    ).send({from: accounts[0], gas: 3000000})
        .then((result) => {
            console.log(result)})
        .catch((error) => console.log(error))
}

export function checkUserByUsernameAndPassword(username, password, callback) {
    web3.eth.getAccounts().then((accounts) => {
        userContract.methods.checkUserByUsernameAndPassword(username, password).call({from: accounts[0]})
            .then((email) => {
                return callback(email)
            })
    })
}