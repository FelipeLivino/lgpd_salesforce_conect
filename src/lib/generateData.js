const { fakerBr, utilsBr } = require('js-brasil');

class GenerateData {

    getVeicleValue() {
        return fakerBr.veiculo();
    }

    getPhoneValue() {
        return fakerBr.telefone();
    }

    getSiteValue() {
        return fakerBr.site()
    }
    
    getRgPlateValue() {
        return fakerBr.rg();
    }

    getPlateValue() {
        return fakerBr.placa();
    }

    getIncricaoEstadualValue(estado) {
        return fakerBr.inscricaoestadual(estado);
    }

    getAddressValue() {
        return fakerBr.endereco();
    }

    getDateValue() {
        return fakerBr.data();
    }

    getDateValue(min, max) {
        return fakerBr.data({
            idadeMin: min,
            idadeMax: mac
        });
    }

    getCpfValue() {
        return fakerBr.cpf()
    }

    getCnpjValue() {
    return fakerBr.cnpj();
    }

    getCnhValue() {
        return fakerBr.cnh();
    }

    getChassiValue() {
        return fakerBr.chassi();
    }

    getCepValue() {
        return fakerBr.cep();
    }

    getMobilePhoneValue() {
        return fakerBr.celular();
    }

    getTextValue(value) {
        return _generateString(value.length);
    }

    getNumberValue(value) {
        return _generateNumber(value.length);
    }

    getMailValue(email) {
        let baseMail = email.split('@')[0];
        let validMail = _generateString(email.length) + _generateNumber(5) + '@test.com';
        return validMail;
    }

   
     
    _generateString(len) {
        const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let value = '';
        for (var i = 0; i < len; i++) {
            let position = _generateRandomNumber(0, alphabet.length);
            value += alphabet[position];
        }
        return value;
    }

    _generateNumber(len) {
        const alphabet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
        let value = '';
        for (var i = 0; i < len; i++) {
            let position = _generateRandomNumber(0, alphabet.length);
            value += alphabet[position];
        }
        return value;
    }

    _generateRandomNumber( min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


}



module.exports = GenerateData;