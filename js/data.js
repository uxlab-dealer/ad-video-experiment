const data = {
   arr:[
     // set data 1
    {id: 1, name: "100 Crazy Items You Can Buy on Amazon", time: "14:22"},
    {id: 2, name: "DIY Budget Kitchen Rennovation for Small Spaces", time: "13:57"},
    {id: 3, name: "Driving Challenge - Electric Car in Spain", time: "12:57"},
    {id: 4, name: "ESPN Top 40 Plays of the Week", time: "10:17"},
    {id: 5, name: "Food Network - Valerie's Home Cooking", time: "21:11"},
    {id: 6, name: "Freeriding The Steep Mountains Of Chamonix", time: "15:55"},
    {id: 7, name: "Luxury Home Tour", time:"10:59"},
    {id: 8, name: "Olympic Rock Climbing Athlete Interview", time: "10:34"},
    {id: 9, name: "PBS Special - The Search for Black Holes", time: "13:37"},
    {id: 10, name: "Tiny House Adventure in Colorado", time: "14:35"},
    {id: 11, name: "Unboxing High Tech Headphones Review", time: "11:43"},
    {id: 12, name: "Zelda Breath of the Wild Shrine Guide", time: "13:38"},
    //data set 2
   {id: 13, name: "As Seen on TV Reviews", time: "10:04"},
   {id: 14, name: "Freeriding The Steep Mountains Of Chamonix 2", time: "15:55"},
   {id: 15, name: "Grumpy Gamers Game Mashup - Operation Meets Uno! (Explicit)", time: "17:44"},
   {id: 16, name: "Small Space Decorating Tips", time: "12:12"},
   {id: 17, name: "Tiny House Adventure in Colorado 2", time: "14:52"},
   {id: 18, name: "Unboxing High Tech Headphones Review 2", time: "15:55"},
   {id: 19, name: "DIY Budget Kitchen Rennovation for Small Spaces 2", time:"13:53"},
   {id: 20, name: "DIY Rustic Farmhouse Queen Bedframe", time:"12:37"},
   {id: 21, name: "Driving Challenge - Electric Car in Spain 2", time:"12:55"},
   {id: 22, name: "ESPN Top 40 Plays of the Week 2", time:"10:08"}
 ]

};

const methods = {
  slugify(str){
    return str.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
  },
  getURLParam(key){
    return new URLSearchParams(window.location.search).get(key);
  }
}

export {data, methods}
