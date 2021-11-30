var options = 
[
    "An old flame reappears",
    "Making an old family recipe",
    "The family business is in trouble",
    "The family business is a Christmas tree farm",
    "The family business is an inn / b&b",
    "The family business is a bakery",
    "Decorating the Christmas tree",
    "Building snowmen",
    "Making snow angels",
    "Tree lighting ceremony", 
    "Lead lost a parent",
    "A former child star is starring",
    "A big-name singer is starring",
    "Lead starts out with the 'wrong' SO",
    "Another character has a crush on the main love interest",
    "It starts snowing in the last 5 minutes",
    "A furry friend steals the show",
    "The santa character is actually santa",
    "Takes place in a small town",
    "Lead buys a meaningful Christmas gift",
    "Someone sings a Christmas carol",
    "Flashback to childhood",
    "Lead has a 'thing name' like Holly or Joy",
    "Random crafty skills are showcased",
    "Lead can't stay in town for long",
    "Lead is up for a big promotion",
    "Lead isn't a big Christmas person",
    "Lead's family are crazy Christmas people",
    "Hands touch, then eyes meet",
    "Love interests run into each other, literally",
    "Love interests fall over into each other's arms",
    "Inclement weather ruins travel plans",
    "Someone is dressed like an elf",
    "Balsam Hill is mentioned by name",
    "Takes place in a made-up country",
    "A sibling gives the lead sage advice at just the right time",
    "A kid acts way too young for their actual age",
    "An adult acts way too young for their actual age",
    "An actor is way to young to be portraying the parent of another actor",
    "Lead decorates a Christmas cookie",
    "Someone encourages a relationship with the love interest",
    "Drinking coffee from a Christmas patterned take-away cup",
    "Painfully awkward situation happens",
    "An almost kiss happens",
    "Someone has a secret identity",
    "Making a Christmas wish",
    "Areal shot of a small town",
    "Stock footage of NYC is utilized",
    "Lead wears an ugly Christmas sweater (has to actually be ugly)",
    "A reference to how things are different in a small town",
    "Lead is a journalist",
    "Lead is in marketing",
    "Lead is a baker",
    "Lead is a wedding planner", 
    "Lead is travelling abroad",
    "Ice skating!",
    "The town sheriff makes an appearance",
    "Love interests seeing each other all dressed up",
    "A kiss under the mistletoe",
    "Sparks fly in front of a fire",
    "Sitting outside in the cold on a porch swing at night",
    "Someone living in a home they probably can't afford",
    "The family home is in jeapordy",
    "Movie contains a cold, heartless businessperson",
    "A cold, heartless businessperson is shown the true meaning of Christmas",
    "The parents are the real problem",
    "Someone misunderstands a situation",
    "You can name another Hallmark movie one of the leads has been in",
    "Amnesia",
    "Something clumsy happens",
    "Community coming together to save the day",
    "Contains a POC couple",
    "Contains an LGBTQ+ couple",
    "Adoption",
    "The town has a silly name",
    "Hitching a ride somewhere",
    "Too many suitcases for one person",
    "Doesn't have enough money to do something",
    "The love interest is someone the lead doesn't already know",
    "Love interfering with business",
    "Someone is gifting jewelry",
    "A proposal happens!",
    "Movie ends in a flash forward",
    "Women talking about the love interest",
    "Sipping wine",
    "A lead goes through a breakup",
    "A scene in an office in a city",
    "Someone is wearing flannel",
    "Chopping down a Christmas tree",
    "Someone drives a truck",
    "A Christmas play or concert",
    "Evil boyfriend makes a fruitless grand gesture",
    "Best friend or assistant is a racial minority",
    "Time travelling is involved",
    "Harmless brushes with the law",
    "Single parent struggles with work/life balance",
    "All the child wants for Christmas is for their parent to find love" ,
    "Parent has a matchmaking agenda",
    "Takes place at a beachy location",
    "Anonymous letters, gifts, or emails",
    "Someone FaceTimes someone else",
    "Text messages appear in the scene when the characters text each other",
    "You mistakenly think your phone went off when it was really the tv",
    "Unethical job, task, or assignment causes tension",
    "The word 'gala' is used",
    "Ends with an aerial shot",
    "Big corporation is portrayed negatively",
    "Mechanical problem arises",
    "Someone wears an apron",
    "Job offer",
    "They just left, go after them!"
];

/**
 * @brief  Shuffles the given array
 * @param  [in] array : array to shuffle
 * @return the shuffled array
 */
function shuffle(array) 
{
    let current_index = array.length,  random_index;

    while (current_index != 0) 
    {
        random_index = Math.floor(Math.random() * current_index);
        current_index--;

        [array[current_index], array[random_index]] = [array[random_index], array[current_index]];
    }

    return array;
}

/**
 * @brief Updates the bingo card table with random options by
 *        shuffling the array of options and using the top values
 */
function UpdateTable() 
{
    var max_length = 5; // size of bingo card

    shuffle(options);

    for (var row = 0; row < max_length; row++) 
    {
        for (var col = 0; col < max_length; col++) 
        {
            tmp = 'cell' + row + col;

            new_text = 'FREE'
            if (tmp !== 'cell22')
            {
                new_text = options[row * max_length + col];
            }

            document.getElementById(tmp).innerHTML = new_text;
        }
    }
}
