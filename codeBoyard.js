

 class GameBoyard {
    constructor(listCode){
        this.listCode = listCode;
        this.enigme = undefined; 
        this.indexIndice = 0; 
        this.init();
    }

    init(){
        let i = Math.floor(Math.random() * listCode.length); 
        this.enigme = listCode[i]; 
        console.log('nouveau enigme généré'); 
    }

    checkCode(userCode) {
        let codeUser = userCode.toLowerCase().trim();
        if (codeUser === this.enigme.code){
            //code trouvé
            console.log('code trouver par utilisateur');
            return true; 
        }
        else {
            //code non trouver
            console.log('code non trouvé');
            return false; 
        }

    }

    getIndice(){
        if(this.enigme == undefined){
            throw "Error enigme non initialisé"; 
        }
        this.indexIndice++
        if (this.enigme.indices.length <= this.indexIndice)
            this.indexIndice = 0;
        return this.enigme.indices[this.indexIndice]; 
    }


}

module.exports = GameBoyard;