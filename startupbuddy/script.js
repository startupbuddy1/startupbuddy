function generateIdea(){

const ideas = [
"Start a TikTok business reviewing products",
"Create a local car detailing service",
"Launch a gaming content channel",
"Sell custom sports merchandise",
"Start a social media marketing agency"
];

const random =
ideas[Math.floor(Math.random()*ideas.length)];

document.getElementById("result").innerHTML =
random;
}
