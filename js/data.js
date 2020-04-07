const data = {
   arr:[
     // set data 1
    // {id: 1, name: "100 Crazy Items You Can Buy on Amazon", time: "14:22", dbPath: "bc1s0qdacehova7/100-crazy-items-you-can-buy-on-amazon"},
    {id: 2, name: "DIY Budget Kitchen Rennovation for Small Spaces", time: "13:57", dbPath: "83nlrdt651sctxm/diy-budget-kitchen-rennovation-for-small-spaces"},
    {id: 3, name: "Driving Challenge - Electric Car in Spain", time: "12:57", dbPath: "aijpalua0w8opmh/driving-challenge-electric-car-in-spain"},
    {id: 4, name: "ESPN Top 40 Plays of the Week", time: "10:17", dbPath: "lk2c0v236f5fyf1/espn-top-40-plays-of-the-week"},
    {id: 5, name: "Food Network - Valerie's Home Cooking", time: "21:11", dbPath: "6vs420byrtksi9t/food-network-valeries-home-cooking."},
    {id: 6, name: "Freeriding The Steep Mountains Of Chamonix", time: "15:55", dbPath: "mr6l7jz36rd1ys2/freeriding-the-steep-mountains-of-chamonix"},
    {id: 7, name: "Luxury Home Tour", time:"10:59", dbPath: "lxgniybx6xsrrzp/luxury-home-tour"},
    {id: 8, name: "Olympic Rock Climbing Athlete Interview", time: "10:34", dbPath: "gc7n5tex6kejom8/olympic-rock-climbing-athlete-interview"},
    {id: 9, name: "PBS Special - The Search for Black Holes", time: "13:37", dbPath: "6qnakzm1vcr8j8s/pbs-special-the-search-for-black-holes"},
    {id: 10, name: "Tiny House Adventure in Colorado", time: "14:35", dbPath: "8r1v1d6fpf707m0/tiny-house-adventure-in-colorado"},
    {id: 11, name: "Unboxing High Tech Headphones Review", time: "11:43", dbPath: "cermn2kdrik72ll/unboxing-high-tech-headphones-review"},
    {id: 12, name: "Zelda Breath of the Wild Shrine Guide", time: "13:38", dbPath: "6qit8kesiv4gm59/zelda-breath-of-the-wild-shrine-guide"},
    //data set 2
   {id: 13, name: "As Seen on TV Reviews", time: "10:04", dbPath:"k4fvds2sdnp1bud/as-seen-on-tv-review"},
   {id: 14, name: "Freeriding The Steep Mountains Of Chamonix 2", time: "15:55", dbPath: "bk2q5khtzygvdqr/freeriding-the-steep-mountains-of-chamonix-2"},
   {id: 15, name: "Grumpy Gamers Game Mashup - Operation Meets Uno! (Explicit)", time: "17:44", dbPath: "9fnw14smmjb66w2/grumpy-gamers-game-mashup-operation-meets-uno-explicit"},
   {id: 16, name: "Small Space Decorating Tips", time: "12:12", dbPath: "g450kchl45pn88t/small-space-decorating-tips"},
   {id: 17, name: "Tiny House Adventure in Colorado 2", time: "14:52", dbPath: "q7tq6tlvfj3xlh9/tiny-house-adventure-in-colorado-2"},
   {id: 18, name: "Unboxing High Tech Headphones Review 2", time: "15:55", dbPath: "nd9fgt595dlq005/unboxing-high-tech-headphones-review-2"},
   {id: 19, name: "DIY Budget Kitchen Rennovation for Small Spaces 2", time:"13:53", dbPath: "gnhk6qhjkc8edue/diy-budget-kitchen-rennovation-for-small-spaces-2"},
   {id: 20, name: "DIY Rustic Farmhouse Queen Bedframe", time:"12:37", dbPath: "92ih0gcpz8tqq6u/diy-rustic-farmhouse-queen-bedframe"},
   {id: 21, name: "Driving Challenge - Electric Car in Spain 2", time:"12:55", dbPath: "xri2zl1nc688ugs/driving-challenge-electric-car-in-spain-2"},
   {id: 22, name: "ESPN Top 40 Plays of the Week 2", time:"10:08", dbPath: "cn2tyqrji40icw7/espn-top-40-plays-of-the-week-2"}
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
