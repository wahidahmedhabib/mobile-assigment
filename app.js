

var mobiles = {
    iphone: {
        iphonese: {
            modle: 2010,
            price: 23999,
            name: "iphone-se",
            features: "Lock Screen. Lock Screen gallery",
            advantage: "The Apple ecosystem.",
            storage: "64GB RAM 256GB ",
            str: "164GB RAM 556GB ",
            color: ['Red ', 'Blue', 'Green'],
            image: '/mobiless_ui/imges/iph1.jpg'

            // image :  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fie.selectonline.com%2Fiphone-14-pro-max&psig=AOvVaw0s8Jc8yQLYQou3FzLgmdbu&ust=1685680528784000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCItLqfof8CFQAAAAAdAAAAABAE"
        },
        iphoneX: {
            modle: 2007,
            name: "iphoneX",
            storage: "64GB RAM 256GB ",
            image: '/mobiless_ui/imges/iph2.jpg',
            SIM: "Mini-SIM",
            price: 99999,
            Internal: "4/8/16GB",
            camra: "12 MP",
            Loudspeaker: true,
            wi_fi: "802.11b/g",
            Sensors: "Accelerometer, proximity",
            bettery: "Li-Ion 1400 mAh, non-removable",

        },
        iphone_1: {
            modle: 2012,
            name: "iphone_1",
            features: "Lock Screen. Lock Screen gallery",
            advantage: "Chrome,",
            storage: "74GB RAM 300GB ",
            price: 123999,
            image: '/mobiless_ui/imges/iph2.jpg'

        },
        iphone_2: {
            modle: 2009,
            name: "iphone2",
            features: "Lock Screen. Lock Screen gallery",
            advantage: "Safarii",
            storage: "64GB RAM 256GB ",
            image: '/mobiless_ui/imges/iph2.jpg',
            SIM: "Mini-SIM",
            Internal: "4/8/16GB",
            camra: "12 MP",
            Loudspeaker: true,
            wi_fi: "802.11b/g",
            price: 44999,
            Sensors: "Accelerometer, proximity",
            bettery: "Li-Ion 1400 mAh, non-removable",
        },
        iphone3: {
            advantage: "Safarii",
            storage: "64GB RAM 256GB ",
            image: '/mobiless_ui/imges/iph2.jpg',
            SIM: "Mini-SIM",
            price: 56999,
            Internal: "4/8/16GB",
            camra: "12 MP",
            Loudspeaker: true,
            wi_fi: "802.11b/g",
            Sensors: "Accelerometer, proximity",
            bettery: "Li-Ion 1400 mAh, non-removable",
        },

    },
    sumsung: {
        sm_1: {
            Display: "Infinite (nominal), 4.498 (sunlight)",
            Sensors: "Fingerprint ",
            WLAN: "Wi-Fi 802.11 ",
            type: "Li-Ion 3400 mAh, non-removable",
            Bluetooth: "5.0, A2DP,aptX",
            Charging: "15W wired, PD2.0",
            Models: "SM-G973F",
            Price: "About 300$",
            Performance: "AnTuTu: 328366",
            Loudspeaker: "Voice 82dB",
            Audio: "Noise -92.2dB"
        },
        sm_2: {
            Display: "Infinite (nominal), 4.498 (sunlight)",
            Sensors: "Fingerprint ",
            WLAN: "Wi-Fi 802.11 ",
            type: "Li-Ion 3400 mAh, non-removable",
            Bluetooth: "5.0, A2DP,aptX",
            Charging: "15W wired, PD2.0",
            Models: "SM-G973F",
            Price: "About 300$",
            Performance: "AnTuTu: 328366",
            Audio: "Noise -92.2dB",
            Loudspeaker: "Voice 82dB",
        },
        sm_3: {
            Display: "Infinite (nominal), 4.498 (sunlight)",
            Sensors: "Fingerprint ",
            WLAN: "Wi-Fi 802.11 ",
            type: "Li-Ion 3400 mAh, non-removable",
            Bluetooth: "5.0, A2DP,aptX",
            Charging: "15W wired, PD2.0",
            Models: "SM-G973F",
            Price: "About 300$",
            Performance: "AnTuTu: 328366",
            Loudspeaker: "Voice 82dB",
            Audio: "Noise -92.2dB"

        },
        sm_4: {
            Display: "Infinite (nominal), 4.498 (sunlight)",
            Sensors: "Fingerprint ",
            WLAN: "Wi-Fi 802.11 ",
            type: "Li-Ion 3400 mAh, non-removable",
            Bluetooth: "5.0, A2DP,aptX",
            Charging: "15W wired, PD2.0",
            Models: "SM-G973F",
            Price: "About 300$",
            Performance: "AnTuTu: 328366",
            Loudspeaker: "Voice 82dB",
            Audio: "Noise -92.2dB"

        },
        sm_5: {
            Display: "Infinite (nominal), 4.498 (sunlight)",
            Sensors: "Fingerprint ",
            WLAN: "Wi-Fi 802.11 ",

            type: "Li-Ion 3400 mAh, non-removable",
            Bluetooth: "5.0, A2DP,aptX",
            Charging: "15W wired, PD2.0",

            Models: "SM-G973F",
            Price: "About 300$",
            Performance: "AnTuTu: 328366",

            Loudspeaker: "Voice 82dB",
            Audio: "Noise -92.2dB"

        }

    }
}

var mob1 = document.getElementById('mob')
var div = document.createElement('div')
mob1.append(div)
div.setAttribute('class', 'mob_li')
console.log(div)
div.innerHTML =
     `
    <div class="card">
        <div class="img">
            <img src=" ${mobiles.iphone.iphonese.image} " alt="">
        </div>
        <div class="card_contant">
            <h2 class="card_h"> ${mobiles.iphone.iphonese.name} </h2>
            <h3 class="price" > ${mobiles.iphone.iphonese.price} </h3>
            <div class="color" id="col_e" >
                <buttonn id ="col_btn" onclick="col()" > 
                <i class="fa-solid fa-circle "></i>
                <i class="fa-solid fa-circle red"></i>
                <i class="fa-solid fa-circle blue "></i>
                <i class="fa-solid fa-circle green"></i>

                 </button>
            </div>
        </div>
    </div>
    

    <div class="card">
    <div class="img">
        <img src=" ${mobiles.iphone.iphoneX.image} " alt="">
    </div>
    <div class="card_contant">
        <h2 class="card_h"> ${mobiles.iphone.iphoneX.name} </h2>
        <h3 class="price" > ${mobiles.iphone.iphoneX.price} </h3>
        <div class="color" id="col_e" >
            <buttonn id ="col_btn" onclick="col()" > 
            <i class="fa-solid fa-circle "></i>
            <i class="fa-solid fa-circle red"></i>
            <i class="fa-solid fa-circle blue "></i>
            <i class="fa-solid fa-circle green"></i>

             </button>
        </div>
    </div>





    




</div>

 ` 





// var col_btn = document.getElementById('col_btn')
// console.log(col_btn)






// function coll() {
//     var col_e = document.getElementById('col_e')
//     console.log('mm')
//     console.log(col_e)
//     col_e.innerHTML = `
//     <i class="fa-solid fa-circle red"></i>
//     <i class="fa-solid fa-circle blue "></i>
//     <i class="fa-solid fa-circle green"></i>
//     `
// }