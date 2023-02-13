const zodiacArray = ['Aquarius','Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn',];
const randomZodiac = zodiacArray[Math.floor(Math.random() * zodiacArray.length)];

const lovePrediction = Math.floor(Math.random() * 101);

const readingArray = ['Your shoes will make you happy today',
'A stranger, is a friend you have not spoken to yet',
'Now is the time to try something new',
'Its amazing how much good you can do if you dont care who gets the credit',
'You will marry your lover',
'The greatest love is self-love',
'Adversity is the parent of virtue',
'Be on the lookout for coming events; They cast their shadows beforehand',
'Meeting adversity well is the source of your strength'];
const readingPrediction = readingArray[Math.floor(Math.random() * readingArray.length)];


let message = `Your zodiac sign is: ${randomZodiac}.
Your love prediction for today is: ${lovePrediction}.
Your reading for today is: ${readingPrediction}.`

console.log(message);