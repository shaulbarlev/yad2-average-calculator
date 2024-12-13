//Paste this in the console on Yad2.co.il search results

//declerations
let items
let prices
let sum
let avg
let limit

//set limit
limit=2000

//finding prices
items = [...document.querySelectorAll('li[data-nagish="feed-item-list-box"] span[data-testid="price"]')]
prices = items.map((item) => {
	return item.innerText.match(/[^\u20AA, ]+/g).join('')
})
prices = prices.filter(price => price<limit)

//finding sum then average
sum = prices.reduce((accu, value) => {
	accu += Number(value)
	return accu
}, 0)