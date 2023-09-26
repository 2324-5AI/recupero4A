window.onload = async function(){
    console.log("prova");
    let busta = await fetch("http://localhost/getStanze", {method:'GET'});
    let risposta = await busta.json();
    if(risposta.cod == 0){
        console.log(risposta);

        let stanze = document.getElementById("cardGroup");
        stanze.innerHTML = "";
        for(let item of risposta.stanze){
            let card = `<div class="card">
                <img src="img/camera.png">
                <div class="dettagli">
                    <div>
                        <input type="checkbox" id="checkTv1" ${item.tv=="1"?"checked":""}>
                        <label for="checkTv1">
                            <span class="material-symbols-outlined">tv</span>
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkBalcone1" ${item.balcone=="1"?"checked":""} >
                        <label for="checkBalcone1">
                            <span class="material-symbols-outlined">balcony</span>
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkMare1" ${item.vistaMare=="1"?"checked":""} >
                        <label for="checkMare1">
                            <span class="material-symbols-outlined">beach_access</span>
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkMatrimoniale1" ${item.matrimoniale=="1"?"checked":""}>
                        <label for="checkMatrimoniale1">
                            <span class="material-symbols-outlined">bed</span>
                        </label>
                    </div>
                </div>
            </div>`;
            stanze.innerHTML += card;
        }


    }else{
        console.log("Errore:" + risposta.desc);
    }
};