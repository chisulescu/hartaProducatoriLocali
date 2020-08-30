import web3 from "./web3";
import contract from "./partner"

function getPartnerBasic(fromAddress, partnerAddress, callback) {
    contract.methods.getPartner(partnerAddress).call({from: fromAddress})
        .then((result) => {return callback(result)})
}

function getPartnerInfo(fromAddress, partnerAddress, callback) {
    contract.methods.getPartnerInfo(partnerAddress).call({from: fromAddress})
        .then((result) => {return callback(result)})
}

function getPartnerPlace(fromAddress, partnerAddress, callback) {
    contract.methods.getPartnerPlace(partnerAddress).call({from: fromAddress})
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
        contract.methods.getPartnerList().call({from: accounts[0]})
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



    // partnerList.forEach((address) => {
    //
    // })


    // let result1, result2, result3
    // await contract.methods.getPartner().call({from: accounts[0]})
    //     .then((result) => {
    //         console.log(result)
    //         result1 = result})
    //
    // await contract.methods.getPartnerInfo().call({from: accounts[0]})
    //     .then((result) => {
    //         console.log(result)
    //         result3 = result})
    //
    // await contract.methods.getPartnerPlace().call({from: accounts[0]})
    //     .then((result) => {
    //         console.log(result)
    //         result2 = result})

    // let partner = {
    //     tara: removeLastCharacters(result2[0]),
    //     producator: removeLastCharacters(result1[4]),
    //     nume_firma: removeLastCharacters(result1[3]),
    //     judet: removeLastCharacters(result2[1]),
    //     categorie: removeLastCharacters(result1[0]),
    //     sub_categorie: removeLastCharacters(result1[2]),
    //     descriere_producator: removeLastCharacters(result1[1]),
    //     email: removeLastCharacters(result3[0]),
    //     telefon: removeLastCharacters(result3[1]),
    //     website: removeLastCharacters(result3[2]),
    //     facebook: removeLastCharacters(result3[3]),
    //     latitude: removeLastCharacters(result2[2]),
    //     longitude: removeLastCharacters(result2[3])
    // }
    //
    // console.log("no amu ii amu: ")
    // console.log(partner)
}

export async function registerPartner(partner) {
    const accounts = await web3.eth.getAccounts();

    await contract.methods.registerPartner(
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