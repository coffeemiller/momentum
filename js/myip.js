const myipText = document.querySelector('#myIp');


function getIp() {
    fetch(
            `https://api.ip.pe.kr/json`
        )
        // .then((res) => {
        //     const jsBody = document.querySelector('body');
        //     // const temp = result.main.temp;
        //     // const name = result.name;
        //     // myipText.innerText = `MY IP : ${ip}`;
        //     console.log(jsBody);
        // })
        .then((res) => {
            return res.json();
        })
        .then(response => {
            // console.log(response.ip, response.country_code, response.country_name.ko);
            const ip = response.ip;
            const country = response.country_name.en;
            myipText.innerText = `${ip} / ${country}`;
        })
        .catch((err) => {
            console.log(err);
        });
}
getIp();