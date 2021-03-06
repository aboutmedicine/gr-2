const images = {
  ctb: {
    sagittal:  [
      "https://prod-images-static.radiopaedia.org/images/26601/797bf8c24735b0918de3329b5de4c1_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26602/4b3e740265b3cfe9ebdd9e9fb42f40_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26605/dbb017de97a94b99711a3635fb6dc1_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26607/a0582702bcbcc4083ee9b74c638940_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26609/0cb8ae61bcb34cbdd481905e05d4a9_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26611/5c43787e97cc94d49196e010882151_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26613/1b903c6f1c93c689981f9300386091_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26615/f78246f300d53dac3d0ae2ae24c71b_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26618/c0d2d2b2d446b70fef1a55f38c7891_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26620/318f13307b5993d7d0b625bbf0ac5c_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26622/2576d000083384a130b8bf3255f9ac_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26623/6af118de8660d926e93a4c9cccb220_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26625/c598df639ea62f607dcef06cf45f13_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26627/cd172e9a0d71c2acf6721bf853ef27_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26629/467319de6321e89ae8ce4637d2830e_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26631/c29964333d16e44a632f353781cb3b_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26633/ae08fc9242e410f9fe5d21e9237fff_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26635/76514cd8b302cdad299c58610cec4f_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26637/2515f3c134a1ab3bf4e14b282f966b_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26639/c228b99ef28e7433fcffb4dc709519_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26641/00549b8ef132ed3515e9909c0380f7_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26643/7855d06bfc0123a2cbee46c9fc330e_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26645/a95a836f8f216ded317727a50d8bd5_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26647/302902b33b9c79f28b930550b80fcf_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26649/223ee4b667a525557ad6fa6e43747d_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26651/4f9362bea53ba18625b2708b92148c_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26653/f5a478f0ab017de8a3ba7906c59430_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26655/e2675a0c4a0535e86ae6ed829ef4d1_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26657/01c0432d62af1c7f5973bdbaf67a50_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26659/765a3d6ed41670fb014fc6b2b6daab_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26661/2ba7edd2cd03a8961ae9dabe639d2b_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/26662/2db6cae7e3190f80e302741fdb6e67_big_gallery.jpeg"
    ],
    coronal: [
      "https://prod-images-static.radiopaedia.org/images/13655246/abae2d47806f6fa27acbd4b99d9a36_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655239/2ce2224973d111a6f2cd52f6586010_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655258/09291d8af33cedd5d728eb2e3a6179_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655280/ea1b654fc875221ee1f9a336a6eaa9_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655289/38f2a47deb160f76c4289d12703990_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655297/6414cb285bbdd4029f221cd2197ce1_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655308/28363f0b1e7aa07988938616ffd525_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655325/b049a46421dd0050828a606193b16a_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655339/9f39bcd6e55224b7d9f92a6a874c1d_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655360/57c0b8fd8c47f7cd65fc48a6e7388b_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655379/bc0aebc89e4438af36a6476a96f3c9_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655392/34b0f7ce74e4e893ecd1969c92b88d_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655403/669a5d5e11c4fa007ac9cf45d72541_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655416/d6aa6718fe94a37833f17c88de6196_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655431/3e7d9e652b3d39925f23d58d9b4016_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655446/768721fbb354d6353ec92303a0da98_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655464/88b1440df53fcf914a2d284e8736e1_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655480/5267bbc4a0f0cbd6cb36e4e68d8b52_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655492/26f8332ad2392ae5ed4cc6e6ca0336_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655508/65ee5b518c2627570c0a82cef238cb_big_gallery.jpeg"
    ],
    axial: [
      "https://prod-images-static.radiopaedia.org/images/13655853/ac2de425f4f38d6043285647f7a05b_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655847/59fdbc80c57bf843ea4b437bde81a5_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655865/363024ecd89251ccc221453d05450a_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655883/e177805091698b5fa1638d1cbf3133_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655895/4af03a72f81929c881edeb2093efcf_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655916/8f675df34c31a18a7db142fbdbc14e_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655932/ba29d24104918a30130f4003faac71_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655954/90ca102c87be4f399f8266ce6d96d6_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655969/46e176a22414929b51487f074cd111_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655982/4a00b3311bb014944bde02f18b51f9_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13655992/6f18681e6bd596aca981a3347e9738_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13656005/bd937738ad6223a03f8aedcf4920a7_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13656021/d022d1079185636184f1044834e3cb_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13656037/79a1ce3974d3f08edd468b78524811_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13656050/fe9adef1dd65812a09089bc6470995_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13656083/42a521318772b24fdccb5cbe924a38_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13656095/de952fae9dcff7eb07abb6d803b515_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13656109/45d46b4122d18e043baeff01ea0c43_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13656124/8abf4540607e91a8915b871ada5652_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13656147/c88253030f44a86a034a5b7459ff2e_big_gallery.jpeg",
      "https://prod-images-static.radiopaedia.org/images/13656163/bec92772b7d2e61e47e11930cf7061_big_gallery.jpeg"
    ]
  }
}

export default images;
